# NunQ

Hai Selamat datang!<br>
Proyek **NunQ** adalah proyek web yang dibangun untuk mengimplementasikan library [quran-pack](https://www.npmjs.com/package/quran-pack) yaitu sebuah library quran serta menyediakan _tools_ lain yang menunjang kegiatan sehari-hari sebagai seorang muslim/muslimah.<br>

**URL** : [quran.syaikhu.com](https://quran.syaikhu.com) <br>
**API Docs** : [quran.syaikhu.com/docs](https://quran.syaikhu.com/docs)

## Deskripsi

Proyek aplikasi web ini menyediakan akses mudah dan nyaman ke Al-Qur'an serta berbagai alat Islami lainnya untuk mendukung kegiatan ibadah dan pengetahuan agama Islam. Fitur-fitur dalam aplikasi ini dirancang untuk membantu umat Muslim dalam membaca, memahami, dan mengamalkan ajaran Islam dalam kehidupan sehari-hari.

## Tangkapan Layar

## Fitur

- **Mushaf Al-Qur'an** : Baca Al-Qur'an dengan teks Arab dan latin disertai terjemah. (<span style="color: green;"> ✔️ OK </span>)
- **Pencarian Surah** : Cari surah Al-Qur'an berdasarkan nama surah atau kata kunci tertentu. (<span style="color: green;"> ✔️ OK </span>)
- **Surah Terkini/Favorit** : Mengelompokan hasil pencarian surah berdasarkan pencarian terkini atau favorit. (<span style="color: green;"> ✔️ OK </span>)
- **Pencarian Ayat** : Cari ayat Al-Qur'an berdasarkan nomor ayat. (<span style="color: green;"> ✔️ OK </span>)
- **Tafsir Al-Qur'an** : Penjelasan ayat-ayat Al-Qur'an dari berbagai sumber tafsir terpercaya. (<span style="color: orange;"> 🚧 Comming Soon </span>)
- **Doa Harian** : Kumpulan doa sehari-hari yang bisa dibaca dan dihafal. (<span style="color: red;"> 📅 Planned </span>)
- **Yasin & Tahlil** : Bacaan Yasin dan Tahlil. (<span style="color: red;"> 📅 Planned </span>)
- **Maulid** : Bacaan sholawat dari kitab maulid pilihan. (<span style="color: red;"> 📅 Planned </span>)
- **Lain-lain** : Fitur lainya. (<span style="color: red;"> 📅 Planned </span>)

## Persyaratan Sistem

Pastikan memiliki perangkat lunak berikut (jika ingin memulai secara lokal):

- **Node.js** versi 18.0.0 atau lebih baru.
- **npm** atau **yarn**.
- Browser yang didukung (Chrome, Firefox, dll.).

## Instalasi

Langkah-langkah untuk menginstal dan menjalankan proyek ini secara lokal:

1. Clone repositori ini:
   ```bash
   git clone https://github.com/Sekhudin/NunQ.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd NunQ
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
4. build aplikasi:
   ```bash
   npm run build
   ```
5. jalankan aplikasi:
   ```bash
   npm run start
   ```

## Konfigurasi Lingkungan

Proyek ini menggunakan file `.env` untuk menyimpan konfigurasi lingkungan. Anda perlu membuat file `.env` di direktori root proyek ini dan menambahkan variabel-variabel berikut:<br>

```bash
# contoh: "GET, PUT, POST, DELETE"
ALLOWED_METHODS=

# contoh: "http://localhost:3000/"
ALLOWED_ORIGIN=

# contoh: "Content-Type, Authorization"
ALLOWED_HEADERS=

# contoh: ""
EXPOSED_HEADERS=

# integer
MAX_AGE="86400"

# true atau false
CREDENTIALS=


NEXT_PUBLIC_APP_NAME=NunQ
NEXT_PUBLIC_AUTHOR_EMAIL="sekhudinpbg3@gmail.com"
NEXT_PUBLIC_AUTHOR_WEB_PROFILE="https://syaikhu.com"
```
