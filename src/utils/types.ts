// src/utils/types.ts

export interface DateFormData {
    location: string;
    partner: 'Pasangan' | 'Teman' | 'Keluarga';
    category: string;
    mood: 'Chill' | 'Energetic' | 'Intimate';

    // UBAH: Jadi 3 opsi (Save, Normal, Splurge)
    budgetTier: 'Save 💸' | 'Normal ⚖️' | 'Splurge 💎';

    time: 'Siang' | 'Malam';
    isHiddenGem: boolean;
    isViral: boolean;
    extraNote?: string;
}

export interface DateRecommendation {
    id: string;
    namaTempat: string;
    lokasiSingkat: string;
    alasanAI: string;
    estimasiHarga: string;
    tags: string[];
    googleQuery: string;
}