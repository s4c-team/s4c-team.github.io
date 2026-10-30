// Smoke test cho S4C portal — chạy: node tests/smoke.js
// Mở site qua một static server nội bộ, kiểm tra lỗi JS, điều hướng, URL theo màn, a11y cơ bản và file tham chiếu.
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.resolve(__dirname, "..");
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".webp": "image/webp", ".xml": "application/xml", ".txt": "text/plain" };
const VIEWS = ["overview", "scenario", "about", "services", "pricing", "models", "architecture", "faq", "engagement", "privacy"];

let failures = 0;
const check = (ok, msg) => { console.log((ok ? "  ✓ " : "  ✗ ") + msg); if (!ok) failures++; };

function serve() {
  const server = http.createServer((req, res) => {
    const p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    let file = path.join(ROOT, p === "/" ? "index.html" : p);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404, { "Content-Type": TYPES[".html"] }); return res.end(fs.readFileSync(path.join(ROOT, "404.html")));
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    res.end(fs.readFileSync(file));
  });
  return new Promise(r => server.listen(0, "127.0.0.1", () => r(server)));
}

function checkStatic() {
  console.log("Static checks");
  const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const refs = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map(m => m[1].split("?")[0]).filter(r => !r.startsWith("//") && r !== "/");
  const { hash } = require("../tools/stamp-assets.js");
  refs.forEach(r => check(fs.existsSync(path.join(ROOT, r)), "tồn tại: " + r));
  ["og-cover.png", "robots.txt", "sitemap.xml", "404.html"].forEach(f => check(fs.existsSync(path.join(ROOT, f)), "tồn tại: " + f));
  check((html.match(/<h1[\s>]/g) || []).length === 1, "chỉ một <h1> trong index.html");
  check((html.match(/"@type":"ProfessionalService"/g) || []).length === 1, "JSON-LD ProfessionalService khai báo một lần");
  check((html.match(/fonts\.googleapis\.com\/css2/g) || []).length === 1, "Google Fonts tải một lần");
  check(!/base64,/.test(html), "không nhúng ảnh base64");
  const stale = [...html.matchAll(/(?:src|href)="(assets\/[^"?]+)(?:\?v=([0-9a-f]+))?"/g)].filter(m => m[2] !== hash(m[1])).map(m => m[1]);
  check(stale.length === 0, "mã phiên bản ?v= khớp nội dung file" + (stale.length ? " — chạy node tools/stamp-assets.js: " + stale.join(", ") : ""));
  const imgs = [...html.matchAll(/<img[^>]*src="([^"?]+)/g)].map(m => m[1]);
  check(new Set(imgs).size === imgs.length, "không có ảnh dùng lặp (" + imgs.length + " ảnh)");
  const files = fs.readdirSync(path.join(ROOT, "assets/img")).map(f => "assets/img/" + f);
  const unused = files.filter(f => !imgs.includes(f));
  check(unused.length === 0, "không còn ảnh thừa trong assets/img" + (unused.length ? ": " + unused.join(", ") : ""));
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].forEach((m, i) => {
    let ok = true; try { JSON.parse(m[1]); } catch (e) { ok = false; } check(ok, "JSON-LD #" + (i + 1) + " hợp lệ");
  });
}

async function checkBrowser(base) {
  const browser = await chromium.launch();
  for (const vp of [{ width: 1366, height: 800, name: "desktop" }, { width: 375, height: 740, name: "mobile" }]) {
    console.log("Browser — " + vp.name);
    const ctx = await browser.newContext({ viewport: vp });
    // chặn request ra ngoài (fonts, analytics) để test ổn định
    await ctx.route(url => !url.href.startsWith(base), r => r.abort());
    const page = await ctx.newPage();
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));
    await page.goto(base + "/");
    await page.waitForTimeout(400);

    check(await page.isVisible("#view-overview.active"), "mở trang chủ ở màn Tổng quan");
    check(await page.isVisible("#consent.show"), "hiện thông báo cookie khi chưa chọn");
    check(!(await page.evaluate(() => !!window.gtag)), "chưa tải Google Analytics trước khi đồng ý");
    check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), "không cuộn ngang");

    for (const v of VIEWS.slice(1)) {
      await page.evaluate(view => go(view), v);
      check(await page.isVisible("#view-" + v + ".active") && page.url().endsWith("#" + v), "điều hướng tới #" + v);
    }
    const leaks = [];
    for (const v of VIEWS) {
      await page.evaluate(view => go(view), v);
      const t = await page.evaluate(view => document.getElementById("view-" + view).innerText, v);
      if (/undefined|NaN|\[object /.test(t)) leaks.push(v);
    }
    check(leaks.length === 0, "không hiện chữ undefined/NaN trên màn" + (leaks.length ? ": " + leaks.join(", ") : ""));
    await page.goBack();
    check(page.url().endsWith("#engagement") && await page.isVisible("#view-engagement.active"), "nút Back quay về màn trước");

    await page.goto(base + "/#scenario");
    check(await page.isVisible("#demoRun.playing"), "demo tự chạy khi vào màn Kịch bản");
    await page.evaluate(() => { document.getElementById("demoRun").scrollIntoView({ block: "start" }); AUTO.ms = 300; autoReset(); });
    await page.mouse.move(1, 1);
    await page.waitForFunction(() => STATE.stageIdx >= 1, null, { timeout: 4000 }).catch(() => {});
    check(await page.evaluate(() => STATE.stageIdx >= 1), "demo tự chuyển sang bước tiếp");
    await page.evaluate(() => { STATE.stageIdx = curScen().steps.length - 1; renderScenario(); document.getElementById("demoRun").scrollIntoView({ block: "start" }); });
    await page.waitForFunction(() => STATE.scenId !== "assess", null, { timeout: 4000 }).catch(() => {});
    check(await page.evaluate(() => STATE.scenId === "tune" && STATE.stageIdx === 0), "hết kịch bản thì sang kịch bản kế tiếp");
    await page.click("#plToggle");
    const idx = await page.evaluate(() => STATE.stageIdx);
    await page.waitForTimeout(800);
    check(!(await page.isVisible("#demoRun.playing")) && await page.evaluate(i => STATE.stageIdx === i, idx), "nút Tạm dừng dừng tự chạy");
    await page.click("#plNext");
    check(await page.evaluate(i => STATE.stageIdx === i + 1, idx), "nút bước tiếp hoạt động");
    await page.evaluate(() => { setAuto(true); go("faq"); });
    check(await page.evaluate(() => !AUTO.on), "rời màn Kịch bản thì dừng tự chạy");
    check(await page.isVisible("#view-faq .next-step"), "có thanh Tiếp theo cuối màn");

    await page.goto(base + "/#pricing");
    check(await page.isVisible("#view-pricing.active"), "deep link #pricing mở đúng màn");

    await page.click("#consentNo");
    await page.reload();
    check(!(await page.isVisible("#consent.show")), "ghi nhớ lựa chọn từ chối cookie");

    const labels = await page.$$eval("#shareRow .share-btn", bs => bs.map(b => b.textContent.trim()));
    check(labels.join("|") === "Hotline|Email|Sao chép nội dung", "chỉ hiện kênh Hotline, Email (" + labels.join(", ") + ")");
    const rows = await page.$$eval(".cb-row", rs => rs.filter(r => getComputedStyle(r).display !== "none").map(r => r.querySelector(".cb-k").textContent));
    check(rows.join("|") === "Hotline|Email", "khung liên hệ chỉ hiện Hotline, Email (" + rows.join(", ") + ")");

    await page.evaluate(() => document.documentElement.removeAttribute("data-theme"));
    await page.click("#themeBtn").catch(async () => { await page.click("#hamb"); await page.click("#themeBtn"); });
    const theme = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    await page.reload();
    check(await page.evaluate(() => document.documentElement.getAttribute("data-theme")) === theme, "lưu lựa chọn theme");

    await page.goto(base + "/#services");
    const card = page.locator(".svc-card").first();
    await card.focus(); await page.keyboard.press("Enter");
    check(await page.isVisible("#panelClose"), "mở thẻ dịch vụ bằng bàn phím");
    await page.keyboard.press("Escape");
    check(!(await page.isVisible("#panelClose")), "Esc đóng panel");

    check(await page.getAttribute("#hamb", "aria-label") !== null, "nút menu có aria-label");
    const noAlt = await page.$$eval("img", is => is.filter(i => !i.hasAttribute("alt") || (!i.alt && !i.closest("[aria-hidden=true]"))).length);
    check(noAlt === 0, "mọi ảnh nội dung đều có alt");
    const broken = await page.evaluate(async () => Promise.all([...document.images].map(i => { i.loading = "eager"; return i.decode().then(() => null, () => i.getAttribute("src")); })));
    check(broken.every(b => !b), "mọi ảnh đều tải được" + (broken.some(b => b) ? ": " + broken.filter(Boolean).join(", ") : ""));

    if (vp.name === "mobile") {
      await page.goto(base + "/#models");
      const cols = await page.$eval("#modelGrid", e => getComputedStyle(e).gridTemplateColumns.split(" ").length);
      check(cols === 1, "Cách hợp tác hiển thị 1 cột trên mobile");
    }
    check(errors.length === 0, "không có lỗi JavaScript" + (errors.length ? ": " + errors.join(" | ") : ""));
    await ctx.close();
  }
  console.log("Demo tự chạy trong các điều kiện thực tế");
  for (const [name, opts] of [["điện thoại, chưa cuộn tới demo", { viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true }],
                              ["máy bật giảm chuyển động", { viewport: { width: 1366, height: 800 }, reducedMotion: "reduce" }]]) {
    const c = await browser.newContext(opts);
    await c.route(url => !url.href.startsWith(base), r => r.abort());
    const pg = await c.newPage();
    await pg.goto(base + "/#scenario");
    await pg.evaluate(() => { AUTO.ms = 400; autoReset(); });
    await pg.waitForFunction(() => STATE.stageIdx >= 1, null, { timeout: 4000 }).catch(() => {});
    check(await pg.evaluate(() => AUTO.on && STATE.stageIdx >= 1), name + ": demo vẫn tự chuyển bước");
    await c.close();
  }
  {
    const c = await browser.newContext({ viewport: { width: 1366, height: 800 } });
    await c.route(url => !url.href.startsWith(base), r => r.abort());
    const pg = await c.newPage();
    await pg.goto(base + "/#scenario");
    await pg.evaluate(() => { document.getElementById("demoRun").scrollIntoView({ block: "start" }); });
    const box = await pg.locator(".scn-stage").boundingBox();
    await pg.mouse.move(box.x + 50, box.y + 50); await pg.mouse.move(box.x + 60, box.y + 60);
    check(await pg.evaluate(() => AUTO.hold), "rê chuột trên demo thì tạm giữ");
    await pg.waitForFunction(() => !AUTO.hold, null, { timeout: 6000 }).catch(() => {});
    check(await pg.evaluate(() => !AUTO.hold), "con trỏ nằm yên thì vài giây sau tự chạy tiếp");
    await c.close();
  }

  console.log("Quét cuộn ngang ở nhiều cỡ màn hình");
  for (const w of [320, 768, 1024, 1440]) {
    const c = await browser.newContext({ viewport: { width: w, height: 800 } });
    await c.route(url => !url.href.startsWith(base), r => r.abort());
    const pg = await c.newPage();
    await pg.goto(base + "/");
    const bad = [];
    for (const v of VIEWS) {
      await pg.evaluate(view => go(view), v);
      if (await pg.evaluate(() => document.documentElement.scrollWidth > innerWidth)) bad.push(v);
    }
    check(bad.length === 0, w + "px: không cuộn ngang" + (bad.length ? " (" + bad.join(", ") + ")" : ""));
    await c.close();
  }
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const r = await page.goto(base + "/khong-ton-tai");
  check(r.status() === 404 && (await page.textContent("h1")) === "404", "trang 404 hoạt động");
  await browser.close();
}

(async () => {
  checkStatic();
  const server = await serve();
  const base = "http://127.0.0.1:" + server.address().port;
  try { await checkBrowser(base); } finally { server.close(); }
  console.log(failures ? `\n${failures} kiểm tra thất bại` : "\nTất cả kiểm tra đều đạt");
  process.exit(failures ? 1 : 0);
})();
