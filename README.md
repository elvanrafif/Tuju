# TUJU. — Tentukan Arah Tanpa Pasrah. 🧭

![Project Banner](https://via.placeholder.com/1200x600/213555/F5EFE7?text=TUJU.+|+AI+Date+Planner)

> **"Ubah wacana jadi kenangan."**

**TUJU.** adalah aplikasi perencana kencan cerdas (*AI-Powered Date Planner*) yang dibangun untuk menyelesaikan dilema klasik: *"Bingung mau ke mana?"*.

Berbeda dengan pencarian Google biasa, TUJU. menggunakan **Google Gemini AI** yang diprogram dengan *persona* editor majalah lifestyle untuk mengkurasi tempat secara personal, spesifik, dan berkualitas.

---

## ✨ Fitur Unggulan

### 🧠 1. Intelligent Curation (Gemini 2.0 Flash)
Aplikasi ini memiliki standar kurasi yang ketat:
* **2-Tier Budgeting:** Filter budget yang disederhanakan menjadi **Save 💸** (Hemat & Worth it) dan **Splurge 💎** (Mewah & Exclusive).
* **Hidden Gem Mode:** Opsi khusus untuk mencari tempat yang jarang diketahui orang tapi berkualitas (*underrated*).
* **Quality Control:** AI otomatis memblokir tempat dengan rating Google Maps < 4.0, ulasan < 50, atau status "Permanently Closed".

### 🎨 2. Classy & Minimalist UI
* **Visual Identity:** Palet warna **Navy Blue** & **Beige** dengan tipografi **Libre Baskerville** untuk kesan eksklusif (*Old Money aesthetic*).
* **Smooth UX:** Animasi perpindahan halaman yang halus (*fade effects*) dan penanganan *loading state* menggunakan Skeleton UI.
* **Partner-Centric:** Button Action (WhatsApp) menyesuaikan konteks partner (Pasangan/Gebetan/Teman).

### 📲 3. Actionable Results
* **Social Proof:** Tombol pintas ke **TikTok Search** (icon brand asli) untuk melihat review video viral.
* **Smart Sharing:** Tombol **WhatsApp** yang otomatis menyusun pesan ajakan rapi lengkap dengan link Maps yang valid.
* **Universal Maps:** Integrasi Deep Link Google Maps yang bekerja akurat di Android & iOS.

---

## 🛠️ Tech Stack

Project ini dibangun dengan standar industri (*Production-Ready Code*) yang mengutamakan performa dan keterbacaan.

| Area | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Core** | React 18 + Vite | Rendering cepat & optimalisasi build. |
| **Language** | TypeScript | Strict typing untuk meminimalisir bug (`DateFormData` interface). |
| **Styling** | Tailwind CSS v3 | Utility-first styling dengan konfigurasi tema custom. |
| **Animation** | Framer Motion | Animasi deklaratif untuk transisi UI yang fluid. |
| **Icons** | React Icons & Lucide | Menggunakan aset SVG ringan. |
| **AI** | Google Generative AI SDK | Koneksi langsung ke LLM Gemini untuk pemrosesan logic. |

---

## 📂 Struktur Project

Struktur folder disusun berdasarkan fitur (*Feature-based*) agar mudah diskalakan.

```text
src/
├── components/
│   ├── steps/           # Logic & UI per langkah (Wizard)
│   │   ├── StepLocation.tsx   # Input Lokasi & Partner
│   │   ├── StepVibe.tsx       # Kategori Single Select & Hidden Gem
│   │   ├── StepLogistics.tsx  # Budget 2 Tier (Save/Splurge)
│   │   └── StepResult.tsx     # Kartu Hasil & Dynamic WA Button
│   ├── ui/              # Komponen kecil (Toast, Button)
│   └── MultiStepForm.tsx # Orchestrator (State Management Pusat)
├── services/
│   └── ai.ts            # Prompt Engineering & Strict Rules
├── utils/
│   └── types.ts         # TypeScript Interfaces
└── App.tsx              # Layout Utama & Theme Provider
```

---

## 🚀 Cara Menjalankan (Local Development)

**1. Clone Repository**
```bash
git clone [https://github.com/username-anda/tuju-date-planner.git](https://github.com/username-anda/tuju-date-planner.git)
cd tuju-date-planner
```

**2. Install Dependencies**
```bash
npm install
```

**3. Setup API Key**
Buat file `.env` di root folder:
```text
VITE_GEMINI_API_KEY=Paste_Key_Google_AI_Studio_Disini
```

**4. Jalankan Server**
```bash
npm run dev
```
Akses di browser: `http://localhost:5173`

---

## 🤝 Kontribusi

Pull Request sangat terbuka! Silakan buka Issue terlebih dahulu untuk mendiskusikan perubahan besar.

<p align="center">
  Dibuat dengan 💖 oleh Elvan Rafif
</p>