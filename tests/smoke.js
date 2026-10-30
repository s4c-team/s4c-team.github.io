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
  const refs = [...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map(m => m[1]).filter(r => !r.startsWith("//") && r !== "/");
  refs.forEach(r => check(fs.existsSync(path.join(ROOT, r)), "tồn tại: " + r));
  ["og-cover.png", "robots.txt", "sitemap.xml", "404.html"].forEach(f => check(fs.existsSync(path.join(ROOT, f)), "tồn tại: " + f));
  check((html.match(/<h1[\s>]/g) || []).length === 1, "chỉ một <h1> trong index.html");
  check((html.match(/"@type":"ProfessionalService"/g) || []).length === 1, "JSON-LD ProfessionalService khai báo một lần");
  check((html.match(/fonts\.googleapis\.com\/css2/g) || []).length === 1, "Google Fonts tải một lần");
  check(!/base64,/.test(html), "không nhúng ảnh base64");
  const imgs = [...html.matchAll(/<img[^>]*src="([^"]+)"/g)].map(m => m[1]);
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
    await page.goBack();
    check(page.url().endsWith("#engagement") && await page.isVisible("#view-engagement.active"), "nút Back quay về màn trước");

    await page.goto(base + "/#pricing");
    check(await page.isVisible("#view-pricing.active"), "deep link #pricing mở đúng màn");

    await page.click("#consentNo");
    await page.reload();
    check(!(await page.isVisible("#consent.show")), "ghi nhớ lựa chọn từ chối cookie");

    const labels = await page.$$eval("#shareRow .share-btn", bs => bs.map(b => b.textContent.trim()));
    check(!labels.some(l => /Telegram|Messenger/.test(l)), "ẩn kênh liên hệ chưa cấu hình (" + labels.join(", ") + ")");
    check(labels.includes("Zalo"), "có kênh Zalo");

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

    check(errors.length === 0, "không có lỗi JavaScript" + (errors.length ? ": " + errors.join(" | ") : ""));
    await ctx.close();
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
