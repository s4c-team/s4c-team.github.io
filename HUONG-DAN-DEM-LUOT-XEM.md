# Hướng dẫn bật ĐẾM LƯỢT XEM theo từng màn — S4C Hub

Site này là trang đơn: đổi "màn" bằng JavaScript, mỗi màn có URL riêng dạng `#pricing`.
Bộ đếm đã được gắn sẵn: mỗi lần đổi màn sẽ gửi 1 "lượt xem trang" riêng cho
công cụ phân tích. Mã GA4 hiện tại: `G-7DY198HSSM` (đang bật).

> **Cookie:** GA chỉ được tải sau khi khách bấm **Đồng ý** trên thông báo cookie
> (theo Nghị định 13/2023/NĐ-CP). Khách bấm **Từ chối** thì không bị đếm, vì vậy số liệu GA
> sẽ thấp hơn lượng truy cập thật. Khách đổi lựa chọn bằng nút "Cài đặt cookie" ở cuối trang.

Khuyến nghị dùng **Google Analytics 4 (GA4)** — miễn phí, không cần tự host.

------------------------------------------------------------
## A. Lấy mã Google Analytics 4 (miễn phí, ~3 phút)
1. Vào https://analytics.google.com và đăng nhập Google.
2. Bấm bánh răng **Admin** (góc dưới trái) → **Create** → **Account**.
   - Account name: `S4C` → Next.
3. **Create property**: name `S4C Hub`, Time zone `Vietnam`, Currency `VND` → Next
   → chọn ngành/quy mô bất kỳ → **Create**.
4. Chọn nền tảng **Web**:
   - Website URL: `https://s4c-team.github.io`
   - Stream name: `S4C Hub` → **Create stream**.
5. Màn hình hiện **Measurement ID** dạng `G-XXXXXXXXXX` → **copy** mã này.

------------------------------------------------------------
## B. Dán mã vào site (sửa đúng 1 dòng)
1. Mở file `assets/js/app.js` bằng trình soạn thảo bất kỳ.
2. Tìm đoạn (dùng Ctrl+F gõ `const ANALYTICS`):

        const ANALYTICS = {
          ga4: "",
          plausibleDomain: "",
          umami: { src: "", id: "" }
        };

3. Dán mã GA4 vào giữa hai dấu ngoặc kép của dòng `ga4`:

        ga4: "G-XXXXXXXXXX",

   (Chỉ cần dòng `ga4`. Hai dòng `plausibleDomain` và `umami` để trống.)
4. **Lưu** file.

> Không điền mã nào thì bộ đếm vẫn TẮT và không gọi ra ngoài — an toàn.

------------------------------------------------------------
## C. Đẩy lên GitHub Pages (s4c-team.github.io)
Đưa đủ các file này vào thư mục gốc của repo Pages:
- `index.html`, thư mục `assets/` (CSS, JS, ảnh)
- `404.html`, `robots.txt`, `sitemap.xml`
- `og-cover.png` (ảnh preview khi chia sẻ link)

Commit & push lên nhánh đang phục vụ Pages (thường là `main`). Vài phút sau
`https://s4c-team.github.io` sẽ cập nhật.

------------------------------------------------------------
## D. Xem màn nào nhiều lượt
Trong Google Analytics:
- **Reports → Engagement → Pages and screens**.
- Cột **Page path and screen class** hiển thị từng màn, kèm **Views** và **Users**:

        /overview        Tổng quan
        /scenario        Kịch bản thực tế
        /about           Về S4C
        /services        Nhóm dịch vụ
        /pricing         Bảng giá tham khảo
        /models          Cách hợp tác
        /architecture    Giải pháp & công nghệ
        /faq             Câu hỏi thường gặp
        /engagement      Liên hệ & khảo sát
        /privacy         Chính sách quyền riêng tư

- Muốn thấy ngay khi test: **Reports → Realtime**, rồi tự mở site và bấm qua các màn.

------------------------------------------------------------
## Lưu ý
- Số liệu chỉ bắt đầu chạy sau khi site đã lên domain thật và có người truy cập.
  Mở file trực tiếp trên máy (file://) sẽ KHÔNG được tính.
- Thông báo cookie và trang Chính sách quyền riêng tư (`#privacy`) đã có sẵn.
- Không muốn dùng Google thì thay bằng:
  - **Plausible**: điền `plausibleDomain: "s4c-team.github.io"` (cần tài khoản Plausible).
  - **Umami** (tự host, hợp hệ open-source của bạn): điền `umami.src` + `umami.id`.
  Code trong assets/js/app.js đã hỗ trợ sẵn cả ba, chỉ cần điền 1 cái.
