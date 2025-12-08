import { GoogleGenerativeAI } from "@google/generative-ai";
import type { DateFormData, DateRecommendation } from "../utils/types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const generateDateIdeas = async (criteria: DateFormData): Promise<DateRecommendation[]> => {
  const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

  let budgetInstruction = "";
  if (criteria.budgetTier === 'Save 💸') {
    budgetInstruction = "Cari tempat yang ramah kantong, affordable, murah meriah tapi bagus, atau gratis. Hindari tempat overpriced.";
  } else if (criteria.budgetTier === 'Normal ⚖️') {
    budgetInstruction = "Cari tempat dengan harga standar/menengah (Mid-range). Tidak terlalu murah, tapi jangan Fine Dining mahal.";
  } else {
    budgetInstruction = "Cari tempat yang agak pricey, upscale, luxury, dining experience, atau worth to splurge.";
  }

  const hiddenGemInstruction = criteria.isHiddenGem
    ? "WAJIB cari 'Hidden Gems': Tempat yang belum banyak orang tahu, masuk gang/tersembunyi, tapi kualitas bintang 5."
    : "Cari tempat yang populer, established, dan terjamin kualitasnya.";

  let categoryContext = criteria.category;
  if (criteria.category === "Makan Cantik") categoryContext = "Dining/Cafe/Bistro yang aesthetic, interior bagus. DILARANG warung tenda/kaki lima.";
  if (criteria.category === "Alam & Terbuka") categoryContext = "Nature spots, city parks, beaches, or semi-outdoor venues with fresh air.";
  if (criteria.category === "Ngopi Santai") categoryContext = "Coffee shops yang tenang, cozy, cocok buat ngobrol lama (deep talk).";
  if (criteria.category === "Night Life") categoryContext = "Bar, Lounge, Rooftop dengan city lights, atau tempat live music.";

  const prompt = `
    Bertindaklah sebagai editor majalah lifestyle "TUJU." yang sangat selektif dan up-to-date.
    Berikan 5 sampai 10 rekomendasi tempat kencan di: "${criteria.location}".
    
    PROFILE DATE:
    - Partner: ${criteria.partner}
    - Kategori: ${categoryContext}
    - Mood: ${criteria.mood}
    - Budget: ${budgetInstruction}
    - Tipe: ${hiddenGemInstruction}
    - Viral: ${criteria.isViral ? "Prioritaskan yang trending TikTok/IG" : "Fokus kualitas, abaikan tren"}
    ${criteria.extraNote ? `- REQUEST KHUSUS USER (WAJIB DIPENUHI): ${criteria.extraNote}` : ""}

    QUALITY CONTROL (SYARAT MUTLAK):
    1. Rating Google Maps HARUS >= 4.0 Bintang.
    2. Jumlah ulasan HARUS > 50.
    3. CEK STATUS BUKA/TUTUP: DILARANG KERAS merekomendasikan tempat yang sudah "Permanently Closed". Pastikan tempat masih beroperasi.
    4. DILARANG KERAS: McDonald's, KFC, Burger King, Starbucks, Mixue, Solaria, Mie Gacoan.

    OUTPUT FORMAT (JSON Only):
    [
      {
        "namaTempat": "Nama Title Case",
        "lokasiSingkat": "Daerah/Jalan Utama",
        "alasanAI": "Review singkat kenapa ini cocok dengan request user",
        "estimasiHarga": "Range harga (Rp)",
        "tags": ["Tag1", "Tag2"],
        "googleQuery": "Nama Tempat + Kota"
      }
    ]
  `;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, "").trim();
    const data = JSON.parse(text) as DateRecommendation[];
    return data.map((item, idx) => ({ ...item, id: `${Date.now()}-${idx}` }));
  } catch (error) {
    throw new Error("AI sedang menyusun rencana terbaik. Coba lagi.");
  }
};