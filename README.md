# ⚙️ Sentify - Node.js API Gateway

Backend API berbasis Node.js yang berfungsi sebagai gateway antara frontend dan layanan Machine Learning (Python FastAPI).

---

## 🚀 Fungsi Utama

- Menerima request dari frontend
- Meneruskan request ke Python ML API
- Mengembalikan hasil prediksi ke frontend
- Menangani upload file CSV
- Menangani error dari service ML

---

## 🧠 Arsitektur

Frontend → Node.js API → Python FastAPI (ML)

Node.js tidak melakukan pemrosesan Machine Learning, hanya sebagai perantara (API Gateway).

---

## 🛠️ Teknologi

- Node.js
- Express.js
- Multer (upload file CSV)
- node-fetch / axios
- CORS

---

## 📦 Endpoint Utama

### POST /analyze-text
Mengirim multiple text untuk dianalisis

### POST /analyze-csv
Upload file CSV untuk analisis batch

---

## 🔗 Integrasi

- Frontend: https://github.com/CYkir/web-app-Sentify
- Python ML API: https://github.com/CYkir/pyhton-ml-api

---

## ⚠️ Catatan

- API ini membutuhkan Python ML API agar dapat berjalan dengan baik
- Pastikan URL Python API sudah dikonfigurasi dengan benar

---

## 👨‍💻 Developer

Muzakir
