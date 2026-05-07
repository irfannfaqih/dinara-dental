# PRD — Landing Page Dinara Dental Care

**Versi:** 1.2  
**Tanggal:** April 2025  
**Status:** Final Draft  
**Platform:** Web — Mobile-first, Responsive  
**Tech Stack:** Next.js 14 + Tailwind CSS  
**Development:** Vibe coding (AI-assisted)  
**Kontak:** 0858-2839-9611 (WA) | @dinaradental | Google Business: Dinara Dental Care

---

## 1. Tujuan

Dinara Dental Care adalah klinik gigi baru di Banjarmasin untuk semua usia (keluarga). Landing page ini berfungsi sebagai:

- Media **awareness dan kepercayaan** calon pasien baru
- Informasi **layanan dan harga** yang transparan
- Promosi **Grand Opening** dengan penawaran eksklusif
- Konversi melalui **booking via WhatsApp**
- Tampil profesional di **Google Search dan media sosial**

---

## 2. Target Pengguna

- Semua usia — keluarga muda, dewasa, lansia di Banjarmasin
- Mayoritas akses via **smartphone** (mobile-first wajib)
- Calon pasien dari Instagram atau Google Search
- Calon pasien yang tertarik promo Grand Opening

---

## 3. Identitas Visual & Brand

| Elemen | Spesifikasi |
|---|---|
| Font | Montserrat (Google Fonts) — semua teks |
| Warna Utama | `#3D2B1F` — Coklat tua |
| Warna Aksen | `#C8A96E` — Emas/krem |
| Warna Background Alt | `#F5EFE6` — Krem muda |
| Warna Teks Terang | `#FFFFFF` — di atas background coklat |
| Warna Teks Gelap | `#2C2C2C` — di atas background terang |
| Logo | Ikon gigi putih + teks "Dinara Dental Care" |
| Handle | @dinaradental |

---

## 4. Design Direction

Terinspirasi dari desain seperti evakine.fr — **premium, bersih, immersive** — dengan penyesuaian brand Dinara:

### Prinsip Visual Utama

- **Full-bleed hero** — foto/ilustrasi dental berkualitas tinggi sebagai background hero, dengan overlay coklat gelap (`#3D2B1F` 70% opacity) agar teks tetap terbaca
- **Tipografi besar centered** — headline utama besar, centered, bold, warna putih dengan aksen emas pada kata kunci
- **Glassmorphism cards** — digunakan khusus untuk komponen yang tampil di atas foto/background gelap: testimoni di hero, badge-badge info, pill navigasi
  - Formula glass: `background: rgba(255,255,255,0.08)`, `backdrop-filter: blur(12px)`, `border: 0.5px solid rgba(255,255,255,0.18)`
  - Di section terang (background krem/putih): gunakan card solid biasa, bukan glass
- **Section selang-seling** — coklat gelap dan krem muda bergantian agar halaman terasa bernapas
- **Animasi halus** — Framer Motion untuk entrance animation (fade-up) saat section masuk viewport; tidak berlebihan

### Penerapan Glass per Komponen

| Komponen | Style |
|---|---|
| Testimoni di hero | Glassmorphism — tampil overlay di atas foto hero |
| Navbar pills (mobile) | Semi-glass: `rgba(255,255,255,0.1)` |
| Announcement bar | Solid `#C8A96E` — bukan glass |
| Badge "Grand Opening" di hero | Semi-glass dengan border emas |
| Countdown timer | Kotak solid coklat gelap dengan border emas |
| Kartu layanan | Solid putih dengan shadow halus — section terang |
| Kartu dokter | Solid `#F5EFE6` — section terang |
| FAQ accordion | Solid putih — section terang |
| CTA final | Solid `#3D2B1F` — bukan glass |

### Tipografi Hierarchy

| Elemen | Ukuran | Weight | Warna |
|---|---|---|---|
| Hero headline | 48–56px (desktop) / 32px (mobile) | 700 | `#FFFFFF` |
| Kata kunci hero | sama | 700 | `#C8A96E` |
| Section heading | 32–36px / 24px | 700 | `#3D2B1F` atau `#FFFFFF` |
| Sub-heading | 18–20px | 600 | sesuai konteks |
| Body text | 15–16px | 400 | `#2C2C2C` atau `rgba(255,255,255,0.7)` |
| Label/caption | 12–13px | 500 | muted |

---

## 5. Tech Stack & Arsitektur

### Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Font | `next/font` — Montserrat |
| Gambar | `next/image` (WebP otomatis, lazy load) |
| Animasi | Framer Motion (entrance, scroll-triggered) |
| Accordion | `@radix-ui/react-accordion` |
| Before/After | `react-compare-slider` |
| Deployment | Vercel (gratis) |
| Domain | dinaradentalcare.com / dinaradental.id — *konfirmasi* |

### Struktur Folder

```
/app
  page.tsx
  layout.tsx           ← metadata SEO + font
/components
  AnnouncementBar.tsx
  Navbar.tsx
  Hero.tsx             ← full-bleed + glassmorphism testimoni
  WhyChooseUs.tsx
  Services.tsx
  PromoSection.tsx     ← countdown timer
  Pricelist.tsx        ← accordion
  Doctors.tsx
  Testimonials.tsx     ← full section testimoni
  BeforeAfterGallery.tsx
  InstagramFeed.tsx
  FAQ.tsx
  LocationSection.tsx
  CTAFinal.tsx
  Footer.tsx
  FloatingWA.tsx
  StickyBottomBar.tsx
/public/images/
```

### Dependencies

```bash
npm install next@14 react react-dom
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion
npm install @radix-ui/react-accordion
npm install lucide-react
npm install react-compare-slider
```

### SEO Metadata

```typescript
export const metadata = {
  title: "Dinara Dental Care — Klinik Gigi Terpercaya di Banjarmasin",
  description: "Klinik gigi modern Banjarmasin. Behel, scaling, bleaching, konsultasi gratis. Hubungi 0858-2839-9611",
  openGraph: {
    title: "Dinara Dental Care",
    description: "Klinik gigi modern di Banjarmasin",
    url: "https://dinaradentalcare.com",
    images: ["/og-image.jpg"],
  },
}
```

---

## 6. Aturan Responsive (Mobile-first Wajib)

| Breakpoint | Lebar |
|---|---|
| Mobile | < 768px — prioritas utama |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |

- Font minimum `16px`
- Touch target minimum `44x44px`
- Navbar: hamburger drawer di mobile
- Grid: selalu `grid-cols-1` di mobile, expand di `md:`
- Padding: minimum `px-4` di mobile
- Tidak ada horizontal scroll
- Hero headline: 32px mobile, 48–56px desktop

---

## 7. Komponen Global

### Announcement Bar
- Posisi: paling atas halaman, di atas navbar
- Teks marquee: `"✨ Grand Opening — Promo Behel mulai Rp 2.499.000! Konsultasi GRATIS! Booking sekarang →"`
- Style: solid `#C8A96E`, teks `#2a1a0e`
- Klik → scroll ke section promo
- Tombol ✕ untuk tutup (simpan ke `localStorage`)

### Floating WhatsApp Button
- `fixed bottom-6 right-6 z-50`
- Ikon WA hijau, lingkaran, pulse animation
- Link: `https://wa.me/6285828399611?text=Halo%20Dinara%20Dental%2C%20saya%20ingin%20booking`
- Selalu tampil — desktop & mobile

### Sticky Bottom Bar (Mobile Only)
- `fixed bottom-0 md:hidden`
- Muncul setelah hero terlewati (IntersectionObserver)
- Dua tombol: **Booking WA** | **Lihat Lokasi**
- Padding safe area iPhone: `env(safe-area-inset-bottom)`

---

## 8. Struktur Halaman (13 Section)

---

### Section 1 — Navbar (Sticky)
- Logo kiri, menu anchor tengah, CTA kanan
- Menu: Layanan | Dokter | Promo | Harga | Lokasi
- CTA: "Booking Sekarang" → WA
- Mobile: hamburger → slide-down drawer
- Style: background `#3D2B1F`, logo putih, sticky dengan shadow saat scroll

---

### Section 2 — Hero (Full-bleed + Glassmorphism)

**Layout:**
- Background: foto dental/keluarga berkualitas tinggi + overlay `rgba(61,43,31,0.72)`
- Teks centered, vertikal tengah
- Testimoni glass cards floating di bagian bawah foto (seperti referensi evakine.fr)

**Konten:**
- Badge semi-glass: `"✨ Grand Opening — Banjarmasin"`
- Headline: `"Senyum Sehat untuk"` + `"Seluruh Keluarga"` (kata kunci warna `#C8A96E`)
- Sub-headline: `"Klinik gigi modern di Banjarmasin dengan 3 dokter gigi profesional. Konsultasi gratis untuk pasien baru!"`
- CTA Primer: tombol solid `#C8A96E` → "Booking Sekarang" → WA
- CTA Sekunder: tombol semi-glass → "Lihat Layanan" → anchor scroll

**Testimoni Glass Cards (overlay di bagian bawah hero):**
- 3–4 kartu glassmorphism floating di atas foto
- Di mobile: horizontal scroll `overflow-x-auto snap-x`
- Kartu paling kiri dan kanan ditampilkan terpotong (efek "ada lebih banyak")
- Konten per kartu: avatar inisial + nama + bintang + kutipan singkat

**Implementasi glass card:**
```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 0.5px solid rgba(255, 255, 255, 0.18);
border-radius: 12px;
```

---

### Section 3 — Keunggulan Klinik
- Background: `#F5EFE6`
- Grid `grid-cols-2 md:grid-cols-4`
- Kartu solid putih, ikon emas, judul bold coklat

1. Dokter Berpengalaman — 3 Dokter Gigi Umum profesional
2. Konsultasi Gratis — Tanya sepuasnya tanpa biaya
3. Harga Transparan — Pricelist terbuka, tidak ada biaya tersembunyi
4. Klinik Modern & Nyaman — Peralatan terkini, ramah keluarga

---

### Section 4 — Layanan Kami
- Background: `#FFFFFF`
- Grid `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`
- Kartu: border tipis, ikon emas, hover state ringan

| Layanan | Deskripsi |
|---|---|
| General Dentistry | Tambal, cabut, perawatan saluran akar |
| Orthodonsi (Behel) | Metal, Ceramic, Self Ligating, Sapphire |
| Dental Spa & Scaling | Pembersihan karang gigi profesional |
| Bleaching | Pemutihan gigi aman dan efektif |
| Perawatan Anak | Cabut anak, fissure sealant, vitamin gigi |
| Prostodontia | Gigi tiruan, veneer, mahkota |

---

### Section 5 — Grand Opening Promo ⭐
- Background: `#3D2B1F` (gelap) — kontras kuat
- Teks: putih dan emas

**Countdown Timer:**
- 4 kotak solid (`#2a1a0e`) dengan border `#C8A96E`
- Angka besar warna `#C8A96E`, label putih kecil: HARI / JAM / MENIT / DETIK
- Tanggal akhir: *[konfirmasi owner]*
- Jika expired: tampilkan `"Promo Telah Berakhir"`

**Tabel promo:** (latar gelap, baris selang-seling `rgba(255,255,255,0.05)`)

| Item | Harga Normal | Harga Promo | Hemat |
|---|---|---|---|
| Metal Basic | ~~Rp 4.500.000~~ | **Rp 2.499.000** | Rp 2.001.000 |
| Metal Premium | ~~Rp 6.000.000~~ | **Rp 3.499.000** | Rp 2.501.000 |
| Self Ligating | ~~Rp 9.000.000~~ | **Rp 6.499.000** | Rp 2.501.000 |
| Sapphire | ~~Rp 8.000.000~~ | **Rp 4.999.000** | Rp 3.001.000 |
| Dental Spa | ~~Rp 650.000~~ | **Rp 349.000** | — |
| Scaling Basic | ~~Rp 400.000~~ | **Rp 199.000** | — |
| Bleaching | ~~Rp 1.500.000~~ | **Rp 799.000** | — |
| Cabut Gigi (mulai) | ~~Rp 350.000~~ | **Rp 200.000** | — |
| Cabut Gigi Anak (mulai) | ~~Rp 250.000~~ | **Rp 150.000** | — |
| Tambal Gigi (mulai) | ~~Rp 350.000~~ | **Rp 200.000** | — |
| Bundling Dental Spa + Tambal/Cabut | ~~Rp 1.000.000~~ | **Rp 599.000** | — |

Bonus: ✅ FREE konsultasi + 🎁 FREE gift

CTA: tombol emas solid → "Booking Promo Sekarang"

---

### Section 6 — Pricelist Lengkap
- Background: `#F5EFE6`
- Accordion per kategori (`@radix-ui/react-accordion`)
- Trigger accordion: judul kategori bold + ikon chevron emas
- Catatan footer: *"Harga adalah estimasi. Konsultasi gratis untuk penawaran terbaik."*

| Kategori | Rentang Harga |
|---|---|
| Konsultasi | Rp 50.000 |
| Scaling | Rp 250.000 – Rp 400.000 |
| Bleaching | Rp 1.500.000 |
| Tambal Gigi | Mulai Rp 250.000 |
| Cabut Gigi Dewasa | Rp 250.000 – Rp 350.000 |
| Cabut Gigi Anak | Rp 150.000 – Rp 250.000 |
| Perawatan Saluran Akar | Mulai Rp 100.000/tahap |
| Ortodonsi Metal | Rp 4.000.000 – Rp 6.000.000 |
| Ortodonsi Self Ligating | Rp 8.000.000 – Rp 10.000.000 |
| Veneer Komposit | Rp 600.000/gigi |
| Veneer Porselen | Rp 3.000.000/gigi |
| Gigi Tiruan Sebagian | Mulai Rp 1.800.000 |
| Gigi Tiruan Cekat (PFM) | Rp 2.000.000/gigi |
| Kontrol Behel | Rp 200.000 – Rp 300.000 |
| Perawatan Anak | Rp 150.000 – Rp 400.000 |

---

### Section 7 — Tim Dokter
- Background: `#FFFFFF`
- Grid `grid-cols-1 sm:grid-cols-3`
- Kartu: foto avatar lingkaran + nama + gelar + spesialisasi
- Placeholder: drg. [Nama 1], drg. [Nama 2], drg. [Nama 3]
- Avatar: inisial nama di atas background `rgba(200,169,110,0.2)` dengan border `#C8A96E`

---

### Section 8 — Testimoni (Full Section)
- Background: `#3D2B1F` — gelap, premium feel
- Ini adalah section testimoni lengkap, terpisah dari glass cards di hero
- Layout desktop: grid 3 kolom — kartu semi-glass di atas background gelap
- Layout mobile: horizontal scroll snap
- Konten: nama + avatar inisial + bintang + kutipan + tanggal
- CTA: "Lihat Semua Review di Google" → link Google Maps
- *Placeholder dulu; isi dengan review asli setelah Grand Opening*

---

### Section 9 — Before/After Gallery *(Opsional)*
- Aktifkan hanya jika foto tersedia dengan izin tertulis pasien
- Komponen: `react-compare-slider` — drag untuk compare
- Kategori: Behel, Bleaching, Scaling
- Wajib: teks *"Foto ditampilkan atas izin pasien"*
- Jika belum ada: `display: none` sampai foto tersedia

---

### Section 10 — Instagram Feed
- Background: `#F5EFE6`
- 6 post terbaru @dinaradental
- Grid `grid-cols-3` — tap buka Instagram
- Implementasi: SnapWidget atau EmbedSocial
- Fallback: screenshot statis + tombol "Lihat di Instagram"
- Judul: *"Tips Kesehatan Gigi dari Kami"*
- CTA: "Follow @dinaradental"

---

### Section 11 — FAQ
- Background: `#FFFFFF`
- Accordion Radix UI — satu item terbuka per waktu
- Chevron emas, animasi smooth open/close

| Pertanyaan | Jawaban |
|---|---|
| Apakah scaling sakit? | Tidak menyakitkan, hanya sensasi getaran. Dilakukan dengan alat ultrasonik modern. |
| Berapa lama pasang behel? | Pemasangan 1–2 jam. Perawatan total 1–3 tahun tergantung kondisi. |
| Apakah menerima BPJS? | *[konfirmasi owner]* |
| Berapa umur minimal pasang behel? | Umumnya mulai usia 12 tahun setelah gigi permanen lengkap. |
| Apakah bleaching aman? | Ya, aman jika dilakukan dokter gigi dengan bahan teruji klinis. |
| Berapa lama hasil bleaching bertahan? | 6 bulan – 2 tahun tergantung kebiasaan. |
| Apakah ada konsultasi gratis? | Ya! Selama Grand Opening, konsultasi GRATIS tanpa batas. |
| Bagaimana cara booking? | Chat WA 0858-2839-9611 atau klik tombol Booking di halaman ini. |

---

### Section 12 — Lokasi & Jam Operasional
- Background: `#F5EFE6`
- Layout: `flex-col md:flex-row` — info kiri, embed map kanan
- Embed Google Maps — Dinara Dental Care Banjarmasin
- Jam operasional: *[konfirmasi owner]*
- Kontak: WA | Instagram | Google Maps

---

### Section 13 — CTA Final
- Background: `#3D2B1F`, teks putih/emas
- Headline: *"Siap untuk Senyum Lebih Sehat?"*
- Sub-teks: *"Booking sekarang dan dapatkan konsultasi GRATIS. Slot terbatas!"*
- 3 tombol: **WhatsApp** | **Instagram** | **Google Maps**

---

### Footer
- Background: `#1A1208`
- Logo + tagline: *"Kesehatan Gigi Keluarga, Kepercayaan Kami"*
- Ikon sosmed: WA, Instagram, Google Maps
- © 2025 Dinara Dental Care. All rights reserved.

---

## 9. Performa & SEO

| Metrik | Target |
|---|---|
| Load time (4G) | < 3 detik |
| Lighthouse Performance | > 85 |
| Lighthouse SEO | > 90 |
| Gambar | WebP via `next/image` |
| Lazy loading | Otomatis via `next/image` |

**SEO Lokal:**
- Schema `LocalBusiness` JSON-LD
- Google Analytics GA4
- OG image 1200x630px

---

## 10. Aset Dibutuhkan

| Aset | Status | Catatan |
|---|---|---|
| Logo PNG transparan | ✅ Tersedia | Dari materi sosmed |
| Nomor WhatsApp | ✅ Tersedia | 0858-2839-9611 |
| Handle Instagram | ✅ Tersedia | @dinaradental |
| Google Business | ✅ Tersedia | Dinara Dental Care, Banjarmasin |
| Pricelist referensi | ✅ Tersedia | Sesuaikan jika ada perbedaan |
| Foto hero (full-bleed) | ❌ Belum ada | **Kritis** — stock photo dental/keluarga HQ |
| Foto 3 dokter | ❌ Belum ada | Pakai avatar inisial placeholder |
| Foto klinik interior | ❌ Belum ada | Stock photo sementara |
| Foto before/after | ❌ Belum ada | Perlu izin tertulis pasien |
| Nama lengkap 3 dokter | ❌ Belum ada | Diisi owner |
| Jam operasional resmi | ❌ Belum ada | Konfirmasi owner |
| Alamat lengkap klinik | ❌ Belum ada | Konfirmasi sebelum go-live |
| Tanggal akhir promo | ❌ Belum ada | **Kritis** — untuk countdown timer |
| Jawaban BPJS | ❌ Belum ada | Untuk FAQ |
| Domain website | ❌ Belum ada | Konfirmasi owner |

---

## 11. Open Items

1. Nama lengkap + gelar 3 dokter gigi
2. Jam operasional resmi klinik
3. Alamat lengkap klinik di Banjarmasin
4. **Tanggal akhir Grand Opening** ← kritis untuk countdown timer
5. Apakah menerima BPJS?
6. Pricelist final — sesuai referensi atau ada penyesuaian?
7. Foto dokter dan klinik — kapan tersedia?
8. Domain website
9. Izin pasien untuk before/after gallery

---

## 12. Milestone Development

| Fase | Aktivitas | Estimasi |
|---|---|---|
| 1 | Setup Next.js + Tailwind + folder structure | 1 hari |
| 2 | Global: AnnouncementBar, Navbar, FloatingWA, StickyBar | 1–2 hari |
| 3 | Hero (full-bleed + glassmorphism cards) | 2 hari |
| 4 | Keunggulan + Layanan | 1 hari |
| 5 | Promo + Countdown Timer + Pricelist Accordion | 2 hari |
| 6 | Dokter + Testimoni (dark section) + FAQ | 2 hari |
| 7 | Instagram Feed + Before/After + Lokasi | 2 hari |
| 8 | SEO + Schema + GA4 | 1 hari |
| 9 | QA mobile/desktop + responsive fix + optimasi gambar | 2 hari |
| 10 | Deploy Vercel + domain | 1 hari |
| **Total** | | **~2–3 minggu** |

---

*PRD v1.2 — Dinara Dental Care — Banjarmasin — @dinaradental*
