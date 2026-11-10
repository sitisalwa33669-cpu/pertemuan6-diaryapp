# 📖 Aplikasi Buku Harian (Diary App)

Aplikasi Buku Harian berbasis _mobile_ yang dibangun menggunakan **React Native** dan **Expo Router**. Proyek ini merupakan hasil pengerjaan tugas praktikum (Pertemuan 6) yang berfokus pada implementasi React Hooks, Custom Hooks, dan State Management.

## ✨ Fitur Utama

- **Pencarian & Filter Mood (Search & Filter)**
  Mencari entri diary berdasarkan teks (judul/isi) dan menyaring diary berdasarkan _mood_ (emoji) secara bersamaan yang dioptimasi menggunakan `useMemo`.
- **Manajemen State Global (Context API)**
  Status "Like" (Favorit) tersinkronisasi secara otomatis di seluruh aplikasi (halaman Home, Detail, dan Favorites) berkat penggunaan `useContext`.
- **Tab Favorit (Favorites Tab)**
  Menampilkan daftar khusus untuk diary yang disukai. Fitur ini menggunakan custom hook `useLikedEntries` untuk memisahkan logika filter dengan tampilan (UI).
- **Reset Filter**
  Tombol praktis untuk mengembalikan pencarian dan filter _mood_ ke kondisi awal (kosong).
- **Desain UI Konsisten (Design Tokens)**
  Menggunakan file `tokens.ts` untuk menyimpan variabel desain yang _reusable_ seperti `COLORS`, `SPACE`, `RADIUS`, dan `TYPO`.

## 🛠️ Teknologi yang Digunakan

- React Native
- Expo & Expo Router
- TypeScript
- React Hooks (`useState`, `useMemo`, `useContext`, `useCallback`)
- Git & GitHub

## 📂 Struktur Folder Penting

- `app/(tabs)/` - Berisi halaman utama dengan navigasi tab (Home, Tambah, Favorit, Pengaturan).
- `app/src/context/` - Berisi `DiaryContext.tsx` untuk _state management_ global.
- `app/src/hooks/` - Berisi custom hooks seperti `useDiarySearch.ts` dan `useLikedEntries.ts`.
- `app/src/styles/` - Berisi `tokens.ts` untuk standardisasi gaya UI.
- `app/src/component/` - Berisi komponen UI yang dapat digunakan kembali seperti `DiaryCard.tsx`.

## 🚀 Cara Menjalankan Proyek

1. **Install dependensi:**
   ```bash
   npm install
   ```
