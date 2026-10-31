# S4C Portal

**Systems · Smart Solutions · Security** — chỗ dựa kỹ thuật cho doanh nghiệp nhỏ, siêu nhỏ và startup.

Portal giới thiệu dịch vụ tương tác: vận hành & tối ưu hệ thống, hardening & an toàn thông tin, tự động hóa việc lặp lại, và điều tra – ứng cứu sự cố. Có demo live theo từng tình huống thực tế, mỗi tình huống kết thúc bằng một kết quả bàn giao cụ thể.

Trang đang chạy tại <https://s4c-team.github.io> (GitHub Pages, nhánh `main`).

## Cấu trúc
| File | Nội dung |
|---|---|
| `index.html` | Khung trang: head/SEO/Open Graph, HTML từng màn |
| `assets/css/style.css` | Toàn bộ giao diện (theme sáng/tối) |
| `assets/js/app.js` | Dữ liệu nội dung (dịch vụ, bảng giá, kịch bản, FAQ) + logic tương tác |
| `assets/img/*.webp` | Ảnh banner |
| `og-cover.png` | Ảnh xem trước khi chia sẻ link (1200×630) |
| `404.html`, `robots.txt`, `sitemap.xml` | Trang lỗi và file cho công cụ tìm kiếm |
| `tests/smoke.js` | Kiểm thử tự động bằng Playwright |
| `tools/stamp-assets.js` | Gắn mã phiên bản `?v=` cho CSS/JS/ảnh (chống cache cũ) |
| `HUONG-DAN-DEM-LUOT-XEM.md` | Hướng dẫn bật/đọc số liệu Google Analytics |

Mỗi màn có URL riêng dạng `https://s4c-team.github.io/#pricing`, gửi link là mở đúng màn đó. Các màn: `overview`, `scenario`, `about`, `services`, `pricing`, `models`, `architecture`, `faq`, `engagement`, `privacy`.

## Sửa nội dung thường gặp
Mọi cấu hình nằm ở đầu `assets/js/app.js`:
- **`CONTACT`**: hotline, email, Zalo, Telegram, Messenger. Giá trị dạng `"[...]"` được coi là chưa có, và nút kênh đó sẽ tự ẩn.
- **`FORM_ENDPOINT`**: để form gửi thẳng về email, tạo form miễn phí tại <https://formspree.io>, rồi dán link dạng `https://formspree.io/f/xxxx` vào đây. Nút **Gửi ngay** sẽ tự xuất hiện.
- **`PRICING`, `SERVICES`, `FAQS`…**: nội dung từng màn. Khi sửa `FAQS`, nhớ sửa luôn khối JSON-LD `FAQPage` trong `index.html`.
- **`ANALYTICS`**: mã GA4. GA chỉ được tải sau khi khách bấm **Đồng ý** trên thông báo cookie.

**Sau khi sửa bất kỳ file nào trong `assets/`**, chạy `node tools/stamp-assets.js`. Script này cập nhật mã `?v=` trong `index.html` để điện thoại và trình duyệt tải bản mới thay vì bản cũ trong cache. CI sẽ báo lỗi nếu quên bước này.

## Chạy thử & kiểm thử
```bash
python3 -m http.server 8000      # mở http://localhost:8000
npm install --no-save playwright && npx playwright install chromium
npm test                          # smoke test: điều hướng, deep link, cookie, a11y, lỗi JS
```
CI (GitHub Actions) chạy cùng bộ test này cho mỗi pull request và mỗi lần push lên `main`.

## Quy trình đóng góp
1. Tạo nhánh từ `main` (ví dụ `feat/bang-gia-moi`), đừng commit thẳng vào `main`.
2. Viết commit message nêu rõ thay đổi (ví dụ `Thêm gói Vận hành theo tháng vào bảng giá`), không ghi chung chung kiểu "Update".
3. Mở pull request, đợi CI xanh rồi mới merge.
4. Đổi nội dung đáng kể thì cập nhật `<lastmod>` trong `sitemap.xml`.

## Dùng domain riêng (khuyến nghị)
1. Mua domain (ví dụ `s4c.vn`), rồi tạo bản ghi DNS `CNAME www → s4c-team.github.io` (và bản ghi A cho domain gốc theo [hướng dẫn GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
2. Vào repo **Settings → Pages → Custom domain**, nhập domain, rồi bật **Enforce HTTPS**.
3. Thay `https://s4c-team.github.io` bằng domain mới trong `index.html` (canonical, og:*, JSON-LD), `robots.txt` và `sitemap.xml`.
4. Tạo email theo domain (Google Workspace, Zoho Mail…), rồi cập nhật `CONTACT.email`.

## Khi site ngừng chạy
- **Repo phải để Public.** Với tài khoản GitHub miễn phí, chuyển repo sang Private thì GitHub gỡ site xuống ngay. Chuyển lại Public thì site **không tự chạy lại**.
- **Cách cho site chạy lại:**
  1. Vào **Settings → Pages**, kiểm tra Source là **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`.
  2. Đẩy một commit bất kỳ lên `main`, **hoặc** vào tab **Actions → pages build and deployment**, chọn lượt gần nhất rồi bấm **Re-run all jobs**.
  3. Đợi 1–2 phút.
- **Kiểm tra:** tab **Actions** phải có lượt **pages build and deployment** mới, báo xanh.
- **Vẫn thấy giao diện cũ:** nhấn Ctrl+F5, hoặc mở bằng tab ẩn danh.

## Liên hệ
Mr. Thịnh · Hotline 076 901 0092 · thinhdv90@gmail.com

---
*Các tình huống trên portal lấy từ ví dụ thực tế; tên khách hàng và số liệu đã được điều chỉnh để bảo mật thông tin.*
