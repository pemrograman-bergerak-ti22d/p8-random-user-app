# p8 - Random User Generator App

Aplikasi tugas **Pemrograman Bergerak (Pertemuan 8)**\
Menampilkan profil pengguna acak menggunakan **Random User API** dengan
Ionic Standalone + Angular.

**API:** https://randomuser.me/api/
**Dosen:** Rosidin, S. Kom., M. Kom.

------------------------------------------------------------------------

## 🚀 Fitur Utama

-   Generate profil user acak dengan satu tombol
-   Menampilkan foto, nama, email, nomor HP, lokasi, dll.
-   Menggunakan **HttpClient** + **async/await** (Promise)
-   Desain responsif (mobile-first)

------------------------------------------------------------------------

## 🛠 Teknologi yang Digunakan

-   Ionic 7 (Standalone Components)
-   Angular 17+
-   TypeScript
-   `@angular/common/http`
-   RxJS (`lastValueFrom` untuk convert Observable → Promise)

------------------------------------------------------------------------

## ⚙️ Cara Menjalankan

1.  Clone repository:

``` bash
git clone https://github.com/pemrograman-bergerak-ti22d/p8-random-user-app.git
cd p8-random-user-app
```

2.  Install dependencies:

``` bash
npm install
```

3.  Jalankan aplikasi:

``` bash
ionic serve
# atau
npm start
```

> Pastikan perangkat / emulator terhubung ke internet.

------------------------------------------------------------------------

## 🧠 Konsep Penting

### Service (Observable → Promise)

``` typescript
import { lastValueFrom } from 'rxjs';

async getRandomUser(): Promise<any> {
  const observable = this.http.get<any>(this.apiUrl);
  return await lastValueFrom(observable);
}
```

### Component (Async/Await)

``` typescript
async loadRandomUser() {
  try {
    const response = await this.userService.getRandomUser();
    this.user = response.results[0];
  } catch (error) {
    console.error('Gagal memuat data user', error);
  }
}
```

------------------------------------------------------------------------

## 📱 Tampilan Aplikasi

Berikut beberapa contoh tampilan hasil generate user acak dari Random User API:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 20px 0;">
  <img src="screenshots/screenshot-1.webp"  alt="Hasil generate user 1"  width="100%" loading="lazy">
  <img src="screenshots/screenshot-2.webp"  alt="Hasil generate user 2"  width="100%" loading="lazy">
</div>

------------------------------------------------------------------------

## 📂 Struktur Folder Penting

    rep8-random-user-app/
    ├── src/
    │   ├── app/
    │   │   ├── services/user.service.ts
    │   │   ├── home/
    │   │   └── components/
    │   └── assets/
    ├── screenshots/
    │   ├── screenshot-1.webp
    │   └── screenshot-2.webp
    ├── angular.json
    ├── ionic.config.json
    └── package.json

------------------------------------------------------------------------

## 📄 Lisensi

Proyek ini dibuat untuk keperluan akademik dan pembelajaran saja.\
Bebas digunakan sebagai referensi dengan mencantumkan sumber.
