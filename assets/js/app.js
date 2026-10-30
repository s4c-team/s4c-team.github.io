/* =========================================================
   S4C — Trang giới thiệu dịch vụ tương tác
   Vận hành · tối ưu · an toàn hệ thống cho DN nhỏ
   ========================================================= */

/* ---- Cấu hình liên hệ — giá trị dạng "[...]" được coi là chưa có và kênh đó sẽ bị ẩn ---- */
const CONTACT = {
  name:     "Mr. Thịnh",
  hotline:  "076.901.0092",
  email:    "thinhdv90@gmail.com",
  phone:    "076.901.0092",
  telegram: "[Telegram: @username hoặc link t.me]",
  messenger:"[Messenger: link m.me]",
};
/* Endpoint nhận form (vd Formspree: "https://formspree.io/f/xxxxxxx"). Để trống thì chỉ gửi qua các kênh liên hệ. */
const FORM_ENDPOINT = "";
/* Bảng giá tham khảo — chỉnh số tùy ý */
const PRICING = [
  { icon:"chat",    name:"Trao đổi & tư vấn ban đầu", price:"Miễn phí", unit:"", popular:false,
    desc:"Một buổi nghe bài toán của bạn và phác thảo hướng xử lý. Không cam kết, không ràng buộc.",
    items:["Hiểu nhu cầu & hiện trạng","Gợi ý hướng ưu tiên","Phác thảo phạm vi & chi phí"] },
  { icon:"search",  name:"Tư vấn & đánh giá hệ thống", price:"Theo quy mô", unit:"", popular:false,
    desc:"Rà soát tổng thể, đánh giá sức khỏe & an toàn, chỉ ra điểm yếu theo thứ tự ưu tiên.",
    items:["Đánh giá vận hành + an toàn","Báo cáo & điểm số dễ hiểu","Lộ trình đề xuất rõ ràng"] },
  { icon:"wrench",  name:"Triển khai & tối ưu", price:"Theo gói công việc", unit:"", popular:true,
    desc:"Dựng nền tảng: cài đặt & cấu hình, tối ưu hiệu năng, hardening (FW/WAF/PAM), sao lưu.",
    items:["Thiết lập & siết cấu hình","Tối ưu hiệu năng (performance)","Bảo vệ nhiều lớp + sao lưu"] },
  { icon:"gear",    name:"Đồng hành vận hành (Managed)", price:"Phí theo tháng", unit:"", popular:false,
    desc:"S4C vận hành, giám sát, tối ưu định kỳ và ứng cứu sự cố hằng tháng — thay cho đội kỹ thuật.",
    items:["Giám sát & cảnh báo sớm","Vận hành + tuning định kỳ","Ứng cứu sự cố + báo cáo"] },
  { icon:"users",   name:"Thuê theo giờ / theo việc", price:"Theo giờ / đợt", unit:"", popular:false,
    desc:"Cần người làm theo đợt, linh hoạt như một thành viên kỹ thuật bên ngoài.",
    items:["Theo nhu cầu cụ thể","Không ràng buộc dài hạn","Tính theo khối lượng"] },
  { icon:"sliders", name:"Giải pháp may đo (Custom)", price:"Báo giá riêng", unit:"", popular:false,
    desc:"Bài toán đặc thù cần thiết kế riêng. S4C nghiên cứu và triển khai đúng tình huống của bạn.",
    items:["Khảo sát & thiết kế riêng","Kết hợp nhiều dịch vụ","Báo giá theo phạm vi"] },
];

/* ---------- Icon set (đơn sắc, cùng tông) ---------- */
const ICONS = {
  home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
  book:'<path d="M12 6c-2-1.3-4.6-2-7.2-2A1 1 0 004 5v12.5a1 1 0 001 1c2.4 0 4.7.6 7 1.8 2.3-1.2 4.6-1.8 7-1.8a1 1 0 001-1V5a1 1 0 00-.8-1C16.6 4 14 4.7 12 6z"/><path d="M12 6v13"/>',
  quote:'<path d="M9 7H5a2 2 0 00-2 2v3a2 2 0 002 2h2v3H4M19 7h-4a2 2 0 00-2 2v3a2 2 0 002 2h2v3h-3"/>',
  play:'<path d="M7 5l12 7-12 7z" fill="currentColor" stroke="none"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  money:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6 9v6M18 9v6"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3.5 20c0-3 2.6-5 5.5-5s5.5 2 5.5 5"/><path d="M16 5.2a3 3 0 010 5.6"/><path d="M20.5 20c0-2.4-1.7-4.2-4-4.8"/>',
  network:'<circle cx="5" cy="12" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="19" cy="18" r="2.2"/><path d="M7 11l10-4M7 13l10 4"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20.5 20.5l-4.2-4.2"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2.2 5-5 2.2 2.2-5z" fill="currentColor" stroke="none"/>',
  gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3.2v2.4M12 18.4v2.4M4.4 7.5l2 1.2M17.6 15.3l2 1.2M4.4 16.5l2-1.2M17.6 8.7l2-1.2"/>',
  shield:'<path d="M12 3l7 3v5c0 4.4-3 7.4-7 9-4-1.6-7-4.6-7-9V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  pulse:'<path d="M3 12h4l2.5-6 4 12 2.5-6H21"/>',
  chart:'<path d="M4 4v16h16"/><path d="M8 15l3-3 3 2 4-5"/>',
  wrench:'<path d="M15.5 6.5a3.6 3.6 0 01-4.6 4.6L5 17l2 2 5.9-5.9a3.6 3.6 0 004.6-4.6l-2.3 2.3-1.9-.4-.4-1.9z"/>',
  sliders:'<path d="M4 7h9M18 7h2M4 12h4M12 12h8M4 17h12M18 17h2"/><circle cx="15.5" cy="7" r="1.8" fill="currentColor" stroke="none"/><circle cx="9.5" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="15.5" cy="17" r="1.8" fill="currentColor" stroke="none"/>',
  chat:'<path d="M4 5h16a1 1 0 011 1v9a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z"/>',
  eye:'<path d="M2 12s3.6-6.2 10-6.2S22 12 22 12s-3.6 6.2-10 6.2S2 12 2 12z"/><circle cx="12" cy="12" r="2.6"/>',
  database:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.6 3.6 3 8 3s8-1.4 8-3V6"/><path d="M4 12c0 1.6 3.6 3 8 3s8-1.4 8-3"/>',
  lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  wall:'<rect x="3" y="4.5" width="18" height="15" rx="1.5"/><path d="M3 9.5h18M3 14.5h18M9 4.5v5M15 9.5v5M9 14.5v5"/>',
  handshake:'<path d="M3 13l3-3 4 3 2-2 5 4"/><path d="M12 11l3-3 6 5"/><path d="M3 13v4a1 1 0 001 1h3"/>',
  store:'<path d="M4 9l1-4h14l1 4"/><path d="M4 9a2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0"/><path d="M5 11v8h14v-8"/><path d="M9 19v-5h4v5"/>',
  opensource:'<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v6M8.5 15.5l-3 3M15.5 15.5l3 3"/>',
  check:'<path d="M4 12l5 5L20 6"/>',
  minus:'<path d="M5 12h14"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.5"/>',
  copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 012-2h8"/>',
  phone:'<path d="M5 4h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  telegram:'<path d="M21.5 4.2L2.8 11.4c-.9.3-.9 1.5.1 1.8l4.6 1.4 1.7 5c.3.8 1.2 1 1.8.4l2.6-2.4 4.5 3.3c.7.5 1.6.1 1.8-.7L23 5.4c.2-.9-.6-1.6-1.5-1.2z" fill="currentColor" stroke="none"/>',
  facebook:'<path d="M14 9h3V6h-3c-1.9 0-3 1.3-3 3v2H8v3h3v6h3v-6h3l1-3h-4V9z" fill="currentColor" stroke="none"/>',
  send:'<path d="M4 12l16-7-7 16-2.5-6.5z"/>',
};
function svgIcon(name){ return `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||""}</svg>`; }

const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const el = (t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isPlaceholder = v => !v || /^\s*\[.*\]\s*$/.test(v);
/* biến phần tử không phải <button> thành nút dùng được bằng bàn phím */
function asButton(node, fn){ node.setAttribute("role","button"); node.tabIndex=0; node.addEventListener("click",fn); node.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); fn(e); } }); return node; }
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const randInt=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
function copyText(txt){
  try{ navigator.clipboard.writeText(txt); return; }catch(e){}
  try{ const ta=document.createElement("textarea"); ta.value=txt; ta.style.position="fixed"; ta.style.opacity="0"; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove(); }catch(e){}
}
function toast(msg){ const o=$("#copyOk"); if(!o) return; o.textContent="✓ "+msg; o.style.display="inline"; clearTimeout(window.__toast); window.__toast=setTimeout(()=>o.style.display="none",2800); }
function liveStop(){ if(window.__live){ clearInterval(window.__live); window.__live=null; } }
function countUp(elm, target){
  if(!elm) return;
  if(reduceMotion){ elm.textContent=target; return; }
  const dur=900, t0=performance.now();
  (function step(t){ const k=Math.min(1,(t-t0)/dur); elm.textContent=Math.round(target*(1-Math.pow(1-k,3))); if(k<1) requestAnimationFrame(step); })(t0);
}
function animateGauge(target){
  const arc=$("#gArc");
  if(arc && !reduceMotion){ const L=arc.getTotalLength(); arc.style.transition="none"; arc.style.strokeDasharray=L; arc.style.strokeDashoffset=L; requestAnimationFrame(()=>requestAnimationFrame(()=>{ arc.style.transition="stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1)"; arc.style.strokeDashoffset=0; })); }
  countUp($("#gScore"), target);
}

/* ---------- Nav ---------- */
const NAV = [
  { sec:"Bắt đầu" },
  { view:"overview", icon:"home", label:"Tổng quan" },
  { view:"scenario", icon:"play", label:"Kịch bản thực tế", feature:true },
  { view:"about", icon:"book", label:"Về S4C" },
  { sec:"Tìm hiểu" },
  { view:"services", icon:"grid", label:"Nhóm dịch vụ" },
  { view:"pricing", icon:"money", label:"Bảng giá tham khảo" },
  { view:"models", icon:"handshake", label:"Cách hợp tác" },
  { view:"architecture", icon:"network", label:"Giải pháp & công nghệ" },
  { view:"faq", icon:"quote", label:"Câu hỏi thường gặp" },
  { view:"engagement", icon:"mail", label:"Liên hệ & khảo sát" },
];
const navScroll=$("#navScroll");
NAV.forEach(n=>{
  if(n.sec){ navScroll.appendChild(el("div","nav-sec",n.sec)); return; }
  const b=el("button","nav-item"+(n.feature?" feature":"")+(n.view==="overview"?" active":""));
  b.dataset.view=n.view;
  b.innerHTML=`<span class="ix">${svgIcon(n.icon)}</span>${n.label}`;
  navScroll.appendChild(b);
});
$("#guideBtn").innerHTML=`${svgIcon("play")} Trình bày theo kịch bản`;
$("#resetBtn").textContent="↺ Xem lại từ đầu";
$("#themeBtn").textContent="◐ Theme";

/* resolve inline [data-icon] placeholders in static HTML */
$$("[data-icon]").forEach(n=>{ n.innerHTML=svgIcon(n.dataset.icon); });

/* ---------- Data ---------- */
const PAINS = [
  { q:"Hệ thống chậm dần, hay treo mà không rõ vì sao?", a:"Thiếu người theo dõi thì chỉ biết khi khách phàn nàn. Thường là ổ đĩa đầy, cấu hình chưa tối ưu hoặc quá tải.", cost:"Khách bỏ đi, nhân viên mất thời gian" },
  { q:"Không có ai lo máy chủ, cập nhật hay sao lưu định kỳ?", a:"Những việc 'thầm lặng' này rất dễ bị bỏ quên — đến khi hỏng mới phát hiện chưa có bản sao lưu nào dùng được.", cost:"Rủi ro mất dữ liệu, gián đoạn" },
  { q:"Website / app bị tấn công, chèn mã độc hay sập?", a:"Hệ thống công khai luôn bị dò quét tự động. Không có lá chắn và không ai theo dõi thì rất dễ bị khai thác.", cost:"Mất doanh thu, mất uy tín" },
  { q:"Dữ liệu khách hàng bị khóa đòi tiền chuộc?", a:"Ransomware không chừa doanh nghiệp nhỏ. Không sao lưu đúng cách thì gần như mất trắng.", cost:"Có nơi phải đóng cửa vì chuyện này" },
  { q:"Thuê hẳn một nhân viên kỹ thuật thì không kham nổi?", a:"Lương một người làm full-time là khoản cố định lớn, trong khi nhu cầu thật chưa cần tới mức đó.", cost:"Chi phí cố định vượt nhu cầu" },
  { q:"Không biết mình đang thiếu / yếu ở đâu để lo?", a:"Phần khó nhất là không rõ vấn đề nằm đâu. Không được đánh giá thì không biết nên làm gì trước.", cost:"Lo sai chỗ, tốn tiền không đúng việc" },
];
const VALUES = [
  { icon:"money", t:"Chi phí vừa sức, minh bạch", d:"Ưu tiên công cụ mã nguồn mở, không bắt mua license chi phí cao. Có bảng giá tham khảo rõ ràng, báo giá trước khi làm." },
  { icon:"wrench", t:"Lo phần kỹ thuật cho bạn", d:"Vận hành, tối ưu hiệu năng và giữ an toàn — để bạn yên tâm tập trung kinh doanh." },
  { icon:"handshake", t:"Đồng hành dài hạn", d:"Không bỏ bạn tự xoay. Có người theo dõi, xử lý khi sự cố và tư vấn khi cần." },
];
/* ===== 4 KỊCH BẢN (sắp theo thứ tự dịch vụ) — mỗi KB có OUTPUT bàn giao ===== */
const SCENARIOS = [
  { id:"assess", icon:"search", step:"Dịch vụ 1 · Tư vấn & Đánh giá", label:"Đánh giá tổng thể",
    tag:"Rà soát toàn diện hệ thống & ATTT theo khung chuẩn → bàn giao bản đánh giá, rủi ro và khuyến nghị.",
    customer:{icon:"network", name:"Công ty IT game outsource", type:"~60 kỹ sư · gia công cho studio Âu–Mỹ", context:"Đối tác nước ngoài yêu cầu bản đánh giá năng lực an toàn thông tin trước khi ký hợp đồng mới"},
    steps:[
      {key:"why", nav:"Vì sao", title:"1 · Vì sao cần đánh giá tổng thể", intro:"Đối tác nước ngoài, nhà đầu tư, hay chính rủi ro mất dữ liệu buộc bạn phải biết hệ thống mình đang ở đâu so với một chuẩn an toàn — bằng chứng, không cảm tính."},
      {key:"framework", nav:"Khung chuẩn", title:"2 · Soi theo một khung chuẩn", intro:"S4C đánh giá theo khung NIST CSF — 5 trụ cột dễ hiểu: Nhận diện, Bảo vệ, Phát hiện, Ứng phó, Phục hồi; đối chiếu thêm các mục của ISO 27001."},
      {key:"radar", nav:"Kết quả", title:"3 · Kết quả: mức trưởng thành hiện tại", intro:"Điểm từng trụ cột hiện ra trên một bức tranh. Bạn thấy ngay mình mạnh ở đâu, yếu ở đâu so với mục tiêu."},
      {key:"gap", nav:"Khoảng cách", title:"4 · Khoảng cách & rủi ro", intro:"S4C liệt kê khoảng cách cụ thể theo mức ưu tiên — cái nào nguy hiểm cần xử lý ngay, cái nào làm sau."},
      {key:"output", nav:"Bàn giao", title:"5 · Bàn giao: Bản đánh giá tổng thể", intro:"Kết quả cuối cùng là một bộ tài liệu bạn cầm được — để ra quyết định, trình đối tác hoặc chuẩn bị audit."},
    ]},
  { id:"tune", icon:"gear", step:"Dịch vụ 2 · Hardening & Tối ưu", label:"Hardening & Tối ưu hiệu năng",
    tag:"Siết cấu hình, tối ưu hiệu năng (performance) và tăng cường bảo mật → hệ thống nhanh hơn và đạt chuẩn.",
    customer:{icon:"store", name:"Nền tảng app đi chợ", type:"Startup giao hàng · ~25 người", context:"Lượt truy cập tăng nhanh — giờ cao điểm hệ thống quá tải, đồng thời lo bề mặt tấn công mở rộng"},
    steps:[
      {key:"ctx", nav:"Bối cảnh", title:"1 · Bối cảnh: vừa chậm, vừa hở", intro:"Giờ cao điểm hệ thống quá tải, phản hồi chậm; song song đó cấu hình mặc định để nhiều 'cửa mở' — vừa ảnh hưởng trải nghiệm, vừa rủi ro bảo mật."},
      {key:"perf", nav:"Tối ưu", title:"2 · Tối ưu hiệu năng (performance)", intro:"S4C truy điểm nghẽn ở tầng hệ thống/hạ tầng và tối ưu — không đụng code ứng dụng. Hiệu năng cải thiện rõ rệt."},
      {key:"harden", nav:"Hardening", title:"3 · Hardening: siết từng lớp bảo mật", intro:"Tường lửa, WAF, kiểm soát truy cập (PAM), siết cấu hình, sao lưu — nâng điểm an toàn lên rõ rệt."},
      {key:"standard", nav:"Đạt chuẩn", title:"4 · Đáp ứng tiêu chuẩn", intro:"Đối chiếu với các mốc chuẩn hóa (CIS Benchmark, hardening guideline) — đảm bảo làm đúng chứ không làm cho có."},
      {key:"output", nav:"Bàn giao", title:"5 · Bàn giao: hệ thống tối ưu & đạt chuẩn", intro:"Kết quả: hệ thống nhanh hơn, vững hơn, có tài liệu cấu hình chuẩn để duy trì."},
    ]},
  { id:"managed", icon:"gear", step:"Dịch vụ 3 · Managed Service", label:"Vận hành & Tự động hóa",
    tag:"S4C đưa việc lặp lại vào tự động hóa (job, script, cảnh báo tự xử lý) để hệ thống tự chạy phần nhàm chán → bạn tiết kiệm nguồn lực, đội ngũ tập trung việc giá trị cao.",
    customer:{icon:"store", name:"Shop Táo Xanh (bán lẻ online)", type:"Bán lẻ đa kênh · ~30 người", context:"Không có đội kỹ thuật riêng; tuyển người giỏi thì đắt và khó giữ, mà phần lớn công việc lại là những đầu việc lặp đi lặp lại"},
    steps:[
      {key:"ctx", nav:"Bối cảnh", title:"1 · Bối cảnh: phần lớn là việc lặp lại", intro:"Hệ thống cần người lo mỗi ngày, nhưng nhìn kỹ thì phần nhiều là việc lặp đi lặp lại: cập nhật, sao lưu, dọn dẹp, canh cảnh báo. Thuê người ngồi làm tay những việc đó vừa tốn, vừa dễ sót."},
      {key:"monitor", nav:"Tự động hóa", title:"2 · Đưa việc lặp lại vào tự động hóa", intro:"Thay vì ngồi canh, S4C viết sẵn các job và script để hệ thống tự làm phần việc lặp lại và tự phản ứng với tình huống thường gặp. Dưới đây là các luồng tự động đang chạy trên hệ thống."},
      {key:"coverage", nav:"Phạm vi", title:"3 · Máy làm việc lặp, người làm việc khó", intro:"Việc lặp lại giao cho tự động hóa; phần cần đầu óc — tối ưu, phân tích, xử lý sự cố — là nơi đội ngũ S4C dồn sức. Đây là ranh giới S4C phân chia rõ."},
      {key:"resource", nav:"Nguồn lực", title:"4 · Tối ưu nguồn lực & chuẩn hóa cách làm", intro:"Nhờ tự động hóa, cùng một chi phí lo được nhiều việc hơn so với tuyển người làm tay — kèm quy trình rõ ràng và cam kết phản hồi (SLA)."},
      {key:"output", nav:"Bàn giao", title:"5 · Bàn giao: hệ thống tự chạy & minh bạch", intro:"Kết quả: phần việc lặp đã tự động hóa, nguồn lực dồn vào việc giá trị cao, và báo cáo minh bạch mỗi kỳ."},
    ]},
  { id:"dfir", icon:"shield", step:"Dịch vụ 4 · Điều tra & Ứng cứu (DFIR)", label:"Ứng cứu Ransomware",
    tag:"Sự cố nghiêm trọng (ransomware, malware, webshell) → điều tra số (DFIR), khống chế, khôi phục và báo cáo.",
    customer:{icon:"network", name:"Công ty sản xuất vốn Nhật (FDI)", type:"Nhà máy + văn phòng tại VN · ~180 máy", context:"Sáng thứ Hai: hàng loạt máy hiện thông báo đòi tiền chuộc, file bị mã hóa đuôi .locked — dây chuyền &amp; văn phòng đình trệ"},
    steps:[
      {key:"signal", nav:"Sự cố", title:"1 · Sự cố: hệ thống bị mã hóa & đòi tiền chuộc", intro:"Đây là tình huống khẩn cấp quy mô lớn: nhiều máy trạm và máy chủ file bị mã hóa, kèm ghi chú đòi tiền chuộc. Mỗi giờ trôi qua là thiệt hại."},
      {key:"scope", nav:"Khoanh vùng", title:"2 · Khoanh vùng & điều tra số (DFIR)", intro:"Việc đầu tiên không phải xóa — mà là khoanh vùng thiệt hại, giữ bằng chứng và tìm 'bệnh nhân số 0' để chặn lây lan."},
      {key:"chain", nav:"Chuỗi tấn công", title:"3 · Dựng lại chuỗi tấn công", intro:"S4C dựng lại toàn bộ đường đi của kẻ tấn công — từ email lừa đảo đến lúc mã hóa hàng loạt."},
      {key:"respond", nav:"Ứng cứu", title:"4 · Ứng cứu & khôi phục", intro:"Cô lập, chặn lây, khôi phục từ bản sao lưu sạch — và nguyên tắc quan trọng: không trả tiền chuộc."},
      {key:"output", nav:"Bàn giao", title:"5 · Bàn giao: báo cáo sự cố & bài học", intro:"Kết thúc là một báo cáo điều tra đầy đủ — nguyên nhân gốc, phạm vi, cách khôi phục và khuyến nghị để không tái diễn."},
    ]},
];
/* Dữ liệu KB2 — Hardening & Tối ưu */
const TUNE_FIXES=[["database","Tối ưu truy vấn & chỉ mục CSDL","Gỡ truy vấn nặng gây nghẽn giờ cao điểm"],["gear","Chuẩn hóa cấu hình máy chủ","Worker, cache, buffer theo đúng tải"],["pulse","Xử lý điểm nghẽn I/O","Tách log, dọn đĩa, cân tải hợp lý"],["network","Cân tải & bộ nhớ đệm","Chia tải, giảm độ trễ truy cập"]];
const COMPLIANCE=["Tắt dịch vụ &amp; cổng mạng không dùng","Chuẩn hóa mật khẩu mạnh + xác thực 2 lớp (MFA)","Mã hóa kết nối (TLS) &amp; dữ liệu nhạy cảm","Vá lỗ hổng &amp; cập nhật theo lịch","Nhật ký tập trung, có lưu vết truy cập","Sao lưu tự động &amp; kiểm chứng khôi phục"];
/* Dữ liệu KB3 — Managed: so sánh nguồn lực */
const RESOURCE=[{k:"Tự tuyển đội kỹ thuật", pct:100, note:"Lương cố định 2–3+ người, khó tuyển & khó giữ, nghỉ là hụt"},{k:"Thuê Managed từ S4C", pct:38, note:"Trả theo nhu cầu, có cả đội nhiều mảng, không gánh lương cố định"}];
const MGMT_WAY=["Quy trình chuẩn: tiếp nhận → xử lý → phê duyệt → ghi vết","Cam kết phản hồi (SLA) theo mức độ nghiêm trọng","Báo cáo định kỳ &amp; đề xuất cải thiện minh bạch"];
/* Dữ liệu KB4 — DFIR ransomware (FDI) */
const DFIR_SIGNAL=[["Máy bị mã hóa","34 / 180","máy trạm + 2 máy chủ file"],["Thời điểm","02:30 Chủ nhật","ngoài giờ, cuối tuần"],["Đòi tiền chuộc","Có","ghi chú để trên màn hình"]];
const DFIR_FINDINGS=[
  { sev:"crit", title:"Ransomware mã hóa hàng loạt", desc:"Mã độc tống tiền lan qua mạng nội bộ, mã hóa file trên nhiều máy và 2 máy chủ chia sẻ. Đuôi file đổi thành .locked." , cost:"Dây chuyền & văn phòng đình trệ" },
  { sev:"crit", title:"Xâm nhập từ email lừa đảo", desc:"Lần ngược về 'bệnh nhân số 0': một nhân viên mở tệp đính kèm độc hại cuối tuần trước — khởi nguồn của toàn bộ sự việc." , cost:"Thiếu lọc email & nhận thức" },
  { sev:"warn", title:"Mạng phẳng, không chia vùng", desc:"Máy văn phòng và máy chủ cùng một vùng mạng, không MFA cho tài khoản quản trị — nên mã độc lan ngang rất nhanh." , cost:"Lây lan diện rộng" },
];
const DFIR_CHAIN=[
  {n:"01",t:"Email lừa đảo",d:"NV mở tệp đính kèm độc"},
  {n:"02",t:"Chiếm máy đầu",d:"Mã độc chạy, tải thêm công cụ"},
  {n:"03",t:"Leo thang quyền",d:"Chiếm tài khoản quản trị miền"},
  {n:"04",t:"Lan ngang",d:"Phát tán khắp mạng nội bộ"},
  {n:"05",t:"Mã hóa & tống tiền",d:"Chạy ransomware hàng loạt"},
];
const DFIR_RESP=[
  "Cô lập ngay: ngắt mạng các vùng bị ảnh hưởng để chặn lây lan.",
  "Giữ bằng chứng & khoanh 'bệnh nhân số 0', đường lây — phục vụ điều tra.",
  "KHÔNG trả tiền chuộc — khôi phục từ bản sao lưu sạch đã kiểm chứng.",
  "Đặt lại toàn bộ mật khẩu/khóa, vá lỗ hổng bị khai thác.",
  "Giám sát tăng cường 2 tuần đề phòng tái phát.",
];
const DFIR_OUTPUT=[
  ["Nguyên nhân gốc","Email lừa đảo + thiếu MFA + mạng phẳng không chia vùng"],
  ["Phạm vi","34/180 máy bị mã hóa; chưa thấy dấu hiệu dữ liệu bị mang ra ngoài"],
  ["Khôi phục","Phục hồi từ backup sạch trong ~28 giờ — không trả tiền chuộc"],
  ["Ngăn tái diễn","Chia vùng mạng, bật MFA, triển khai EDR, sao lưu offline, diễn tập ứng cứu"],
];
/* Dữ liệu KB1 — Đánh giá theo NIST CSF */
const CSF = [
  { k:"Nhận diện", en:"Identify", now:35, tgt:85, note:"Biết mình có tài sản gì, rủi ro nằm ở đâu" },
  { k:"Bảo vệ", en:"Protect", now:45, tgt:88, note:"Tường lửa, sao lưu, kiểm soát truy cập, vá lỗi" },
  { k:"Phát hiện", en:"Detect", now:20, tgt:82, note:"Giám sát & cảnh báo khi có bất thường" },
  { k:"Ứng phó", en:"Respond", now:25, tgt:80, note:"Có quy trình xử lý khi sự cố xảy ra" },
  { k:"Phục hồi", en:"Recover", now:30, tgt:85, note:"Khôi phục nhanh, giảm thời gian gián đoạn" },
];
const CSF_GAPS = [
  { sev:"crit", title:"Không có giám sát & cảnh báo (Detect 20/100)", desc:"Hệ thống gần như 'mù' — sự cố xảy ra không ai biết. Đây là khoảng cách lớn nhất.", act:"Dựng monitoring + cảnh báo" },
  { sev:"crit", title:"Chưa có quy trình ứng phó sự cố (Respond 25/100)", desc:"Khi có chuyện, không rõ ai làm gì, gọi ai — mất thời gian vàng.", act:"Xây playbook xử lý + đầu mối" },
  { sev:"warn", title:"Sao lưu chưa kiểm chứng (Recover 30/100)", desc:"Có sao lưu nhưng chưa thử khôi phục — rủi ro khi cần không dùng được.", act:"Sao lưu tự động + diễn tập khôi phục" },
  { sev:"warn", title:"Chưa có danh mục tài sản & rủi ro (Identify 35/100)", desc:"Không biết đầy đủ mình đang có gì thì khó bảo vệ cho đúng.", act:"Lập danh mục tài sản + đánh giá rủi ro" },
];
const ROADMAP = [
  { ph:"Giai đoạn 1 · 0–1 tháng", h:"Chặn rủi ro lớn nhất", p:"Dựng giám sát & cảnh báo, bật sao lưu tự động có kiểm chứng, lập danh mục tài sản. Nâng Detect & Recover trước." },
  { ph:"Giai đoạn 2 · 1–3 tháng", h:"Hoàn thiện bảo vệ & quy trình", p:"Hardening (tường lửa/WAF/PAM), siết cấu hình, xây quy trình ứng phó sự cố và đầu mối rõ ràng." },
  { ph:"Giai đoạn 3 · duy trì", h:"Vận hành & cải thiện liên tục", p:"Tự động hóa việc lặp, theo dõi và đánh giá lại định kỳ theo khung, báo cáo mức trưởng thành cho đối tác/lãnh đạo." },
];
/* Dữ liệu KB3 — Điều tra tấn công */
const PROCS = [
  { name:"nginx", cpu:12, flag:false }, { name:"php-fpm", cpu:18, flag:false },
  { name:"mysqld", cpu:22, flag:false }, { name:"kdevtmpfsi", cpu:98, flag:true },
  { name:"sshd", cpu:2, flag:false },
];
const CLUES = [
  { icon:"pulse", t:"Tiến trình lạ chiếm 98% CPU", d:"Tiến trình 'kdevtmpfsi' không thuộc hệ thống — đây là phần mềm đào tiền ảo (cryptominer) đang dùng máy chủ của bạn để đào coin cho kẻ khác. Đó là lý do CPU luôn 99% và hóa đơn cloud tăng vọt." },
  { icon:"wall", t:"File lạ trong thư mục upload", d:"Phát hiện file /var/www/uploads/img_9f3.php — một 'webshell': cửa hậu cho phép kẻ tấn công chạy lệnh trên máy chủ qua trình duyệt. Nó được tải lên qua một lỗ hổng ở chức năng upload." },
  { icon:"gear", t:"Tác vụ định kỳ (cron) lạ", d:"Có một cron job tự tải lại mã độc mỗi 10 phút — gọi là backdoor để duy trì quyền kiểm soát, kể cả khi bạn xóa tiến trình thì nó tự quay lại." },
  { icon:"network", t:"Kết nối ra 'mỏ đào' coin", d:"Máy chủ đang kết nối ra một pool đào tiền ảo qua cổng 3333 — bằng chứng rõ ràng tài nguyên của bạn đang bị lợi dụng để kiếm tiền." },
];
const KCHAIN = [
  { n:"01", t:"Khai thác lỗ hổng", d:"Chức năng upload thiếu kiểm tra" },
  { n:"02", t:"Cài webshell", d:"Tải cửa hậu .php lên máy chủ" },
  { n:"03", t:"Cắm backdoor", d:"Cron tự tải lại mã độc" },
  { n:"04", t:"Thả miner", d:"Cài phần mềm đào tiền ảo" },
  { n:"05", t:"Chiếm tài nguyên", d:"CPU 99%, hóa đơn tăng" },
];
const SEC_RESP = [
  "Cô lập máy chủ khỏi 'mỏ đào' — chặn kết nối ra cổng 3333 (sau khi báo bạn).",
  "Dừng & xóa tiến trình miner và webshell; gỡ cron job backdoor cắm sẵn.",
  "Đổi toàn bộ mật khẩu/khóa truy cập có thể đã lộ; rà soát tài khoản lạ.",
  "Kiểm tra log xác nhận phạm vi — dữ liệu khách có bị lấy đi không.",
];
const SEC_PREVENT = [
  "Vá lỗ hổng upload (nguyên nhân gốc) & siết cấu hình máy chủ.",
  "Dựng WAF (lá chắn web) chặn các kiểu tấn công tương tự.",
  "Bật giám sát + cảnh báo khi CPU/kết nối bất thường — để lần sau biết ngay trong vài phút.",
  "Sao lưu sạch & kiểm chứng để khôi phục nhanh nếu cần.",
];
/* Dữ liệu KB2 — Managed */
const MANAGED = [
  { icon:"gear", t:"Tự động hóa việc lặp (TỰ ĐỘNG)", d:"Job & script lo cập nhật, dọn dẹp, kiểm tra sức khỏe — không cần ngồi làm tay." },
  { icon:"database", t:"Sao lưu & kiểm chứng (TỰ ĐỘNG)", d:"Sao lưu theo lịch, tự thử khôi phục để chắc chắn dùng được khi cần." },
  { icon:"eye", t:"Theo dõi & cảnh báo tự xử lý (TỰ ĐỘNG)", d:"Phát hiện bất thường, tự phản ứng tình huống thường gặp, chỉ báo khi cần người." },
  { icon:"pulse", t:"Tối ưu hiệu năng (CÓ NGƯỜI)", d:"Kỹ sư rà điểm nghẽn, tinh chỉnh cho nhanh & tiết kiệm tài nguyên." },
  { icon:"shield", t:"Ứng cứu sự cố (CÓ NGƯỜI)", d:"Có kỹ sư xử lý ngay theo cam kết phản hồi — thay vì bạn tự xoay." },
  { icon:"chart", t:"Báo cáo & đề xuất (CÓ NGƯỜI)", d:"Tổng hợp việc đã tự động hóa, tình hình & hướng cải thiện mỗi kỳ." },
];
const OPS_REPORT = {
  what:"Dựng tự động hóa (sao lưu, dọn dẹp, cảnh báo tự xử lý); tinh chỉnh (tuning) hệ thống; cải thiện định kỳ.",
  perf:"Tốc độ phản hồi nhanh hơn ~2,6 lần (từ ~430ms xuống ~165ms).",
  uptime:"Uptime tháng: 99,95% · không có gián đoạn kéo dài.",
  followup:"Theo dõi dung lượng đĩa, tối ưu truy vấn chậm, rà soát bảo mật định kỳ.",
  cost:"Trong gói Managed theo tháng — không phát sinh ngoài.",
};
const LISTEN_POINTS = [
  { icon:"chat", t:"Lắng nghe không thuật ngữ", d:"\"App nhà tôi mấy lần tự nhiên đơ\", \"sợ mất dữ liệu khách\" — S4C ghi nhận đúng điều bạn cần." },
  { icon:"grid", t:"Ghi lại bạn đang có gì", d:"App, API, máy chủ, ai đang quản, đã có sao lưu/giám sát chưa — S4C hỏi và ghi giúp, bạn không cần rành kỹ thuật." },
  { icon:"compass", t:"Chốt mục tiêu thực tế", d:"Ưu tiên điều quan trọng nhất với việc kinh doanh, không làm dàn trải." },
];
const POSTURE = [
  { id:"mon", name:"Giám sát & cảnh báo",  tag:"MON",   before:10, after:86, note:"Dựng theo dõi hệ thống + cảnh báo sớm (mã nguồn mở)" },
  { id:"perf",name:"Hiệu năng & cấu hình", tag:"PERF",  before:45, after:85, note:"Tối ưu cấu hình, xử lý điểm nghẽn, chuẩn hóa" },
  { id:"bak", name:"Sao lưu & khôi phục",  tag:"BAK",   before:15, after:90, note:"Sao lưu tự động, kiểm thử khôi phục định kỳ" },
  { id:"web", name:"Bảo vệ hệ thống & mạng",tag:"FW/WAF",before:20, after:87, note:"Tường lửa + lá chắn web chặn tấn công phổ biến" },
  { id:"acc", name:"Kiểm soát truy cập",   tag:"PAM",   before:25, after:82, note:"Giới hạn quyền admin, xác thực 2 lớp, ghi vết" },
];
function postureScore(k){ return Math.round(POSTURE.reduce((s,p)=>s+p[k],0)/POSTURE.length); }
const ASSESS_FINDINGS = [
  { sev:"crit", color:"var(--crit)", title:"Hệ thống đang chạy \"trong bóng tối\"", desc:"Không có monitoring (theo dõi), nên server đầy ổ đĩa, hết RAM hay một dịch vụ chết mà không ai biết — tới khi khách báo mới hay.", cost:"Điểm mù: chỉ biết khi đã sập" },
  { sev:"crit", color:"var(--crit)", title:"Tưởng đã có backup, thật ra chưa chắc dùng được", desc:"Nhiều nơi có sao lưu nhưng chưa bao giờ thử khôi phục. Đến lúc cần mới phát hiện bản backup hỏng hoặc thiếu.", cost:"Điểm mù: mất dữ liệu đúng lúc cần nhất" },
  { sev:"warn", color:"var(--warn)", title:"Server để nguyên cấu hình mặc định", desc:"Máy chủ chạy thiết lập mặc định, còn cổng mở thừa và dịch vụ không dùng — vừa ì ạch, vừa hở cửa cho kẻ xấu.", cost:"Điểm mù: vừa chậm vừa rủi ro" },
  { sev:"warn", color:"var(--warn)", title:"App/web chưa có WAF che chắn", desc:"Ứng dụng công khai nhưng không có WAF (lá chắn ứng dụng web) chặn tấn công tự động. Bị dò quét là có thể bị khai thác.", cost:"Điểm mù: bị tấn công mà không hay" },
];
const PROPOSE_OPTIONS = [
  { id:"quickwin", name:"Gói \"Xử lý vấn đề cấp thiết\"", desc:"Làm ngay việc rủi ro cao nhất: bật sao lưu tự động + giám sát cơ bản + lá chắn web. Nhanh, gọn, chặn nguy cơ lớn.", fit:"Hợp nếu ngân sách hạn chế, cần an tâm ngay", price:"Tham khảo: từ ~5 triệu, theo việc" },
  { id:"foundation", name:"Gói \"Nền tảng vững chắc\"", desc:"Triển khai & tối ưu đủ 5 khía cạnh: giám sát, hiệu năng/cấu hình, sao lưu, bảo vệ hệ thống, kiểm soát truy cập — bằng công cụ mã nguồn mở.", fit:"Hợp nếu muốn chắc chắn, làm một lần cho gọn", price:"Tham khảo: từ ~10 triệu, gói 1 lần" },
  { id:"companion", name:"Gói \"Đồng hành lâu dài\"", desc:"Nền tảng vững chắc + tự động hóa việc lặp, tối ưu hiệu năng định kỳ và ứng cứu sự cố khi cần. Bạn có một chỗ dựa kỹ thuật ổn định.", fit:"Hợp nếu muốn yên tâm dài hạn, không phải tự lo", price:"Tham khảo: từ ~5 triệu/tháng" },
];
const PERF = {
  points: [ {t:"08:00",v:290},{t:"09:00",v:340},{t:"10:00",v:410},{t:"11:00",v:395},{t:"12:00",v:430},{t:"13:00",v:180},{t:"14:00",v:165},{t:"15:00",v:158},{t:"16:00",v:170},{t:"17:00",v:162} ],
  tuneIdx: 5, threshold: 300,
  cpu:[42,48,61,58,66,39,35,33,37,34], ram:[55,58,63,61,67,52,49,48,50,49],
};
const INVESTIGATE = {
  timeline:[
    { t:"02:14", src:"WAF", text:"Lá chắn web chặn một chuỗi tấn công vào trang đăng nhập của app", level:"warn" },
    { t:"02:15", src:"WAF", text:"Cùng một địa chỉ IP lạ tiếp tục thử nhiều kiểu tấn công khác", level:"warn" },
    { t:"02:16", src:"PAM", text:"Cảnh báo: có người thử đăng nhập tài khoản admin ngoài giờ, từ IP lạ", level:"crit" },
    { t:"02:17", src:"PAM", text:"Xác thực 2 lớp chặn lại — đăng nhập KHÔNG thành công", level:"ok" },
    { t:"02:20", src:"S4C", text:"S4C nhận cảnh báo, chặn IP tấn công và rà soát toàn hệ thống", level:"ok" },
  ],
  verdict:"Kẻ tấn công dò tự động vào app, bị lá chắn web (WAF) chặn, rồi thử chiếm tài khoản admin nhưng bị xác thực 2 lớp (PAM) chặn lại. Không có xâm nhập thành công. Nhờ có các lớp bảo vệ và theo dõi, sự việc được phát hiện và chặn ngay trong đêm.",
  action:"S4C chặn IP tấn công, kiểm tra log toàn hệ thống xác nhận không có truy cập trái phép thành công, và đề xuất siết thêm luật WAF. Mọi thao tác đều ghi lại.",
};
const REPORT = {
  what:"Thiết lập monitoring & backup; tinh chỉnh (tuning) hệ thống; dựng bảo vệ nhiều lớp; xử lý 1 nỗ lực tấn công trong đêm.",
  score:"Điểm sức khỏe & an toàn hệ thống tăng từ 23/100 lên 86/100.",
  perf:"Tốc độ phản hồi hệ thống nhanh hơn ~2,6 lần (từ ~430ms xuống ~165ms).",
  incident:"1 nỗ lực tấn công bị chặn, không thiệt hại.",
  followup:"Theo dõi IP tấn công, duy trì sao lưu, rà soát định kỳ hằng tháng.",
  cost:"Thuộc gói đồng hành theo tháng — không phát sinh chi phí ngoài cho các việc trên.",
};

const SERVICES = [
  { id:"consult", step:"Bước 1", icon:"search", name:"Tư vấn & Đánh giá tổng thể",
    tags:["Rà soát hệ thống","Đánh giá","Chỉ ra điểm yếu"],
    one:"Rà soát toàn bộ hệ thống, đánh giá sức khỏe & an toàn, chỉ ra điểm còn thiếu — bằng ngôn ngữ bạn hiểu.",
    problem:"Bạn không chắc hệ thống đang ổn tới đâu, nên không biết cần làm gì trước và tránh tiêu tiền sai chỗ.",
    get:["Báo cáo đánh giá & điểm hệ thống hiện tại","Danh sách điểm yếu kèm mức rủi ro","Thứ tự ưu tiên nên xử lý"],
    boundary:["Chưa bao gồm việc khắc phục (ở bước sau)","Kết quả phụ thuộc mức truy cập bạn cho phép"],
    price:"Tham khảo: buổi trao đổi đầu miễn phí; đánh giá chi tiết từ ~5 triệu", model:"Tư vấn" },
  { id:"design", step:"Bước 2", icon:"compass", name:"Đề xuất & Thiết kế giải pháp",
    tags:["Tư vấn giải pháp","Thiết kế","Ưu tiên open-source"],
    one:"Tư vấn, đề xuất và thiết kế giải pháp đúng bài toán, vừa túi tiền — ưu tiên mã nguồn mở để tiết kiệm.",
    problem:"Nhiều giải pháp ngoài kia đắt hoặc quá tầm; bạn cần cái vừa sức và đúng nhu cầu.",
    get:["Phương án xử lý cho từng điểm yếu","So sánh lựa chọn & chi phí tham khảo","Lộ trình triển khai theo ngân sách"],
    boundary:["Không ép mua giải pháp đắt tiền","Quyết định cuối cùng là của bạn"],
    price:"Tham khảo: thường gộp trong gói tư vấn/triển khai", model:"Tư vấn · Nghiên cứu" },
  { id:"operate", step:"Bước 3", icon:"gear", name:"Vận hành & Tự động hóa",
    tags:["Tự động hóa (job/script)","Theo dõi hiệu năng","Cảnh báo tự xử lý","Tuning"],
    one:"Đưa việc lặp lại vào tự động hóa và theo dõi hệ thống — thay cho việc phải ngồi làm tay mỗi ngày.",
    problem:"Không có nhân sự kỹ thuật, mà phần lớn công việc lại lặp đi lặp lại và dễ bị bỏ sót.",
    get:["Job & script tự động cho cập nhật, dọn dẹp, sao lưu","Theo dõi hiệu năng, uptime & tối ưu (tuning)","Cảnh báo tự xử lý tình huống thường gặp + báo cáo định kỳ"],
    boundary:["Tập trung tầng hệ thống & hạ tầng; code ứng dụng do đội phát triển của bạn","Thao tác rủi ro cao cần bạn phê duyệt"],
    price:"Tham khảo: từ ~5 triệu/tháng, tùy quy mô", model:"Managed · Outsource" },
  { id:"harden", step:"Bước 4", icon:"shield", name:"Hardening & Tăng cường bảo mật",
    tags:["Firewall","WAF","PAM","Siết cấu hình","Sao lưu · MFA"],
    one:"Dựng các lớp bảo vệ: Firewall (tường lửa), WAF (lá chắn ứng dụng web), PAM (kiểm soát truy cập đặc quyền), siết cấu hình, backup & xác thực nhiều lớp.",
    problem:"Hệ thống đang chạy nhưng nhiều cửa còn mở, dễ bị tấn công và lạm dụng.",
    get:["WAF chặn tấn công web; firewall siết chặt","PAM + xác thực 2 lớp cho tài khoản quan trọng","Cấu hình được vá & siết; sao lưu tự động"],
    boundary:["Không đảm bảo an toàn tuyệt đối (không ai làm được)","Giảm rủi ro xuống mức hợp lý theo phạm vi"],
    price:"Tham khảo: trong gói triển khai từ ~10 triệu", model:"Dự án · Custom" },
  { id:"incident", step:"Bước 5", icon:"pulse", name:"Điều tra & Ứng cứu sự cố",
    tags:["Phát hiện bất thường","Điều tra","Ngăn chặn","Khôi phục"],
    one:"Khi hệ thống có dấu hiệu bất thường hay bị tấn công — có người điều tra và xử lý thay vì bạn cuống.",
    problem:"Sự cố xảy ra ngoài giờ, không biết gọi ai, càng chậm càng thiệt hại.",
    get:["Khoanh vùng & ngăn chặn sớm","Điều tra nguyên nhân, đánh giá thiệt hại","Khuyến nghị khắc phục & biên bản xử lý"],
    boundary:["Hiệu quả tùy dữ liệu/log còn lại để điều tra","Phục hồi hệ thống phối hợp cùng bạn"],
    price:"Tham khảo: gói giờ ứng cứu, hoặc gồm trong gói đồng hành", model:"Managed · Theo việc" },
  { id:"debug", step:"Khi cần", icon:"sliders", name:"Debug & Troubleshooting hệ thống",
    tags:["Truy lỗi","Phân tích log","Xử lý nghẽn","Khắc phục"],
    one:"Hệ thống chậm, treo hay lỗi khó hiểu — S4C truy đúng nguyên nhân gốc rồi xử lý, không chữa qua loa.",
    problem:"Có trục trặc lặp đi lặp lại mà không rõ vì sao; khởi động lại thì tạm ổn rồi lại tái diễn.",
    get:["Truy nguyên nhân gốc qua log & số liệu","Khắc phục dứt điểm, không chỉ chữa triệu chứng","Ghi lại cách xử lý để lần sau tự chủ động"],
    boundary:["Tập trung tầng hệ thống/hạ tầng; lỗi logic ứng dụng phối hợp cùng đội dev","Cần đủ log & quyền truy cập để truy vết"],
    price:"Tham khảo: theo giờ, hoặc gồm trong gói vận hành", model:"Theo việc · Managed" },
  { id:"report", step:"Bước 6", icon:"chart", name:"Báo cáo & Minh bạch vận hành",
    tags:["Báo cáo định kỳ","Điểm hệ thống","Đề xuất cải thiện"],
    one:"Bạn luôn thấy rõ: đã làm gì, điểm hệ thống & hiệu năng ra sao, chi phí thế nào — không mập mờ.",
    problem:"Thuê ngoài mà không rõ họ làm gì, tiền đi đâu, hệ thống có tốt hơn không.",
    get:["Báo cáo định kỳ dễ hiểu","Điểm hệ thống & hiệu năng theo thời gian","Đề xuất cải thiện cho kỳ tới"],
    boundary:["Báo cáo phản ánh dữ liệu trong phạm vi theo dõi","Không thay báo cáo kiểm toán chính thức"],
    price:"Tham khảo: đi kèm các gói vận hành/đồng hành", model:"Đi kèm dịch vụ" },
  { id:"training", step:"Bổ trợ", icon:"users", name:"Đào tạo nhận thức an toàn thông tin",
    tags:["Nhận thức ATTT","Chống lừa đảo","Thực hành an toàn"],
    one:"Phần lớn sự cố bắt đầu từ con người — một cú click nhầm. S4C đào tạo đội ngũ bạn nhận biết và tránh bẫy.",
    problem:"Nhân viên chưa quen nhận diện email lừa đảo, mật khẩu yếu, thói quen dùng máy thiếu an toàn.",
    get:["Buổi đào tạo ngắn, ví dụ thực tế dễ nhớ","Hướng dẫn thói quen an toàn hằng ngày","Bài kiểm tra nhận thức (tùy chọn giả lập phishing)"],
    boundary:["Tập trung nâng nhận thức, không thay giải pháp kỹ thuật","Hiệu quả cần duy trì & nhắc lại định kỳ"],
    price:"Tham khảo: theo buổi / quy mô đội", model:"Đào tạo · Theo việc" },
];
const MODELS = [
  { icon:"compass", name:"Tư vấn giải pháp", desc:"S4C nghiên cứu bài toán của bạn và đề xuất cách giải phù hợp. Bạn có thể tự làm theo hoặc nhờ S4C làm tiếp.", forWho:"Khi bạn cần <b>định hướng</b> trước khi quyết định đầu tư.", price:"Tham khảo: buổi đầu miễn phí" },
  { icon:"gear", name:"Vận hành & Tự động hóa", desc:"S4C dựng tự động hóa cho việc lặp lại, theo dõi, tối ưu và xử lý sự cố — bạn không phải tự xoay.", forWho:"Khi bạn <b>không có người kỹ thuật</b> và muốn yên tâm dài hạn.", price:"Tham khảo: từ ~5 triệu/tháng" },
  { icon:"users", name:"Outsource — thuê riêng", desc:"Thuê năng lực kỹ thuật của S4C theo nhu cầu và thời gian cụ thể, linh hoạt như một thành viên bên ngoài.", forWho:"Khi bạn cần <b>người làm theo đợt</b>, không muốn tuyển cố định.", price:"Tham khảo: theo giờ / theo việc" },
  { icon:"sliders", name:"Custom — may đo", desc:"Bài toán đặc thù cần giải pháp riêng. S4C thiết kế và triển khai đúng tình huống của bạn.", forWho:"Khi nhu cầu của bạn <b>không vừa gói nào</b> có sẵn.", price:"Tham khảo: báo giá theo thiết kế" },
];
const NODES = {
  servers: { title:"Máy chủ & Ứng dụng", purpose:"Nơi app, API và cơ sở dữ liệu của bạn chạy — nguồn tín hiệu về hiệu năng và sức khỏe hệ thống.",
    input:["Chỉ số máy chủ (CPU, RAM, đĩa)","Hoạt động ứng dụng & CSDL"], output:["Tín hiệu hiệu năng","Dữ liệu để tối ưu (tuning)"], limit:"S4C chỉ tác động khi được bạn đồng ý.", oss:"", svc:["Vận hành & Tự động hóa"] },
  network: { title:"Mạng & Biên", purpose:"Hạ tầng mạng, phân vùng (segmentation), VPN, cân tải — đường đi của dữ liệu và là nơi quan sát lưu lượng.",
    input:["Luồng mạng, nhật ký thiết bị mạng"], output:["Dấu hiệu bất thường về kết nối","Dữ liệu định tuyến & tải"], limit:"Hiệu quả tùy mức truy cập thiết bị mạng bạn cho phép.", oss:"Công cụ mã nguồn mở", svc:["Hardening & Tăng cường bảo mật"] },
  edge: { title:"Tường lửa & Lá chắn web (WAF)", purpose:"Lớp bảo vệ ngoài cùng: chặn truy cập xấu và các kiểu tấn công phổ biến vào website/app.",
    input:["Lưu lượng vào web/API","Luật chặn & nhận diện tấn công"], output:["Tấn công bị chặn","Cảnh báo khi bị dò quét"], limit:"Giảm mạnh rủi ro nhưng không thay được việc vá lỗi ứng dụng.", oss:"Công cụ mã nguồn mở", svc:["Hardening & Tăng cường bảo mật"] },
  pam: { title:"Kiểm soát truy cập (PAM)", purpose:"Quản chặt các tài khoản quyền cao: ai được vào đâu, khi nào, có xác thực 2 lớp và ghi vết đầy đủ.",
    input:["Yêu cầu đăng nhập đặc quyền","Chính sách phân quyền"], output:["Chặn truy cập trái phép","Nhật ký ai làm gì"], limit:"Cần phối hợp để định nghĩa đúng ai cần quyền gì.", oss:"Công cụ mã nguồn mở", svc:["Hardening & Tăng cường bảo mật"] },
  collect: { title:"Thu thập & Chuẩn hóa", purpose:"Gom nhật ký (log) và chỉ số từ mọi nguồn về một chỗ, chuẩn hóa về cùng một định dạng để xử lý được.",
    input:["Log từ máy chủ, app, mạng, WAF, PAM","Chỉ số hiệu năng"], output:["Dữ liệu sạch, thống nhất","Nền tảng cho các bước sau"], limit:"Phạm vi tùy nguồn dữ liệu bạn cho phép kết nối.", oss:"Công cụ mã nguồn mở", svc:["Vận hành & Tự động hóa"] },
  enrich: { title:"Làm giàu dữ liệu (enrich)", purpose:"Bổ sung ngữ cảnh cho từng tín hiệu: đối chiếu nguồn tình báo mối đe dọa (threat intel), gắn mức rủi ro, chấm điểm — để biết cái nào đáng lo.",
    input:["Dữ liệu đã chuẩn hóa","Nguồn tình báo mối đe dọa (IOC)"], output:["Tín hiệu có ngữ cảnh & điểm rủi ro","Lọc bớt nhiễu, nổi cái quan trọng"], limit:"Chất lượng tùy nguồn tình báo được cập nhật.", oss:"Công cụ mã nguồn mở", svc:["Điều tra & Ứng cứu sự cố"] },
  detect: { title:"Giám sát & Phát hiện", purpose:"Theo dõi liên tục và cảnh báo sớm khi có điều đáng ngờ — tấn công, đăng nhập lạ, hiệu năng tụt, dấu hiệu sự cố.",
    input:["Tín hiệu đã làm giàu"], output:["Cảnh báo có mức ưu tiên","Phát hiện sớm trước khi thành sự cố"], limit:"Đưa ra nghi vấn cần xác minh, không tự kết luận chắc chắn.", oss:"Công cụ mã nguồn mở", svc:["Vận hành & Tự động hóa","Điều tra & Ứng cứu sự cố"] },
  investigate: { title:"Điều tra & Phân tích (DFIR)", purpose:"Khi có nghi vấn: dựng lại chuỗi sự việc, xác minh thật/giả, tìm 'bệnh nhân số 0' và nguyên nhân gốc.",
    input:["Cảnh báo cần xác minh","Log & bằng chứng liên quan"], output:["Kết luận điều tra có bằng chứng","Phạm vi ảnh hưởng & nguyên nhân gốc"], limit:"Hiệu quả tùy lượng log/bằng chứng còn giữ được.", oss:"Công cụ mã nguồn mở", svc:["Điều tra & Ứng cứu sự cố"] },
  respond: { title:"Ứng cứu & Xử lý", purpose:"Biến kết luận thành hành động: cô lập, chặn lây, khắc phục, khôi phục — việc rủi ro luôn hỏi bạn trước.",
    input:["Kết luận điều tra / cảnh báo"], output:["Sự cố được khống chế & khắc phục","Mọi bước đều được ghi lại"], limit:"Việc rủi ro cao luôn cần bạn đồng ý, không tự ý tác động.", oss:"", svc:["Điều tra & Ứng cứu sự cố","Vận hành & Tự động hóa"] },
  report: { title:"Báo cáo & Cải thiện", purpose:"Tổng hợp mọi việc thành báo cáo dễ đọc, kèm đề xuất để lần sau tốt hơn — minh bạch mỗi kỳ.",
    input:["Việc đã xử lý, chỉ số hệ thống"], output:["Báo cáo định kỳ dễ hiểu","Đề xuất cải thiện cho kỳ tới"], limit:"Phản ánh dữ liệu trong phạm vi được theo dõi.", oss:"", svc:["Báo cáo & Minh bạch vận hành"] },
  automate: { title:"Tự động hóa (job & script)", purpose:"Lớp chạy xuyên suốt mọi bước: S4C viết job/script để máy tự làm phần lặp lại — thu thập, làm giàu, cảnh báo tự xử lý, sao lưu, đồng bộ danh sách chặn.",
    input:["Các việc lặp lại ở mọi bước"], output:["Hệ thống tự chạy phần nhàm chán","Giải phóng người cho việc giá trị cao"], limit:"Việc cần phán đoán/rủi ro vẫn do con người quyết.", oss:"Công cụ mã nguồn mở", svc:["Vận hành & Tự động hóa"] },
};
const NEEDS = [
  {id:"ops", icon:"eye", t:"Cần người quản trị, vận hành hệ thống", d:"Vận hành, cập nhật, sao lưu, lo phần kỹ thuật hộ."},
  {id:"perf", icon:"pulse", t:"Hệ thống chậm, hay trục trặc", d:"Muốn theo dõi và tối ưu hiệu năng (performance)."},
  {id:"web", icon:"shield", t:"Sợ web/app bị tấn công", d:"Muốn có lá chắn web (WAF) và giám sát."},
  {id:"data", icon:"database", t:"Sợ mất dữ liệu / bị tống tiền", d:"Muốn sao lưu và khôi phục an toàn."},
  {id:"access", icon:"lock", t:"Sợ bị chiếm quyền quản trị", d:"Muốn kiểm soát truy cập & xác thực 2 lớp."},
  {id:"assess", icon:"search", t:"Chưa rõ mình thiếu/yếu ở đâu", d:"Muốn được đánh giá hệ thống trước."},
];
/* Vấn đề của KH → giải pháp S4C (một số liên kết thẳng tới demo live) */
const PROBLEM_MAP = [
  { ic:"search",  prob:"Chưa rõ hệ thống mình yếu ở đâu",            sol:"Tư vấn &amp; Đánh giá tổng thể (hệ thống + ATTT)", scn:"assess" },
  { ic:"pulse",   prob:"Hệ thống chậm, quá tải giờ cao điểm",         sol:"Tuning &amp; Tối ưu hiệu năng",                    scn:"tune" },
  { ic:"shield",  prob:"Nhiều 'cửa' còn mở, sợ bị tấn công",          sol:"Hardening, đạt chuẩn &amp; bảo đảm ATTT",          scn:"tune" },
  { ic:"gear",    prob:"Không có người lo hệ thống mỗi ngày",         sol:"Vận hành &amp; Tự động hóa (Managed)",             scn:"managed" },
  { ic:"sliders", prob:"Trục trặc lặp lại hoài không rõ vì sao",      sol:"Debug &amp; Troubleshooting hệ thống",             svc:"debug" },
  { ic:"wall",    prob:"Nghi bị tấn công, mã hóa, cài webshell",      sol:"Điều tra &amp; Ứng cứu sự cố (DFIR)",              scn:"dfir" },
  { ic:"users",   prob:"Nhân viên hay click nhầm, dính lừa đảo",      sol:"Đào tạo nhận thức an toàn thông tin",              svc:"training" },
];

/* =========================================================
   State & nav behaviour
   ========================================================= */
const STATE = { scenId:"assess", stageIdx:0, maxStage:0, opTab:"perf", clues:new Set() };
function resetScenario(){ STATE.stageIdx=0; STATE.maxStage=0; STATE.opTab="perf"; renderScenario(); }
function resetDemo(){ STATE.scenId="assess"; resetScenario(); go("scenario"); }
/* ===== Analytics: đếm lượt xem theo từng màn =====
   Mặc định TẮT. Điền 1 mã bên dưới (chỉ cần 1 nhà cung cấp) rồi deploy là bật.
   - GA4:       dán Measurement ID dạng "G-XXXXXXX" vào ga4
   - Plausible: điền tên miền đã đăng ký vào plausibleDomain, vd "s4c.vn"
   - Umami:     điền src script + website id (self-host hoặc cloud) */
const ANALYTICS = {
  ga4: "G-7DY198HSSM",
  plausibleDomain: "",
  umami: { src: "", id: "" }
};
const VIEW_TITLES = {
  overview:"Tổng quan", scenario:"Kịch bản thực tế", about:"Về S4C",
  services:"Nhóm dịch vụ", pricing:"Bảng giá tham khảo", models:"Cách hợp tác",
  architecture:"Giải pháp & công nghệ", faq:"Câu hỏi thường gặp", engagement:"Liên hệ & khảo sát",
  privacy:"Chính sách quyền riêng tư"
};
const CONSENT_KEY="s4c-consent";
function getConsent(){ try{ return localStorage.getItem(CONSENT_KEY); }catch(e){ return null; } }
function setConsent(v){ try{ localStorage.setItem(CONSENT_KEY,v); }catch(e){} }
function analyticsEnabled(){ return !!(ANALYTICS.ga4||ANALYTICS.plausibleDomain||(ANALYTICS.umami&&ANALYTICS.umami.src&&ANALYTICS.umami.id)); }
let analyticsLoaded=false;
function loadAnalytics(){
  if(analyticsLoaded||getConsent()!=="yes") return;
  analyticsLoaded=true;
  try{
    if(ANALYTICS.ga4){
      const s=document.createElement("script"); s.async=true;
      s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(ANALYTICS.ga4);
      document.head.appendChild(s);
      window.dataLayer=window.dataLayer||[]; window.gtag=function(){dataLayer.push(arguments);};
      gtag("js", new Date()); gtag("config", ANALYTICS.ga4, { send_page_view:false });
    }
    if(ANALYTICS.plausibleDomain){
      window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments);};
      const s=document.createElement("script"); s.defer=true;
      s.setAttribute("data-domain", ANALYTICS.plausibleDomain);
      s.src="https://plausible.io/js/script.manual.js";
      document.head.appendChild(s);
    }
    if(ANALYTICS.umami && ANALYTICS.umami.src && ANALYTICS.umami.id){
      const s=document.createElement("script"); s.async=true; s.defer=true;
      s.src=ANALYTICS.umami.src; s.setAttribute("data-website-id", ANALYTICS.umami.id);
      s.setAttribute("data-auto-track","false");
      document.head.appendChild(s);
    }
  }catch(e){}
}
function trackView(view){
  if(!analyticsLoaded) return;
  try{
    const title=(VIEW_TITLES[view]||view);
    const path="/"+view;
    const loc=location.origin+location.pathname+"#"+view;
    if(window.gtag && ANALYTICS.ga4){ gtag("event","page_view",{page_title:title,page_path:path,page_location:loc}); }
    if(window.plausible && ANALYTICS.plausibleDomain){ window.plausible("pageview",{u:loc}); }
    if(window.umami && typeof window.umami.track==="function"){ window.umami.track(p=>({...p,url:path,title:title})); }
  }catch(e){}
}
function viewFromHash(){ const v=decodeURIComponent(location.hash.slice(1)); return VIEW_TITLES[v]?v:"overview"; }
let currentView=null;
function go(view, opts){
  if(!VIEW_TITLES[view]) view="overview";
  if(!(opts&&opts.fromHistory) && viewFromHash()!==view){
    try{ history.pushState(null,"",view==="overview"?location.pathname+location.search:"#"+view); }catch(e){ location.hash=view; }
  }
  currentView=view;
  document.title=(view==="overview"?"S4C — Dịch vụ IT & an toàn thông tin cho doanh nghiệp nhỏ":VIEW_TITLES[view]+" — S4C");
  liveStop();
  $$(".view").forEach(v=>v.classList.toggle("active", v.id==="view-"+view));
  $$(".nav-item").forEach(n=>n.classList.toggle("active", n.dataset.view===view));
  setNavOpen(false); window.scrollTo({top:0,behavior:"instant"});
  trackView(view);
  revealIn(view);
}
$$(".nav-item").forEach(n=>n.addEventListener("click",()=>go(n.dataset.view)));
document.addEventListener("click",e=>{const t=e.target.closest("[data-nav]");if(t){e.preventDefault();go(t.dataset.nav);}});
window.addEventListener("popstate",()=>{ const v=viewFromHash(); if(v!==currentView) go(v,{fromHistory:true}); });
function setupReveal(){
  document.querySelectorAll(".content .view").forEach(v=>{
    [...v.children].forEach(ch=>{ if(ch.nodeType===1) ch.classList.add("reveal"); });
  });
}
function revealIn(view){
  const root=document.getElementById("view-"+view); if(!root) return;
  const els=root.querySelectorAll(":scope > .reveal");
  els.forEach(e=>e.classList.remove("in"));
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    els.forEach((e,i)=>setTimeout(()=>e.classList.add("in"), Math.min(i,8)*55));
  }));
}
setupReveal();
function setNavOpen(open){ $("#nav").classList.toggle("open",open); $("#hamb").setAttribute("aria-expanded",String(open)); $("#hamb").setAttribute("aria-label",open?"Đóng menu":"Mở menu"); }
$("#hamb").addEventListener("click",()=>setNavOpen(!$("#nav").classList.contains("open")));
function currentDark(){const a=document.documentElement.getAttribute("data-theme");if(a)return a==="dark";return window.matchMedia("(prefers-color-scheme: dark)").matches;}
$("#themeBtn").addEventListener("click",()=>{ const t=currentDark()?"light":"dark"; document.documentElement.setAttribute("data-theme",t); try{ localStorage.setItem("s4c-theme",t); }catch(e){} });

/* ---- Cookie consent ---- */
function showConsent(show){ $("#consent").classList.toggle("show",show); }
$("#consentYes").addEventListener("click",()=>{ setConsent("yes"); showConsent(false); loadAnalytics(); trackView(currentView||"overview"); });
$("#consentNo").addEventListener("click",()=>{ setConsent("no"); showConsent(false); });
$("#consentReopen").addEventListener("click",()=>showConsent(true));
$("#resetBtn").addEventListener("click",resetDemo);

/* ---- Contact ---- */
function fillContact(){
  const map={cName:CONTACT.name, cHotline:CONTACT.hotline, cEmail:CONTACT.email, cPhone:CONTACT.phone};
  Object.entries(map).forEach(([id,val])=>{
    const node=$("#"+id); if(!node) return;
    if(isPlaceholder(val)){ node.textContent="sẽ cập nhật"; node.classList.add("ph"); }
    else { node.textContent=val; node.classList.remove("ph"); }
  });
}

/* ---- About chips ---- */
const EXPERIENCE = [
  "Vận hành hệ thống tải cao","Tối ưu & tuning performance","Xử lý nghẽn truy vấn DB đồng thời",
  "Debug & giám sát hệ thống","Hardening OS","Firewall","PAM","VPN","DLP",
  "Giám sát ATTT","DFIR – điều tra số","Ứng cứu webshell / malware / ransomware","Rà soát & đánh giá tổng thể",
];
const expChips=$("#expChips");
if(expChips) EXPERIENCE.forEach(t=>expChips.appendChild(el("span","chip-exp",t)));

/* ---- Overview ---- */
const painGrid=$("#painGrid");
PAINS.forEach(p=>painGrid.appendChild(el("div","card pain-card",`<div class="pq"><span class="itile">${svgIcon("info")}</span>${p.q}</div><div class="pa">${p.a}</div><div class="pcost">${p.cost}</div>`)));
const valueRow=$("#valueRow");
VALUES.forEach(v=>valueRow.appendChild(el("div","card value-card",`<div class="itile">${svgIcon(v.icon)}</div><div class="vt">${v.t}</div><div class="vd">${v.d}</div>`)));

/* ---- Pricing ---- */
const priceGrid=$("#priceGrid");
PRICING.forEach(p=>{
  priceGrid.appendChild(el("div","card price-card"+(p.popular?" popular":""),
    `${p.popular?'<span class="pc-badge">Phổ biến</span>':''}<div class="itile">${svgIcon(p.icon)}</div><h3>${p.name}</h3>
     <div class="pc-price">${p.price}${p.unit?`<span class="pc-unit"> ${p.unit}</span>`:''}</div>
     <div class="pc-desc">${p.desc}</div>
     <ul>${p.items.map(i=>`<li><span class="ck">✓</span>${i}</li>`).join("")}</ul>`));
});

/* ---- Charts ---- */
function gaugeSvg(score, color){
  const cx=75, cy=80, r=62, frac=Math.max(0,Math.min(1,score/100));
  const a=Math.PI*(1-frac), x=cx+r*Math.cos(a), y=cy-r*Math.sin(a);
  const bg=`M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${cx+r} ${cy}`;
  const fg=`M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${x.toFixed(1)} ${y.toFixed(1)}`;
  return `<svg viewBox="0 0 150 92" role="img" aria-label="Điểm ${score} trên 100">
    <path d="${bg}" fill="none" stroke="var(--surface-3)" stroke-width="12" stroke-linecap="round"/>
    <path id="gArc" d="${fg}" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round"/>
    <text x="75" y="70" text-anchor="middle" fill="${color}" style="font-family:var(--font-display);font-size:26px;font-weight:700"><tspan id="gScore">${score}</tspan></text>
    <text x="75" y="86" text-anchor="middle" fill="var(--ink-faint)" style="font-size:10px">trên 100</text>
  </svg>`;
}
function scoreColor(s){ return s<40?"var(--crit)":s<70?"var(--warn)":"var(--ok)"; }
function perfChart(){
  const W=640,H=230, padL=44,padR=16,padT=16,padB=34;
  const pts=PERF.points, n=pts.length, maxV=460, minV=100;
  const xx=i=> padL + (W-padL-padR)*(i/(n-1));
  const yy=v=> padT + (H-padT-padB)*(1-(v-minV)/(maxV-minV));
  const line=pts.map((p,i)=>`${i===0?"M":"L"} ${xx(i).toFixed(1)} ${yy(p.v).toFixed(1)}`).join(" ");
  const area=`${line} L ${xx(n-1).toFixed(1)} ${(H-padB).toFixed(1)} L ${xx(0).toFixed(1)} ${(H-padB).toFixed(1)} Z`;
  const gridY=[150,250,350,450].map(v=>`<line x1="${padL}" y1="${yy(v).toFixed(1)}" x2="${W-padR}" y2="${yy(v).toFixed(1)}" stroke="var(--chart-grid)" stroke-width="1"/><text x="${padL-6}" y="${(yy(v)+3).toFixed(1)}" text-anchor="end" fill="var(--chart-ink)" style="font-size:9px;font-family:var(--font-mono)">${v}</text>`).join("");
  const thrY=yy(PERF.threshold), tuneX=xx(PERF.tuneIdx);
  const dots=pts.map((p,i)=>`<circle cx="${xx(i).toFixed(1)}" cy="${yy(p.v).toFixed(1)}" r="3.2" fill="var(--accent)"><title>${p.t}: ${p.v}ms</title></circle>`).join("");
  const labels=pts.map((p,i)=> i%2===0?`<text x="${xx(i).toFixed(1)}" y="${H-padB+16}" text-anchor="middle" fill="var(--chart-ink)" style="font-size:9px;font-family:var(--font-mono)">${p.t}</text>`:"").join("");
  return `<div class="chart-wrap"><svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Tốc độ phản hồi giảm sau khi S4C tối ưu">
      <defs><linearGradient id="pfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--accent)" stop-opacity=".22"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></linearGradient></defs>
      ${gridY}
      <line x1="${padL}" y1="${thrY.toFixed(1)}" x2="${W-padR}" y2="${thrY.toFixed(1)}" stroke="var(--crit)" stroke-width="1.2" stroke-dasharray="4 4" opacity=".7"/>
      <text x="${W-padR}" y="${(thrY-5).toFixed(1)}" text-anchor="end" fill="var(--crit)" style="font-size:9px;font-family:var(--font-mono)">ngưỡng chấp nhận 300ms</text>
      <line x1="${tuneX.toFixed(1)}" y1="${padT}" x2="${tuneX.toFixed(1)}" y2="${H-padB}" stroke="var(--ok)" stroke-width="1.5" stroke-dasharray="3 3" opacity=".8"/>
      <text x="${(tuneX+5).toFixed(1)}" y="${padT+10}" fill="var(--ok)" style="font-size:9px;font-weight:600;font-family:var(--font-mono)">S4C tối ưu</text>
      <path d="${area}" fill="url(#pfill)"/><path d="${line}" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
      ${dots}${labels}
    </svg></div>`;
}
function sparkSvg(arr,color){
  const W=120,H=26,max=Math.max(...arr),min=Math.min(...arr);
  const xx=i=>W*(i/(arr.length-1)), yy=v=> H-2-(H-4)*((v-min)/((max-min)||1));
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><path d="${arr.map((v,i)=>`${i===0?"M":"L"} ${xx(i).toFixed(1)} ${yy(v).toFixed(1)}`).join(" ")}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}
/* ===== Live riêng cho Managed: luồng tự động hóa (job/script) đang chạy ===== */
const OPS_EVENTS = [
  {ic:"database",c:"ok",  t:"Job sao lưu tự động: hoàn tất &amp; kiểm chứng khôi phục"},
  {ic:"gear",   c:"ok",   t:"Script dọn log &amp; ổ đĩa: giải phóng 18 GB"},
  {ic:"pulse",  c:"ok",   t:"Luật tự giãn tải: CPU chạm 82% → đưa về 54%"},
  {ic:"wall",   c:"warn", t:"WAF tự chặn 37 request bất thường tới trang đăng nhập"},
  {ic:"eye",    c:"ok",   t:"Job vá bảo mật: cập nhật 3 dịch vụ, không gián đoạn"},
  {ic:"lock",   c:"warn", t:"Đăng nhập sai nhiều lần → tự khóa tài khoản &amp; gửi cảnh báo"},
  {ic:"network",c:"ok",   t:"Kiểm tra sức khỏe dịch vụ: tất cả bình thường"},
  {ic:"shield", c:"ok",   t:"Đồng bộ danh sách chặn IP xấu từ nguồn tình báo mối đe dọa"},
];
function managedConsole(){
  return `<div class="ops-console">
    <div class="ops-head">
      <span class="live-badge"><span class="dot"></span>LIVE · Tự động hóa đang chạy</span>
      <div class="ops-counters">
        <div class="opc"><div class="opc-v tnum"><span id="opcEvt">0</span></div><div class="opc-l">việc tự động xử lý hôm nay</div></div>
        <div class="opc"><div class="opc-v tnum" style="color:var(--ok)">99.9%</div><div class="opc-l">uptime 30 ngày</div></div>
        <div class="opc"><div class="opc-v tnum">0</div><div class="opc-l">việc cần bạn can thiệp</div></div>
      </div>
    </div>
    <div class="ops-feed" id="opsFeed"></div>
    <div class="ops-note">Mỗi dòng là một job/script S4C dựng sẵn, hệ thống tự chạy. Chỉ việc thật sự cần quyết định mới báo tới bạn.</div>
  </div>`;
}
function startOpsLive(){
  liveStop();
  const feed=$("#opsFeed"); if(!feed) return;
  let evt=147; const evtEl=$("#opcEvt"); countUp(evtEl, evt);
  const push=()=>{
    const e=OPS_EVENTS[Math.floor(Math.random()*OPS_EVENTS.length)];
    const n=new Date(), p=x=>String(x).padStart(2,"0");
    const row=document.createElement("div");
    row.className="of-row "+e.c;
    row.innerHTML=`<span class="of-t tnum">${p(n.getHours())}:${p(n.getMinutes())}:${p(n.getSeconds())}</span><span class="of-ic itile">${svgIcon(e.ic)}</span><span class="of-x">${e.t}</span><span class="of-badge">${e.c==="warn"?svgIcon("info"):svgIcon("check")}</span>`;
    feed.insertBefore(row, feed.firstChild);
    while(feed.children.length>6) feed.removeChild(feed.lastChild);
    evt++; if(evtEl) evtEl.textContent=evt;
  };
  for(let i=0;i<4;i++) push();
  if(reduceMotion) return;
  window.__live=setInterval(push, 2200);
}
/* ===== Live riêng cho DFIR: phát lại diễn biến tấn công từng bước ===== */
function startChainReplay(){
  const nodes=$$("#dfirChain .kc-node");
  if(!nodes.length) return;
  if(reduceMotion){ nodes.forEach(n=>n.classList.add("lit")); return; }
  liveStop(); nodes.forEach(n=>n.classList.remove("lit"));
  let i=0;
  (function tick(){ if(i<nodes.length){ nodes[i].classList.add("lit"); i++; window.__live=setTimeout(tick, 680); } })();
}

/* ---- Scenario engine (3 kịch bản) ---- */
function curScen(){ return SCENARIOS.find(s=>s.id===STATE.scenId)||SCENARIOS[0]; }
function benefit(h,t){ return `<div class="benefit"><span class="b-ic">${svgIcon("check")}</span><div><div class="b-h">${h}</div><div class="b-t">${t}</div></div></div>`; }
function renderScenario(){ renderHub(); renderCustomer(); renderProgress(); renderStage(); renderCtxPanel(); }
const SCN_ART = {
  assess:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gAs" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#6f9bff"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs><rect x="4" y="4" width="56" height="56" rx="15" fill="url(#gAs)"/><rect x="15" y="34" width="6" height="13" rx="2" fill="#ffffff" opacity=".85"/><rect x="25" y="28" width="6" height="19" rx="2" fill="#ffffff" opacity=".85"/><rect x="35" y="23" width="6" height="24" rx="2" fill="#ffd27a"/><circle cx="40" cy="23" r="9" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M47 30l6 6" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/></svg>`,
  tune:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gTn" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#3ad9bb"/><stop offset="1" stop-color="#17a085"/></linearGradient></defs><rect x="4" y="4" width="56" height="56" rx="15" fill="url(#gTn)"/><path d="M18 42a14 14 0 0 1 28 0" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/><path d="M32 42l11-9" stroke="#ffd27a" stroke-width="3.5" stroke-linecap="round"/><circle cx="32" cy="42" r="3.5" fill="#ffffff"/></svg>`,
  managed:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gMn" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9a86ff"/><stop offset="1" stop-color="#5b4bd6"/></linearGradient></defs><rect x="4" y="4" width="56" height="56" rx="15" fill="url(#gMn)"/><path d="M44 24a13 13 0 1 0 2 14" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/><path d="M45 18v8h-8" fill="none" stroke="#ffd27a" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="32" cy="34" r="5" fill="#ffffff"/></svg>`,
  dfir:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gDf" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ff9a63"/><stop offset="1" stop-color="#e14330"/></linearGradient></defs><rect x="4" y="4" width="56" height="56" rx="15" fill="url(#gDf)"/><path d="M32 15l13 4.5v8.5c0 9.5-6.5 14-13 17-6.5-3-13-7.5-13-17v-8.5z" fill="rgba(255,255,255,.2)" stroke="#ffffff" stroke-width="2.6"/><rect x="26.5" y="31" width="11" height="9" rx="2" fill="#ffd27a"/><path d="M28.5 31v-3a3.5 3.5 0 0 1 7 0v3" fill="none" stroke="#ffd27a" stroke-width="2.6"/></svg>`
};
function scnArt(id){ return SCN_ART[id]||""; }
function renderHub(){
  const box=$("#scnHub"); if(!box) return; box.innerHTML="";
  SCENARIOS.forEach(sc=>{
    const b=el("button","scn-pick"+(sc.id===STATE.scenId?" active":""));
    b.innerHTML=`<div class="sp-top"><span class="itile sp-ic">${svgIcon(sc.icon)}</span><div class="sp-meta"><div class="sp-step">${sc.step}</div><h3>${sc.label}</h3></div></div><div class="sp-tag">${sc.tag}</div><div class="sp-cta"><span class="sp-play-btn" title="Xem demo live" aria-label="Xem demo live">${svgIcon("play")}</span></div>`;
    b.addEventListener("click",()=>{ if(STATE.scenId!==sc.id){ STATE.scenId=sc.id; STATE.stageIdx=0; STATE.maxStage=0; STATE.opTab="perf"; STATE.clues=new Set(); renderScenario(); } });
    box.appendChild(b);
  });
}
function renderCustomer(){
  const c=curScen().customer, box=$("#scnCustomer"); if(!box) return;
  box.innerHTML=`<span class="itile" style="width:30px;height:30px;font-size:17px">${svgIcon(c.icon)}</span><span style="font-size:13px;color:var(--ink-soft)"><b style="color:var(--ink)">${c.name}</b> — ${c.type}. ${c.context}.</span>`;
}
function renderProgress(){
  const steps=curScen().steps, box=$("#scnProgress"); box.innerHTML="";
  steps.forEach((s,i)=>{
    const wrap=el("div","scn-pstep"+(i<STATE.stageIdx?" done":"")+(i===STATE.stageIdx?" current":""));
    const node=el("div","node",`<div class="dot">${i<STATE.stageIdx?"✓":(i+1)}</div><div class="plabel">${s.nav}</div>`);
    if(i<=STATE.maxStage) asButton(node,()=>{STATE.stageIdx=i;renderScenario();});
    wrap.appendChild(node); box.appendChild(wrap);
    if(i<steps.length-1){ const c=el("div","scn-pstep"+(i<STATE.stageIdx?" done":"")); c.innerHTML=`<div class="connector"></div>`; box.appendChild(c); }
  });
}
function stageNavHtml(){
  const steps=curScen().steps, first=STATE.stageIdx===0, last=STATE.stageIdx===steps.length-1;
  return `<div class="stage-nav">
    <button class="btn ghost" ${first?"disabled style=visibility:hidden":""} id="stPrev">‹ Quay lại</button>
    ${last?`<button class="btn" id="stReset">↺ Xem lại từ đầu</button>`:`<button class="btn primary" id="stNext">Bước tiếp theo ›</button>`}
  </div>`;
}
function renderStage(){
  liveStop();
  const sc=curScen(), steps=sc.steps, s=steps[STATE.stageIdx];
  const body = sc.id==="assess"?assessBody(s.key) : sc.id==="tune"?tuneBody(s.key) : sc.id==="managed"?managedBody(s.key) : dfirBody(s.key);
  $("#scnStage").innerHTML=`<div class="st-eyebrow">${sc.label} · Bước ${STATE.stageIdx+1}/${steps.length}</div><h2>${s.title}</h2><p class="st-intro">${s.intro}</p>${body}${stageNavHtml()}`;
  bindStageNav(); bindStageBody(sc.id, s.key);
}
function bindStageNav(){
  const p=$("#stPrev"),n=$("#stNext"),r=$("#stReset");
  if(p)p.addEventListener("click",()=>{STATE.stageIdx--;renderScenario();});
  if(n)n.addEventListener("click",()=>{STATE.stageIdx++;STATE.maxStage=Math.max(STATE.maxStage,STATE.stageIdx);renderScenario();});
  if(r)r.addEventListener("click",resetScenario);
}
let liveCpu=PERF.cpu.slice(), liveRam=PERF.ram.slice(), liveLat=PERF.points[PERF.points.length-1].v;
function startPerfLive(){
  liveStop();
  if(reduceMotion) return;
  window.__live=setInterval(()=>{
    const latEl=$("#liveLatVal"),cpuEl=$("#liveCpuVal"),ramEl=$("#liveRamVal"),cs=$("#liveCpuSpark"),rs=$("#liveRamSpark");
    if(!latEl){ liveStop(); return; }
    liveLat=clamp(liveLat+randInt(-6,6),150,184);
    liveCpu.push(clamp(liveCpu[liveCpu.length-1]+randInt(-4,4),28,48)); liveCpu.shift();
    liveRam.push(clamp(liveRam[liveRam.length-1]+randInt(-3,3),44,56)); liveRam.shift();
    latEl.textContent=liveLat;
    cpuEl.textContent=liveCpu[liveCpu.length-1]+"%";
    ramEl.textContent=liveRam[liveRam.length-1]+"%";
    if(cs) cs.innerHTML=sparkSvg(liveCpu,"var(--accent)");
    if(rs) rs.innerHTML=sparkSvg(liveRam,"var(--accent)");
  },1700);
}
function radarChart(items){
  const cx=150, cy=138, R=104, N=items.length;
  const ang=i=> -Math.PI/2 + i*2*Math.PI/N;
  const pt=(i,r)=>[cx+r*Math.cos(ang(i)), cy+r*Math.sin(ang(i))];
  const rings=[0.25,0.5,0.75,1].map(f=>`<polygon points="${items.map((_,i)=>pt(i,R*f).map(n=>n.toFixed(1)).join(",")).join(" ")}" fill="none" stroke="var(--chart-grid)" stroke-width="1"/>`).join("");
  const axes=items.map((_,i)=>{const[x,y]=pt(i,R);return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--chart-grid)" stroke-width="1"/>`;}).join("");
  const now=items.map((it,i)=>pt(i,R*it.now/100).map(n=>n.toFixed(1)).join(",")).join(" ");
  const tgt=items.map((it,i)=>pt(i,R*it.tgt/100).map(n=>n.toFixed(1)).join(",")).join(" ");
  const dots=items.map((it,i)=>{const[x,y]=pt(i,R*it.now/100);return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="var(--accent)"/>`;}).join("");
  const labels=items.map((it,i)=>{const[x,y]=pt(i,R+17);return `<text x="${x.toFixed(1)}" y="${(y+3).toFixed(1)}" text-anchor="middle" fill="var(--ink-soft)" style="font-size:10px;font-weight:600">${it.k}</text>`;}).join("");
  return `<svg viewBox="0 0 300 286" role="img" aria-label="Radar mức trưởng thành an toàn thông tin">${rings}${axes}
    <polygon points="${tgt}" fill="none" stroke="var(--ok)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <polygon points="${now}" fill="color-mix(in srgb,var(--accent) 20%,transparent)" stroke="var(--accent)" stroke-width="2"/>${dots}${labels}</svg>`;
}

/* ===== KB1: Đánh giá tổng thể ===== */
function assessBody(key){
  if(key==="why") return `<div class="grid" style="grid-template-columns:1fr;gap:10px;margin-top:6px">
      ${[["network","Đối tác / khách lớn yêu cầu","Nhiều hợp đồng B2B, bên mua lớn hay nhà đầu tư đòi bạn chứng minh hệ thống an toàn trước khi ký."],["shield","Rủi ro thật đang treo","Mất dữ liệu, bị tấn công, gián đoạn — hậu quả có thật, nhưng bạn chưa biết mình hở ở đâu."],["compass","Cần một điểm khởi đầu","Không đánh giá thì mọi khoản đầu tư về sau đều là đoán mò. Đánh giá cho bạn bản đồ."]].map(r=>`<div class="card" style="padding:14px 16px;display:flex;gap:12px;align-items:flex-start"><span class="itile" style="width:34px;height:34px;font-size:18px">${svgIcon(r[0])}</span><div><b style="font-size:13.5px">${r[1]}</b><div style="font-size:12.5px;color:var(--ink-soft);margin-top:4px">${r[2]}</div></div></div>`).join("")}
    </div>${benefit("Bạn được gì","Hiểu rõ vì sao nên làm — và làm xong bạn có 'tấm bản đồ' để quyết định đầu tư đúng chỗ.")}`;
  if(key==="framework") return `<div class="card" style="padding:16px 18px;margin-top:6px"><p style="font-size:13px;color:var(--ink-soft)">S4C chấm theo <b>NIST CSF</b> — một khung chuẩn quốc tế, gói gọn trong 5 trụ cột dễ hiểu. Mỗi trụ cột trả lời một câu hỏi:</p>
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:10px;margin-top:12px">${CSF.map((c,i)=>`<div style="padding:12px 13px;border:1px solid var(--line);border-radius:var(--radius-sm)"><div style="font-weight:600;font-size:13px">${i+1}. ${c.k} <span style="font-family:var(--font-mono);font-size:10px;color:var(--ink-faint)">${c.en}</span></div><div style="font-size:12px;color:var(--ink-soft);margin-top:4px">${c.note}</div></div>`).join("")}</div></div>
    ${benefit("Bạn được gì","Một thước đo khách quan — không phải cảm tính 'chắc ổn', mà soi theo chuẩn ai cũng công nhận.")}`;
  if(key==="radar"){ const avg=Math.round(CSF.reduce((s,c)=>s+c.now,0)/CSF.length);
    return `<div class="scan-strip"><span class="live-badge"><span class="dot"></span>ĐANG QUÉT</span>
        <div class="scan-c"><div class="sc-v tnum"><span id="scHost">0</span></div><div class="sc-l">máy chủ/thiết bị rà soát</div></div>
        <div class="scan-c"><div class="sc-v tnum" style="color:var(--warn)"><span id="scVuln">0</span></div><div class="sc-l">lỗ hổng phát hiện</div></div>
        <div class="scan-c"><div class="sc-v tnum" style="color:var(--crit)"><span id="scMis">0</span></div><div class="sc-l">cấu hình sai / điểm yếu</div></div>
      </div>
      <div class="card" style="padding:18px;margin-top:10px"><div class="radar-wrap">
        <div>${radarChart(CSF)}<div style="text-align:center;font-size:11px;color:var(--ink-faint);margin-top:4px"><span style="color:var(--accent)">●</span> Hiện tại &nbsp; <span style="color:var(--ok)">▭</span> Mục tiêu</div></div>
        <div><div style="font-family:var(--font-display);font-size:30px;font-weight:700;color:${scoreColor(avg)}">${avg}<span style="font-size:14px;color:var(--ink-faint)">/100</span></div><div style="font-size:12px;color:var(--ink-soft);margin:2px 0 12px">Mức trưởng thành trung bình · còn khoảng cách tới mục tiêu</div>
          <div class="mat-list" id="matList">${CSF.map(c=>`<div class="mat"><div class="mat-top"><span>${c.k}</span><b style="color:${scoreColor(c.now)}">${c.now} <span style="color:var(--ink-faint)">/ ${c.tgt}</span></b></div><div class="track"><div class="fill" data-to="${c.now}" style="width:0%;background:${scoreColor(c.now)}"></div><div class="tgt" style="left:${c.tgt}%"></div></div></div>`).join("")}</div>
        </div></div></div>
      ${benefit("Bạn được gì","Một bức tranh một trang: thấy ngay mình yếu nhất ở 'Phát hiện' và 'Ứng phó' — nơi cần ưu tiên.")}`;
  }
  if(key==="gap") return `<div class="finding-list" style="margin-top:6px">${CSF_GAPS.map(g=>`<div class="finding"><div class="f-sev" style="background:${g.sev==="crit"?"var(--crit)":"var(--warn)"}"></div><div class="f-body"><div class="f-title">${g.title} <span class="pill ${g.sev}">${g.sev==="crit"?"Ưu tiên cao":"Nên làm"}</span></div><div class="f-desc">${g.desc}</div><div class="f-cost" style="color:var(--accent-ink)">→ ${g.act}</div></div></div>`).join("")}</div>
    ${benefit("Bạn được gì","Danh sách việc cụ thể theo mức ưu tiên — biết chính xác tiêu tiền vào đâu trước cho đáng.")}`;
  if(key==="output"){ const avg=Math.round(CSF.reduce((s,c)=>s+c.now,0)/CSF.length);
    return `<div class="report-card" style="margin-top:6px"><div class="rc-head"><span>BÀN GIAO · BẢN ĐÁNH GIÁ TỔNG THỂ (ví dụ)</span><span>NIST CSF + rà soát vận hành</span></div><div class="rc-body">
      <div class="rc-row"><span class="rk">Sức khỏe hệ thống</span><span>28 máy chủ/thiết bị rà soát; chỉ ra điểm nghẽn hiệu năng, cấu hình lệch chuẩn, rủi ro vận hành</span></div>
      <div class="rc-row"><span class="rk">Mức an toàn (ATTT)</span><span>Điểm trưởng thành trung bình <b style="color:${scoreColor(avg)}">${avg}/100</b> theo 5 trụ cột NIST CSF — còn khoảng cách tới mục tiêu</span></div>
      <div class="rc-row"><span class="rk">Rủi ro ưu tiên</span><span>${CSF_GAPS.filter(g=>g.sev==="crit").map(g=>g.title.replace(/ \(.*/,"")).join("; ")}</span></div>
      <div class="rc-row"><span class="rk">Khuyến nghị</span><span>${CSF_GAPS.map(g=>g.act).join("; ")}</span></div>
      <div class="rc-row"><span class="rk">Lộ trình</span><span>${ROADMAP.map(r=>r.h).join(" → ")}</span></div>
      <div class="rc-row"><span class="rk">Tài liệu bàn giao</span><span>Báo cáo đánh giá (bản điều hành cho sếp + bản kỹ thuật cho IT), danh mục rủi ro có mức ưu tiên, lộ trình &amp; checklist hành động</span></div>
    </div></div>
    <div class="roadmap" style="margin-top:14px">${ROADMAP.map((r,i)=>`<div class="rm-item"><div class="rm-rail"><div class="rm-dot">${i+1}</div><div class="rm-line"></div></div><div class="rm-body"><div class="rm-ph">${r.ph}</div><h4>${r.h}</h4><p>${r.p}</p></div></div>`).join("")}</div>
    <div class="svc-link-card" style="margin-top:12px"><p style="font-size:13px;color:var(--ink)"><b>Output:</b> ${curScen().customer.name} nhận bộ tài liệu đánh giá đầy đủ — đủ cơ sở ra quyết định đầu tư, trình đối tác nước ngoài và chuẩn bị audit.</p><button class="btn primary" style="margin-top:12px" data-nav="engagement">Đặt lịch đánh giá miễn phí →</button></div>`;
  }
  return "";
}

/* ===== KB2: Hardening & Tối ưu hiệu năng ===== */
function tuneBody(key){
  const peak=Math.max(...PERF.points.map(p=>p.v));
  if(key==="ctx") return `<div class="risk-callout" style="margin-top:6px"><span class="r-ic">${svgIcon("info")}</span><div><div class="r-h">Hai vấn đề cùng lúc</div><div style="font-size:12.5px;color:var(--ink)">Giờ cao điểm hệ thống phản hồi ~${peak}ms (quá tải), đồng thời cấu hình để mặc định — nhiều cổng/dịch vụ thừa mở ra, thành bề mặt tấn công rộng.</div></div></div>
    ${benefit("Giải quyết cả hai","Hardening và tối ưu hiệu năng đi cùng nhau: một hệ thống nhanh nhưng hở thì vẫn rủi ro, và ngược lại.")}`;
  if(key==="perf") return `<div class="card" style="padding:18px;margin-top:6px"><div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;margin-bottom:4px"><div style="font-size:12.5px;color:var(--ink-soft)">Hiệu năng trước / sau tối ưu (mốc xanh)</div><span class="pill ok">~${peak}ms → ~165ms · nhanh hơn 2,6×</span></div>${perfChart()}
      <div class="mgd-grid" style="margin-top:14px">${TUNE_FIXES.map(m=>`<div class="mgd"><span class="itile">${svgIcon(m[0])}</span><div><b style="font-size:12.5px">${m[1]}</b><div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px">${m[2]}</div></div></div>`).join("")}</div></div>
      ${benefit("Tối ưu hiệu năng (performance)","S4C truy nguyên nhân ở hạ tầng (CSDL, cấu hình, I/O) và tối ưu — không đụng code ứng dụng. Phản hồi nhanh hơn ~2,6 lần.")}`;
  if(key==="harden"){ const before=postureScore("before"), after=postureScore("after");
    return `<div class="card" style="padding:18px;margin-top:6px">
      <div class="gauge-wrap"><div class="gauge">${gaugeSvg(after, scoreColor(after))}<div class="g-cap">Điểm an toàn sau hardening</div></div>
      <div class="gauge-note">Siết đủ các lớp, điểm an toàn tăng từ <b style="color:${scoreColor(before)}">${before}</b> lên <b style="color:${scoreColor(after)}">${after}</b> / 100. Phần lớn bằng công cụ mã nguồn mở.</div></div>
      <div class="harden-list" style="margin-top:18px" id="hardenBars">${POSTURE.map(p=>`<div class="hb"><div class="hb-top"><span class="hb-name">${p.name} <span class="tag">${p.tag}</span></span><span class="hb-delta"><span style="color:var(--ink-faint)">${p.before}</span> → <b style="color:var(--ok)">${p.after}</b></span></div><div class="track"><div class="fill-before" style="width:${p.before}%"></div><div class="fill-after" data-to="${p.after}" style="width:${p.before}%"></div></div><div class="hb-sub">${p.note}</div></div>`).join("")}</div></div>
      ${benefit("Hardening nhiều lớp","Tường lửa, WAF, PAM, siết cấu hình, sao lưu — mỗi lớp giảm một nhóm rủi ro, cộng lại thành phòng thủ có chiều sâu.")}`;
  }
  if(key==="standard") return `<div class="card" style="padding:16px 18px;margin-top:6px"><div style="font-size:12.5px;font-weight:600;margin-bottom:10px">Đối chiếu mốc chuẩn hóa (CIS Benchmark / hardening guideline)</div>
      <div class="mgd-grid">${COMPLIANCE.map(c=>`<div class="mgd"><span class="itile" style="width:24px;height:24px;font-size:12px;background:var(--ok-wash);color:var(--ok)">${svgIcon("check")}</span><div style="font-size:12.3px">${c}</div></div>`).join("")}</div></div>
      ${benefit("Làm đúng, không làm cho có","Mỗi hạng mục đối chiếu với một mốc chuẩn công nhận — bạn có cơ sở chứng minh hệ thống đạt yêu cầu an toàn.")}`;
  if(key==="output"){ const before=postureScore("before"), after=postureScore("after");
    return `<div class="report-card" style="margin-top:6px"><div class="rc-head"><span>BÀN GIAO · HỆ THỐNG TỐI ƯU &amp; ĐẠT CHUẨN (ví dụ)</span><span>${curScen().customer.name}</span></div><div class="rc-body">
      <div class="rc-row"><span class="rk">Hiệu năng</span><span style="color:var(--ok)">Phản hồi nhanh hơn ~2,6 lần (từ ~${peak}ms xuống ~165ms)</span></div>
      <div class="rc-row"><span class="rk">An toàn</span><span>Điểm an toàn tăng <b style="color:${scoreColor(before)}">${before}</b> → <b style="color:var(--ok)">${after}</b> / 100</span></div>
      <div class="rc-row"><span class="rk">Tuân thủ</span><span>Đạt các mốc hardening cơ bản theo CIS Benchmark</span></div>
      <div class="rc-row"><span class="rk">Tài liệu bàn giao</span><span>Tài liệu cấu hình chuẩn, hướng dẫn vận hành &amp; checklist duy trì</span></div>
    </div></div>
    <div class="svc-link-card" style="margin-top:12px"><p style="font-size:13px;color:var(--ink)"><b>Output:</b> hệ thống vừa nhanh hơn vừa vững hơn, có tài liệu để tự duy trì — không phụ thuộc một chiều.</p><button class="btn primary" style="margin-top:12px" data-nav="engagement">Nhận tư vấn hardening &amp; tối ưu →</button></div>`;
  }
  return "";
}

/* ===== KB3: Managed Service ===== */
function managedBody(key){
  if(key==="ctx") return `<div class="risk-callout" style="margin-top:6px"><span class="r-ic">${svgIcon("info")}</span><div><div class="r-h">Bài toán nguồn lực</div><div style="font-size:12.5px;color:var(--ink)">Hệ thống cần người lo mỗi ngày, nhưng phần lớn là việc lặp lại — cập nhật, sao lưu, dọn dẹp, canh cảnh báo. Thuê người ngồi làm tay những việc đó vừa tốn kém, vừa dễ bỏ sót.</div></div></div>
    ${benefit("Hướng đi của S4C","Đưa việc lặp lại vào tự động hóa, dành sức người cho việc khó — thay vì gánh lương cố định cho những đầu việc máy làm tốt hơn.")}`;
  if(key==="monitor"){
    return `<div class="card" style="padding:18px;margin-top:6px">${managedConsole()}</div>
      ${benefit("Để máy làm việc lặp","S4C dựng job, script và luật tự xử lý cho các tình huống thường gặp — hệ thống tự chạy phần nhàm chán, hạn chế lệ thuộc vào việc ngồi canh thủ công.")}`;
  }
  if(key==="coverage") return `<div class="mgd-grid" style="margin-top:6px">${MANAGED.map(m=>`<div class="mgd"><span class="itile">${svgIcon(m.icon)}</span><div><b style="font-size:12.5px">${m.t}</b><div style="font-size:11.5px;color:var(--ink-faint);margin-top:2px">${m.d}</div></div></div>`).join("")}</div>
    ${benefit("Máy làm việc lặp, người làm việc khó","Phần lặp lại để tự động hóa lo; đội ngũ S4C dồn sức vào tối ưu, phân tích và xử lý sự cố — những việc thật sự cần con người.")}`;
  if(key==="resource") return `<div class="card" style="padding:18px;margin-top:6px"><div style="font-size:12.5px;font-weight:600;margin-bottom:12px">Chi phí tương đối: tự tuyển đội vs thuê Managed</div>
      <div class="harden-list">${RESOURCE.map((r,i)=>`<div class="hb"><div class="hb-top"><span class="hb-name">${r.k}</span><b class="hb-delta" style="color:${i===0?'var(--ink-faint)':'var(--ok)'}">${r.pct===100?'~100%':'~'+r.pct+'%'}</b></div><div class="track"><div class="fill-after" style="width:${r.pct}%;background:${i===0?'var(--ink-faint)':'var(--ok)'}"></div></div><div class="hb-sub">${r.note}</div></div>`).join("")}</div>
      <div style="font-size:11px;color:var(--ink-faint);margin-top:8px">Minh họa tương đối — con số thực tùy quy mô.</div>
      <div class="sec-title" style="margin:16px 0 8px">Phương thức quản trị chuẩn</div>
      <ul style="margin:0;padding-left:18px;color:var(--ink-soft);font-size:12.5px">${MGMT_WAY.map(w=>`<li style="margin-bottom:6px">${w}</li>`).join("")}</ul></div>
      ${benefit("Tối ưu nguồn lực","Nhờ tự động hóa, cùng một chi phí lo được nhiều việc hơn so với tuyển người làm tay — lại có quy trình rõ ràng và người chịu trách nhiệm.")}`;
  if(key==="output"){ const r=OPS_REPORT;
    return `<div class="report-card" style="margin-top:6px"><div class="rc-head"><span>BÀN GIAO · BÁO CÁO MANAGED THÁNG (ví dụ)</span><span>${curScen().customer.name}</span></div><div class="rc-body">
      <div class="rc-row"><span class="rk">Việc đã làm</span><span>${r.what}</span></div>
      <div class="rc-row"><span class="rk">Hiệu năng</span><span style="color:var(--ok)">${r.perf}</span></div>
      <div class="rc-row"><span class="rk">Ổn định</span><span>${r.uptime}</span></div>
      <div class="rc-row"><span class="rk">Nguồn lực</span><span>Phần việc lặp đã tự động hóa; ước tính tiết kiệm ~60% so với tự tuyển đội tương đương</span></div>
      <div class="rc-row"><span class="rk">Chi phí</span><span style="color:var(--gold)">${r.cost}</span></div>
    </div></div>
    <div class="svc-link-card" style="margin-top:12px"><p style="font-size:13px;color:var(--ink)"><b>Output:</b> việc lặp lại được tự động hóa, hệ thống chạy ổn định, nguồn lực dồn vào việc giá trị cao — minh bạch mỗi kỳ.</p><button class="btn primary" style="margin-top:12px" data-nav="engagement">Nhận tư vấn Managed →</button></div>`;
  }
  return "";
}

/* ===== KB4: DFIR — Ứng cứu Ransomware (FDI) ===== */
function dfirBody(key){
  if(key==="signal") return `<div class="risk-callout" style="margin-top:6px"><span class="r-ic">${svgIcon("info")}</span><div><div class="r-h">Sự cố khẩn cấp</div><div style="font-size:12.5px;color:var(--ink)">Ransomware đã mã hóa hàng loạt máy. Dây chuyền sản xuất và văn phòng đình trệ — cần ứng cứu ngay, đúng quy trình, không hoảng loạn.</div></div></div>
    <div class="spark-row" style="margin-top:12px">${DFIR_SIGNAL.map(s=>`<div class="spark"><div class="sp-lbl">${s[0]}</div><div class="sp-val tnum" style="color:var(--crit)">${s[1]}</div><div style="font-size:11px;color:var(--ink-faint);margin-top:6px">${s[2]}</div></div>`).join("")}</div>
    ${benefit("Giữ bình tĩnh, đúng quy trình","Ở quy mô này, hành động sai (xóa vội, khởi động lại, trả tiền chuộc) có thể làm mất bằng chứng hoặc mất thêm dữ liệu. S4C vào theo quy trình DFIR.")}`;
  if(key==="scope") return `<div class="finding-list" style="margin-top:6px">${DFIR_FINDINGS.map(f=>`<div class="finding"><div class="f-sev" style="background:${f.sev==="crit"?"var(--crit)":"var(--warn)"}"></div><div class="f-body"><div class="f-title">${f.title} <span class="pill ${f.sev}">${f.sev==="crit"?"Nghiêm trọng":"Yếu tố góp phần"}</span></div><div class="f-desc">${f.desc}</div><div class="f-cost">${f.cost}</div></div></div>`).join("")}</div>
    ${benefit("Khoanh vùng trước khi xử lý","Biết chính xác bao nhiêu máy bị ảnh hưởng, lây từ đâu và còn đường lây nào — mới chặn đúng và khôi phục an toàn.")}`;
  if(key==="chain") return `<div class="card" style="padding:16px 18px;margin-top:6px"><div class="chain-head"><span style="font-size:12.5px;font-weight:600">Diễn biến cuộc tấn công</span><button class="btn ghost sm" id="chainReplay">▶ Phát lại diễn biến</button></div>
      <div class="kchain" id="dfirChain">${DFIR_CHAIN.map((k,i)=>`<div class="kc-node"><div class="kc-box"><div class="kc-n">${k.n}</div><div class="kc-t">${k.t}</div><div class="kc-d">${k.d}</div></div></div>${i<DFIR_CHAIN.length-1?'<span class="kc-arrow">→</span>':''}`).join("")}</div></div>
    <div class="card" style="padding:14px 16px;margin-top:12px"><div style="font-size:11px;font-weight:700;color:var(--crit);text-transform:uppercase;letter-spacing:.7px;font-family:var(--font-mono)">Kết luận điều tra</div><p style="font-size:12.5px;color:var(--ink-soft);margin-top:7px">Khởi nguồn từ một email lừa đảo; kẻ tấn công chiếm máy đầu, leo thang quyền quản trị, lan ngang khắp mạng phẳng rồi kích hoạt mã hóa đồng loạt. Mấu chốt khiến thiệt hại lớn: không MFA và mạng không chia vùng.</p></div>
    ${benefit("Hiểu để bịt tận gốc","Không chỉ gỡ ransomware — mà biết chính xác lỗ hổng quy trình đã để nó vào và lan rộng.")}`;
  if(key==="respond") return `<div class="card" style="padding:16px 18px;margin-top:6px">${DFIR_RESP.map((s,i)=>`<div style="display:flex;gap:11px;padding:10px 0;${i?'border-top:1px solid var(--line-soft)':''}"><span class="itile" style="width:24px;height:24px;font-size:11px;background:var(--crit-wash);color:var(--crit)">${i+1}</span><div style="font-size:12.8px;color:var(--ink-soft)">${s}</div></div>`).join("")}</div>
    <div class="card" style="padding:13px 15px;margin-top:12px;display:flex;gap:10px;align-items:center"><span class="itile" style="width:30px;height:30px;font-size:16px;background:var(--crit-wash);color:var(--crit)">${svgIcon("shield")}</span><div style="font-size:12.5px;color:var(--ink-soft)"><b style="color:var(--ink)">Không trả tiền chuộc:</b> trả tiền không đảm bảo lấy lại dữ liệu và còn nuôi kẻ tấn công. Khôi phục từ backup sạch là đường đúng.</div></div>
    ${benefit("Ứng cứu có kiểm soát","Ưu tiên chặn lây và giữ bằng chứng; mọi bước phối hợp với bạn — mục tiêu đưa hoạt động trở lại nhanh &amp; an toàn.")}`;
  if(key==="output") return `<div class="report-card" style="margin-top:6px"><div class="rc-head"><span>BÀN GIAO · BÁO CÁO ĐIỀU TRA &amp; ỨNG CỨU (DFIR)</span><span>${curScen().customer.name}</span></div><div class="rc-body">
      ${DFIR_OUTPUT.map(o=>`<div class="rc-row"><span class="rk">${o[0]}</span><span>${o[1]}</span></div>`).join("")}
      <div class="rc-row"><span class="rk">Tài liệu bàn giao</span><span>Báo cáo sự cố đầy đủ (dòng thời gian, bằng chứng, hành động), khuyến nghị kỹ thuật &amp; quy trình</span></div>
    </div></div>
    <div class="svc-link-card" style="margin-top:12px"><p style="font-size:13px;color:var(--ink)"><b>Output:</b> hệ thống được khôi phục, nguyên nhân gốc được bịt, và một báo cáo đủ sức trình ban lãnh đạo/tập đoàn mẹ. Kèm lộ trình để sự cố không lặp lại.</p><button class="btn primary" style="margin-top:12px" data-nav="engagement">Cần ứng cứu khẩn? Liên hệ ngay →</button></div>`;
  return "";
}

function bindStageBody(scen,key){
  // Managed — cơ chế live: bảng trực NOC, log sự kiện chạy liên tục
  if(scen==="managed" && key==="monitor") startOpsLive();
  // Đánh giá tổng thể — cơ chế live: quét phát hiện (count-up) + thanh mức trưởng thành
  if(scen==="assess" && key==="radar"){
    countUp($("#scHost"),28); countUp($("#scVuln"),41); countUp($("#scMis"),63);
    if(!reduceMotion){ requestAnimationFrame(()=>requestAnimationFrame(()=>{ $$("#matList .fill").forEach(f=>{ f.style.width=f.dataset.to+"%"; }); })); }
    else { $$("#matList .fill").forEach(f=>f.style.width=f.dataset.to+"%"); }
  }
  // Hardening & Tuning — cơ chế live: thanh before→after trượt lên + gauge count-up
  if(scen==="tune" && key==="harden"){
    animateGauge(postureScore("after"));
    if(!reduceMotion){ requestAnimationFrame(()=>requestAnimationFrame(()=>{ $$("#hardenBars .fill-after").forEach(f=>{ f.style.width=f.dataset.to+"%"; }); })); }
    else { $$("#hardenBars .fill-after").forEach(f=>f.style.width=f.dataset.to+"%"); }
  }
  // DFIR — cơ chế live: phát lại diễn biến tấn công từng bước
  if(scen==="dfir" && key==="chain"){ startChainReplay(); const rb=$("#chainReplay"); if(rb) rb.addEventListener("click",startChainReplay); }
}
function renderCtxPanel(){
  const sc=curScen(), c=sc.customer, p=$("#ctxPanel");
  p.innerHTML=`
    <h4>Kịch bản</h4>
    <div class="ctx-card"><div class="cc-name" style="font-size:13px"><span class="itile">${svgIcon(sc.icon)}</span>${sc.label}</div><div class="cc-sub">${sc.step}</div></div>
    <h4 style="margin-top:16px">Khách hàng (ví dụ)</h4>
    <div class="ctx-card"><div class="cc-name" style="font-size:12.5px">${c.name}</div><div class="cc-sub">${c.type}</div></div>
    <h4 style="margin-top:16px">Các bước</h4>
    <div class="ctx-steps">${sc.steps.map((s,i)=>`<div class="ctx-s ${i===STATE.stageIdx?"on":""} ${i<STATE.stageIdx?"done":""}"><span class="cs-n">${i<STATE.stageIdx?"✓":(i+1)}</span>${s.nav}</div>`).join("")}</div>
    <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" style="flex:1;padding:9px" data-nav="engagement">Liên hệ</button><button class="btn" style="padding:9px" data-nav="services">Dịch vụ</button></div>
    <div style="margin-top:12px"><span class="note-tag">VÍ DỤ MINH HỌA</span></div>`;
}

/* ---- Services ---- */
const lifecycleBox=$("#lifecycle");
const LC_SHORT={consult:"Tư vấn & Đánh giá",design:"Đề xuất giải pháp",operate:"Vận hành & Tự động hóa",debug:"Debug & Xử lý lỗi",harden:"Hardening",incident:"Ứng cứu sự cố",report:"Báo cáo",training:"Đào tạo ATTT"};
SERVICES.forEach((s,i)=>{
  const node=el("div","lc-node");
  node.innerHTML=`<div class="lc-chip" data-svc="${s.id}"><div class="itile">${svgIcon(s.icon)}</div><div class="lc-lbl">${LC_SHORT[s.id]}</div></div>${i<SERVICES.length-1?'<span class="lc-arrow">→</span>':''}`;
  lifecycleBox.appendChild(node);
});
const svcGrid=$("#svcGrid");
SERVICES.forEach(s=>{
  const card=el("div","card svc-card");
  card.innerHTML=`<div class="sc-top"><div class="itile">${svgIcon(s.icon)}</div><div><div class="sc-step">${s.step}</div><h3>${s.name}</h3></div></div>
    <p class="oneliner">${s.one}</p>
    <div class="tags">${s.tags.map(t=>`<span class="mini-tag">${t}</span>`).join("")}</div>
    <div class="sc-foot"><span class="sc-price">${s.model}</span><span style="color:var(--accent-ink);font-size:12px;font-weight:600">Xem chi tiết →</span></div>`;
  asButton(card,()=>openService(s));
  svcGrid.appendChild(card);
});
$$(".lc-chip").forEach(c=>asButton(c,()=>openService(SERVICES.find(s=>s.id===c.dataset.svc))));
function openService(s){
  go("services");
  const body=`<div class="itile" style="width:40px;height:40px;font-size:21px">${svgIcon(s.icon)}</div>
    <div class="sc-step" style="margin-top:10px;font-size:10px;font-family:var(--font-mono);color:var(--ink-faint);font-weight:600">${s.step} · ${s.model}</div>
    <h3 style="font-size:18px;margin-top:3px">${s.name}</h3>
    <p style="color:var(--ink-soft);margin-top:7px">${s.one}</p>
    <div class="detail-field"><div class="k">Hạng mục kỹ thuật</div><div class="v" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${s.tags.map(t=>`<span class="mini-tag">${t}</span>`).join("")}</div></div>
    <div class="detail-field"><div class="k">Giải quyết vấn đề gì</div><div class="v">${s.problem}</div></div>
    <div class="get-box"><div class="k">Bạn nhận được gì</div><ul>${s.get.map(i=>`<li>${i}</li>`).join("")}</ul></div>
    <div class="price-box"><div class="k">Chi phí tham khảo</div>${s.price}</div>
    <div class="exc-box"><div class="k">Ngoài phạm vi</div><ul>${s.boundary.map(i=>`<li>${i}</li>`).join("")}</ul></div>`;
  openPanel(body);
}

/* ---- Models ---- */
const modelGrid=$("#modelGrid");
MODELS.forEach(m=>modelGrid.appendChild(el("div","card model-card",`<div class="itile">${svgIcon(m.icon)}</div><h3>${m.name}</h3><p class="m-desc">${m.desc}</p><div class="m-for">${m.forWho}</div><div class="m-price">${m.price}</div>`)));

/* ---- Architecture ---- */
const nodeDetail=$("#nodeDetail");
function showNode(id){
  const n=NODES[id];
  $$(".arch-node").forEach(g=>g.classList.toggle("sel",g.dataset.node===id));
  nodeDetail.innerHTML=`<h3 style="font-size:16px">${n.title}</h3>${n.oss?`<div style="margin-top:7px"><span class="oss-pill">${n.oss}</span></div>`:""}
    <div class="detail-field"><div class="k">Làm gì</div><div class="v">${n.purpose}</div></div>
    <div class="detail-field"><div class="k">Cần gì</div><ul>${n.input.map(i=>`<li>${i}</li>`).join("")}</ul></div>
    <div class="detail-field"><div class="k">Cho ra gì</div><ul>${n.output.map(i=>`<li>${i}</li>`).join("")}</ul></div>
    <div class="exc-box"><div class="k">Giới hạn</div><div style="font-size:12.5px;color:var(--ink-soft)">${n.limit}</div></div>
    <div class="detail-field"><div class="k">Thuộc dịch vụ</div><div class="v" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${n.svc.map(s=>`<span class="pill accent">${s}</span>`).join("")}</div></div>`;
  if(window.matchMedia("(max-width: 1000px)").matches) nodeDetail.scrollIntoView({behavior:"smooth",block:"nearest"});
}
$$(".arch-node").forEach(g=>g.addEventListener("click",()=>showNode(g.dataset.node)));

/* ---- Problem → Solution map (trang demo) ---- */
(function(){
  const box=$("#probMap"); if(!box) return;
  PROBLEM_MAP.forEach(p=>{
    const row=el("button","pm-row");
    row.innerHTML=`<span class="pm-ic itile">${svgIcon(p.ic)}</span><span class="pm-prob">${p.prob}</span><span class="pm-arrow">→</span><span class="pm-sol">${p.sol}</span><span class="pm-go">${p.scn?"Xem demo":"Xem dịch vụ"}</span>`;
    row.addEventListener("click",()=>{
      if(p.scn){ if(STATE.scenId!==p.scn){STATE.scenId=p.scn;STATE.stageIdx=0;STATE.maxStage=0;STATE.clues=new Set();} renderScenario(); const hub=$("#scnHub"); if(hub) hub.scrollIntoView({behavior:"smooth",block:"center"}); }
      else if(p.svc){ const s=SERVICES.find(x=>x.id===p.svc); if(s) openService(s); }
    });
    box.appendChild(row);
  });
})();

/* ---- Engagement ---- */
const chosen=new Set();
const needOpts=$("#needOpts");
NEEDS.forEach(n=>{
  const opt=el("label","need-opt");
  opt.innerHTML=`<input type="checkbox" value="${n.id}"><div class="no-box"><span class="no-ico itile">${svgIcon(n.icon)}</span><div class="no-txt"><div class="no-t">${n.t}</div><div class="no-d">${n.d}</div></div><span class="no-badge">${svgIcon("check")}</span></div>`;
  const cb=$("input",opt);
  cb.addEventListener("change",()=>{opt.classList.toggle("on",cb.checked);cb.checked?chosen.add(n.t):chosen.delete(n.t);const nc=$("#needCount");if(nc)nc.textContent=chosen.size;buildSummary();});
  needOpts.appendChild(opt);
});
["engOrg","engScale","engSys","engGoal","engBudget","engContact"].forEach(f=>$("#"+f).addEventListener("input",buildSummary));
function summaryText(){
  const v=id=>$("#"+id).value.trim()||"—";
  const needs=chosen.size?[...chosen].map(n=>"  • "+n).join("\n"):"  • (chưa chọn)";
  return `GỬI S4C · ĐIỀU TÔI ĐANG CẦN
────────────────────────────
Nhu cầu chính:
${needs}

Doanh nghiệp làm gì : ${v("engOrg")}
Quy mô              : ${v("engScale")}
Hiện có về IT       : ${v("engSys")}

Mong muốn:
  ${$("#engGoal").value.trim()||"—"}

Ngân sách dự kiến   : ${v("engBudget")}
Liên hệ lại         : ${v("engContact")}
────────────────────────────
Bước tiếp theo: một buổi trao đổi MIỄN PHÍ để S4C
hiểu rõ bài toán và đề xuất cách phù hợp với bạn.`;
}
function buildSummary(){ $("#engSummary").textContent=summaryText(); }
buildSummary();
function channelDefs(){
  const defs=[
    { id:"hotline", label:"Hotline", icon:"phone", color:"#16a34a", primary:true },
    { id:"email",   label:"Email",   icon:"mail",  color:"#ea4335" },
    { id:"zalo",    label:"Zalo",    icon:"chat",  color:"#0068ff" },
    { id:"telegram",label:"Telegram",icon:"telegram", color:"#229ed9" },
    { id:"facebook",label:"Facebook / Messenger", icon:"facebook", color:"#1877f2" },
    { id:"copy",    label:"Sao chép nội dung", icon:"copy", color:"var(--ink-soft)" },
  ];
  const has={ hotline:!isPlaceholder(CONTACT.hotline), email:!isPlaceholder(CONTACT.email), zalo:!isPlaceholder(CONTACT.phone), telegram:!isPlaceholder(CONTACT.telegram), facebook:!isPlaceholder(CONTACT.messenger) };
  const list=defs.filter(d=>d.id==="copy"||has[d.id]);
  if(FORM_ENDPOINT) list.unshift({ id:"form", label:"Gửi ngay", icon:"send", color:"#fff", primary:true });
  if(FORM_ENDPOINT) list.forEach(d=>{ if(d.id!=="form") d.primary=false; });
  return list;
}
function buildShare(){
  const row=$("#shareRow"); if(!row) return; row.innerHTML="";
  channelDefs().forEach(d=>{
    const b=el("button","share-btn"+(d.primary?" primary":""));
    b.innerHTML=`<span class="ic" style="color:${d.primary?'#fff':d.color}">${svgIcon(d.icon)}</span>${d.label}`;
    b.addEventListener("click",()=> d.id==="copy" ? (copyText(summaryText()),toast("Đã sao chép nội dung")) : d.id==="form" ? submitForm(b) : openChannelGuide(d));
    row.appendChild(b);
  });
}
/* Gửi thẳng form về FORM_ENDPOINT (Formspree-compatible) */
async function submitForm(btn){
  const contact=$("#engContact").value.trim();
  if(!contact){ toast("Bạn để lại email hoặc số điện thoại để S4C liên hệ lại nhé"); $("#engContact").focus(); return; }
  btn.disabled=true;
  try{
    const r=await fetch(FORM_ENDPOINT,{ method:"POST", headers:{ "Content-Type":"application/json", "Accept":"application/json" },
      body:JSON.stringify({ _subject:"Nhu cầu dịch vụ S4C", lien_he:contact, noi_dung:summaryText() }) });
    if(!r.ok) throw new Error(r.status);
    toast("Đã gửi — S4C sẽ liên hệ lại sớm");
  }catch(e){ toast("Chưa gửi được — bạn thử kênh Hotline/Email/Zalo bên cạnh nhé"); }
  btn.disabled=false;
}
/* Popup tiến trình khi chọn kênh gửi */
function openChannelGuide(d){
  const org=$("#engOrg").value.trim();
  const mailTo=isPlaceholder(CONTACT.email)?"":CONTACT.email;
  const phoneRaw=!isPlaceholder(CONTACT.phone)?CONTACT.phone.replace(/[^0-9+]/g,""):"";
  const hotlineRaw=!isPlaceholder(CONTACT.hotline)?CONTACT.hotline.replace(/[^0-9+]/g,""):"";
  const cfg={
    hotline:{ target:isPlaceholder(CONTACT.hotline)?null:CONTACT.hotline, copyFirst:false,
      steps:["Bấm “Gọi ngay” để gọi trực tiếp, hoặc lưu số để nhắn SMS.","Nói ngắn gọn bạn đang gặp vấn đề gì — S4C sẽ hỏi tiếp để hiểu rõ."],
      actLabel:"Gọi ngay", act:()=>{ if(hotlineRaw) window.location.href="tel:"+hotlineRaw; } },
    email:{ target:isPlaceholder(CONTACT.email)?null:CONTACT.email, copyFirst:false,
      steps:["Bấm “Soạn email” — tiêu đề & nội dung đã điền sẵn.","Xem lại một lượt rồi bấm gửi trong ứng dụng mail của bạn.","Máy chưa cài ứng dụng mail? Bấm “Mở Gmail trên web” — hoặc sao chép nội dung và gửi tới địa chỉ trên."],
      alt:{ label:"Mở Gmail trên web", act:()=>window.open("https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(mailTo)+"&su="+encodeURIComponent("Nhu cầu dịch vụ S4C"+(org?(" - "+org):""))+"&body="+encodeURIComponent(summaryText()),"_blank","noopener") },
      actLabel:"Soạn email", act:()=>{ window.location.href="mailto:"+encodeURIComponent(mailTo)+"?subject="+encodeURIComponent("Nhu cầu dịch vụ S4C"+(org?(" - "+org):""))+"&body="+encodeURIComponent(summaryText()); } },
    zalo:{ target:phoneRaw?("Zalo: "+CONTACT.phone):null, copyFirst:true,
      steps:["Nội dung đã được sao chép tự động.","Bấm “Mở Zalo” để tới trang S4C.","Dán (Ctrl/⌘ + V) vào khung chat và gửi."],
      actLabel:"Mở Zalo", act:()=>{ window.open(phoneRaw?("https://zalo.me/"+phoneRaw.replace(/[^0-9]/g,"")):"https://zalo.me","_blank"); } },
    telegram:{ target:!isPlaceholder(CONTACT.telegram)?CONTACT.telegram:null, copyFirst:true,
      steps:["Nội dung đã được sao chép tự động.","Bấm “Mở Telegram” để tới S4C.","Dán (Ctrl/⌘ + V) vào khung chat và gửi."],
      actLabel:"Mở Telegram", act:()=>{ const tg=!isPlaceholder(CONTACT.telegram)?CONTACT.telegram:""; const url=tg?(tg.startsWith("http")?tg:("https://t.me/"+tg.replace(/^@/,""))):("https://t.me/share/url?url=&text="+encodeURIComponent(summaryText())); window.open(url,"_blank"); } },
    facebook:{ target:!isPlaceholder(CONTACT.messenger)?CONTACT.messenger:null, copyFirst:true,
      steps:["Nội dung đã được sao chép tự động.","Bấm “Mở Messenger” để tới trang S4C.","Dán (Ctrl/⌘ + V) vào khung chat và gửi."],
      actLabel:"Mở Messenger", act:()=>{ window.open(!isPlaceholder(CONTACT.messenger)?CONTACT.messenger:"https://facebook.com","_blank"); } },
  }[d.id];
  if(cfg.copyFirst) copyText(summaryText());
  const stepsHtml=cfg.steps.map((s,i)=>`<li><span class="cs-num">${i+1}</span><span>${s}</span></li>`).join("");
  const targetHtml = cfg.target
    ? `<div class="chan-target"><span class="itile" style="width:30px;height:30px;font-size:15px">${svgIcon(d.icon)}</span><div><div style="font-size:11px;color:var(--ink-faint)">Gửi tới</div><b style="font-size:13.5px">${cfg.target}</b></div></div>`
    : `<div class="chan-target warn"><span class="itile" style="width:30px;height:30px;font-size:15px;background:var(--warn-wash);color:var(--warn)">${svgIcon("info")}</span><div style="font-size:12px;color:var(--ink-soft)">Kênh ${d.label} đang được S4C cập nhật. Bạn hãy sao chép nội dung và gửi qua Hotline hoặc Email giúp nhé.</div></div>`;
  openPanel(`
    <div style="display:flex;gap:11px;align-items:center;margin-bottom:4px"><span class="itile" style="width:40px;height:40px;font-size:20px;color:#fff;background:${d.color==='var(--ink-soft)'?'var(--accent)':d.color}">${svgIcon(d.icon)}</span><div><div class="eyebrow" style="margin:0">Gửi nhu cầu</div><h3 style="font-size:17px">Qua ${d.label}</h3></div></div>
    ${targetHtml}
    <div class="sec-title" style="margin:16px 0 8px">Các bước</div>
    <ol class="chan-steps">${stepsHtml}</ol>
    ${cfg.target?`<button class="btn primary lg" id="chanAct" style="width:100%;margin-top:6px">${cfg.actLabel}</button>`:""}
    ${cfg.target&&cfg.alt?`<button class="btn" id="chanAlt" style="width:100%;margin-top:9px">${cfg.alt.label}</button>`:""}
    <button class="btn" id="chanCopy" style="width:100%;margin-top:9px"><span class="ic" style="color:var(--ink-soft)">${svgIcon("copy")}</span> Sao chép lại nội dung</button>
    <div class="copy-ok" id="chanDone" style="margin-top:10px"></div>
  `);
  const act=$("#chanAct"); if(act) act.addEventListener("click",()=>{ cfg.act(); const dn=$("#chanDone"); if(dn){ dn.textContent="✓ Đã mở "+d.label+" — đừng quên dán & gửi nội dung nhé."; dn.style.display="block"; } });
  const alt=$("#chanAlt"); if(alt) alt.addEventListener("click",cfg.alt.act);
  const cp=$("#chanCopy"); if(cp) cp.addEventListener("click",()=>{ copyText(summaryText()); const dn=$("#chanDone"); if(dn){ dn.textContent="✓ Đã sao chép nội dung."; dn.style.display="block"; } });
}
buildShare();

/* ---- Overlay panel ---- */
let panelEl=null;
function openPanel(html){
  closePanel(); $("#overlay").classList.add("show");
  panelEl=el("div","card");
  panelEl.style.cssText="position:fixed;top:0;right:0;bottom:0;width:min(460px,93vw);z-index:51;overflow-y:auto;border-radius:0;box-shadow:var(--shadow-lg);padding:24px;padding-top:calc(24px + env(safe-area-inset-top,0px))";
  panelEl.innerHTML=`<button class="btn ghost" id="panelClose" style="position:absolute;top:14px;right:14px;padding:5px 11px">✕</button>`+html;
  document.body.appendChild(panelEl);
  $("#panelClose").addEventListener("click",closePanel);
  $("#overlay").onclick=closePanel;
}
function closePanel(){if(panelEl){panelEl.remove();panelEl=null;}$("#overlay").classList.remove("show");}

/* ---- Guided presentation (đi theo kịch bản đang chọn) ---- */
let gIdx=0,guiding=false;
const guideBar=$("#guideBar");
function guideTotal(){ return curScen().steps.length+1; }
function startGuide(){ guiding=true; gIdx=0; guideBar.classList.add("show"); gotoGuide(); }
function stopGuide(){ guiding=false; guideBar.classList.remove("show"); }
function gotoGuide(){
  const sc=curScen(), steps=sc.steps, total=steps.length+1;
  if(gIdx===0){ go("overview"); $("#gTitle").textContent="Nỗi lo của khách hàng"; $("#gAction").textContent="Mở đầu bằng vấn đề thật của doanh nghiệp nhỏ."; }
  else { const i=gIdx-1; go("scenario"); STATE.stageIdx=i; STATE.maxStage=Math.max(STATE.maxStage,i); STATE.opTab="perf"; renderScenario(); $("#gTitle").textContent=sc.label+" · "+steps[i].nav; $("#gAction").textContent=steps[i].title.replace(/^\d+ · /,""); }
  $("#gCount").textContent=(gIdx+1)+" / "+total;
  $("#gPrev").disabled=gIdx===0; $("#gNext").disabled=gIdx===total-1;
}
$("#guideBtn").addEventListener("click",()=>guiding?stopGuide():startGuide());
$("#gPrev").addEventListener("click",()=>{if(gIdx>0){gIdx--;gotoGuide();}});
$("#gNext").addEventListener("click",()=>{if(gIdx<guideTotal()-1){gIdx++;gotoGuide();}});
$("#gClose").addEventListener("click",stopGuide);
document.addEventListener("keydown",e=>{
  if(!guiding)return;
  if(e.key==="ArrowRight"&&gIdx<guideTotal()-1){gIdx++;gotoGuide();}
  if(e.key==="ArrowLeft"&&gIdx>0){gIdx--;gotoGuide();}
  if(e.key==="Escape")stopGuide();
});

/* ---- FAQ ---- */
const FAQS=[
  { q:"Cho người ngoài truy cập hệ thống thì có an toàn không?", a:"S4C sẵn sàng ký cam kết bảo mật (NDA). Chúng tôi dùng quyền truy cập tối thiểu và tạm thời, ưu tiên chỉ đọc (read-only) khi có thể, mọi thao tác đều ghi lại (log), và bất kỳ việc gì có rủi ro đều hỏi ý bạn trước khi làm." },
  { q:"DN của tôi còn nhỏ / mới, S4C có nhận không?", a:"Có — đây đúng là đối tượng S4C hướng tới. Chúng tôi bắt đầu từ việc gấp và quan trọng nhất với bạn, làm vừa sức ngân sách, không ép làm tất cả cùng lúc." },
  { q:"Chi phí tính thế nào, có phát sinh không?", a:"Buổi trao đổi đầu miễn phí. Sau khi hiểu bài toán, S4C báo giá và phạm vi rõ ràng trước khi làm — không phát sinh ngoài thỏa thuận. Vì mỗi hệ thống một khác nên giá theo đúng phạm vi của bạn." },
  { q:"Bao lâu thì thấy kết quả?", a:"Việc gấp (bật sao lưu, chặn nguy cơ, xử lý sự cố) thường trong vài ngày. Dựng nền tảng vững chắc thường 1–2 tuần tùy quy mô. Vận hành/giám sát là đồng hành liên tục." },
  { q:"Tôi chỉ cần tư vấn hoặc làm một lần, được không?", a:"Hoàn toàn được. Bạn có thể chỉ nhờ đánh giá hoặc xử lý một việc cụ thể, không bắt buộc gói dài hạn. Khi cần, quay lại bất cứ lúc nào." },
  { q:"Khác gì so với tự thuê một bạn IT?", a:"Bạn có cả một đội nhiều mảng (vận hành, tối ưu, bảo mật, ứng cứu) thay vì một người; chi phí linh hoạt theo nhu cầu; và không phải gánh lương cố định hay lo người nghỉ việc." },
  { q:"S4C có sửa code / sản phẩm của tôi không?", a:"Không. S4C tập trung tầng hệ thống, hạ tầng và an toàn — phối hợp cùng đội phát triển của bạn chứ không viết hay sửa code ứng dụng." },
  { q:"Dữ liệu khách hàng của tôi có bị lộ không?", a:"Không. S4C không thu thập và không chia sẻ dữ liệu của bạn cho bên thứ ba, chỉ xử lý trong phạm vi được cho phép và tuân thủ cam kết bảo mật đã ký." },
];
const faqList=$("#faqList");
if(faqList) FAQS.forEach(f=>{ const d=el("div","faq"); d.innerHTML=`<button class="faq-q" aria-expanded="false">${f.q}<span class="chev">›</span></button><div class="faq-a">${f.a}</div>`; const q=d.querySelector(".faq-q"); q.addEventListener("click",()=>{ q.setAttribute("aria-expanded",String(d.classList.toggle("open"))); }); faqList.appendChild(d); });

/* ---- Footer + FAB ---- */
(function(){
  const fp=$("#fPhone"), fe=$("#fEmail");
  if(fp){ if(!isPlaceholder(CONTACT.hotline)){ fp.textContent="Hotline: "+CONTACT.hotline; fp.href="tel:"+CONTACT.hotline.replace(/[^0-9+]/g,""); } else { fp.textContent="Hotline"; } }
  if(fe){ if(!isPlaceholder(CONTACT.email)){ fe.textContent="Email: "+CONTACT.email; fe.href="mailto:"+CONTACT.email; } else { fe.textContent="Email"; } }
  const pe=$("#pEmail"); if(pe && !isPlaceholder(CONTACT.email)) pe.textContent=CONTACT.email;
  const fab=$("#fab"); if(fab) fab.addEventListener("click",()=>go("engagement"));
})();

/* ---- Init ---- */
fillContact();
go(viewFromHash(),{fromHistory:true});
if(analyticsEnabled()){ if(getConsent()==="yes"){ loadAnalytics(); trackView(currentView); } else if(getConsent()===null) showConsent(true); }
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ if(panelEl) closePanel(); setNavOpen(false); } });
showNode("detect"); $$(".arch-node").forEach(g=>g.classList.remove("sel"));
renderScenario();
