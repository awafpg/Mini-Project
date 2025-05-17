# 🧩 React User Management App

Aplikasi ini adalah aplikasi manajemen user berbasis **React** dengan fitur login, register, protected routes, dan pengambilan data user dari API eksternal.

---

## ✅ Fitur Utama

Fitur-fitur berikut **sesuai dengan requirement utama proyek**:

- 🔐 **Register User**  
  Form untuk registrasi user baru (penyimpanan lokal atau melalui API jika tersedia)

- 🔑 **Login User**  
  Autentikasi sederhana menggunakan token dan `localStorage`

- 📋 **Menampilkan Daftar User dari API**  
  Mengambil data dari API publik `https://reqres.in/api/users`

- 🔍 **Melihat Detail Tiap User**  
  Setiap user bisa diklik untuk melihat halaman detailnya

- 📄 **Implementasi Pagination di Halaman Home**  
  Navigasi antar halaman user (dari API yang mendukung pagination)

- 🛡️ **Protected Routes untuk Halaman Tertentu**  
  Hanya user yang login yang bisa mengakses halaman user list dan detail

---

## ➕ Fitur Tambahan

---

## 📦 Teknologi dan Library

| Library             | Versi   | Fungsi                                  |
| ------------------- | ------- | --------------------------------------- |
| `react`             | ^19.1.0 | Library utama antarmuka pengguna        |
| `react-dom`         | ^19.1.0 | Rendering React ke DOM                  |
| `react-router-dom`  | ^7.6.0  | Routing dan navigasi antar halaman      |
| `axios`             | ^1.9.0  | HTTP client untuk komunikasi dengan API |
| `tailwindcss`       | ^4.1.7  | Styling responsif berbasis utility      |
| `@tailwindcss/vite` | ^4.1.7  | Integrasi Tailwind dengan Vite          |

---
