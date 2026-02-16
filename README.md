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

Berikut contoh tampilan aplikasi saat menampilkan profil user acak:

| Hasil Generate User 1 | Hasil Generate User 2 |
|--------------------------------------------|----------------------------------------------|
| <img src="screenshots/screenshot-1.webp" alt="Tampilan Utama" width="320" /> | <img src="screenshots/screenshot-2.webp" alt="Hasil Generate User" width="320" /> |

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
