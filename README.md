# S4C Portal

**Systems · Smart Solutions · Security** — chỗ dựa kỹ thuật cho doanh nghiệp nhỏ, siêu nhỏ và startup.

Portal giới thiệu dịch vụ tương tác (một trang HTML tự chứa): vận hành & tối ưu hệ thống, hardening & an toàn thông tin, tự động hóa việc lặp lại, và điều tra – ứng cứu sự cố. Có demo live theo từng tình huống thực tế, mỗi tình huống kết thúc bằng một kết quả bàn giao cụ thể.

## Nội dung bộ file
- `index.html` — trang web chính (đã gồm head, SEO, Open Graph, favicon).
- `og-cover.png` — ảnh xem trước khi chia sẻ link (1200×630).
- `robots.txt`, `sitemap.xml` — cho công cụ tìm kiếm.
- `404.html` — trang báo không tìm thấy.
- `HUONG-DAN-DEPLOY.txt` — hướng dẫn đưa lên domain từng bước.

## Chạy thử
Mở trực tiếp `index.html` bằng trình duyệt — không cần cài gì (chỉ tải font từ Google Fonts).

## Đưa lên domain (tóm tắt)
1. Thay `https://your-domain.example` bằng domain thật trong `index.html`, `robots.txt`, `sitemap.xml`.
2. Điền link liên hệ (Telegram/Zalo/Messenger) vào khối `const CONTACT` trong `index.html` khi đã có.
3. Kéo-thả toàn bộ file lên Cloudflare Pages hoặc Netlify (miễn phí, tự có HTTPS).

Chi tiết xem `HUONG-DAN-DEPLOY.txt`.

## Liên hệ
Mr. Thịnh · Hotline 076 9010092 · thinhdv90@gmail.com

---
*Các tình huống, tên khách hàng và số liệu trên portal là ví dụ minh họa cho cách làm việc.*
