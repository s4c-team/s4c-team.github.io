// Gắn ?v=<hash nội dung> vào link CSS/JS/ảnh trong index.html để trình duyệt không dùng bản cũ sau mỗi lần deploy.
// Chạy sau khi sửa file trong assets/: node tools/stamp-assets.js
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const file = path.join(ROOT, "index.html");
const hash = p => crypto.createHash("sha1").update(fs.readFileSync(path.join(ROOT, p))).digest("hex").slice(0, 8);

const html = fs.readFileSync(file, "utf8").replace(/((?:src|href)=")(assets\/[^"?]+)(\?v=[0-9a-f]+)?"/g, (m, pre, p) => `${pre}${p}?v=${hash(p)}"`);
fs.writeFileSync(file, html);
module.exports = { hash };
