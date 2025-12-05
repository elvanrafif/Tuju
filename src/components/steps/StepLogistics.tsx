import type { DateFormData } from "../../utils/types";
import { Sparkles, Flame, PenLine } from "lucide-react";

interface Props {
  data: DateFormData;
  update: (data: Partial<DateFormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
  isLoading: boolean;
}

export default function StepLogistics({ data, update, onSubmit, onBack, isLoading }: Props) {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h2 className="text-2xl font-serif font-bold text-navy-900">Sentuhan Akhir.</h2>
        <p className="text-navy-700 text-sm">Sesuaikan dengan realita.</p>
      </div>

      <div className="space-y-6">
        {/* Budget: 3 Tier Layout */}
        <div>
          <label className="text-xs font-bold tracking-widest text-navy-700/60 uppercase mb-3 block">Kondisi Dompet</label>
          <div className="grid grid-cols-3 gap-3"> {/* Ubah jadi grid-cols-3 */}
            {['Save 💸', 'Normal ⚖️', 'Splurge 💎'].map((b) => (
              <button
                key={b}
                onClick={() => update({ budgetTier: b as any })}
                className={`py-4 px-2 rounded-xl border text-center transition-all ${
                  data.budgetTier === b
                    ? "border-navy-900 bg-navy-900 text-white shadow-lg shadow-navy-900/20 scale-105"
                    : "border-beige-500/50 text-navy-700 hover:bg-beige-100"
                }`}
              >
                <div className="font-bold text-xs sm:text-sm whitespace-nowrap">{b}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="space-y-3">
          <label className="text-xs font-bold tracking-widest text-navy-700/60 uppercase block">Preferensi Khusus</label>
          
          {/* Hidden Gem */}
          <div 
            onClick={() => update({ isHiddenGem: !data.isHiddenGem })}
            className="flex items-center justify-between p-4 bg-white rounded-xl border border-beige-500/50 cursor-pointer hover:border-beige-500 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${data.isHiddenGem ? 'bg-beige-500 text-navy-900' : 'bg-beige-100 text-navy-700/50'}`}>
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-navy-900 text-sm">Hidden Gem?</div>
                <div className="text-[10px] text-navy-700/60">Cari tempat tersembunyi.</div>
              </div>
            </div>
            <div className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${data.isHiddenGem ? 'bg-navy-900' : 'bg-gray-200'}`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${data.isHiddenGem ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </div>

          {/* Viral Toggle */}
          <div 
            onClick={() => update({ isViral: !data.isViral })}
            className="flex items-center justify-between p-4 bg-white rounded-xl border border-beige-500/50 cursor-pointer hover:border-beige-500 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${data.isViral ? 'bg-navy-900 text-white' : 'bg-beige-100 text-navy-700/50'}`}>
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-navy-900 text-sm">Lagi Viral?</div>
                <div className="text-[10px] text-navy-700/60">Prioritaskan yang trending.</div>
              </div>
            </div>
            <div className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${data.isViral ? 'bg-navy-900' : 'bg-gray-200'}`}>
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${data.isViral ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="space-y-2 pt-2">
           <label className="flex items-center gap-2 text-xs font-bold tracking-widest text-navy-700/60 uppercase">
             <PenLine className="w-3 h-3" /> Catatan Tambahan (Opsional)
           </label>
           <textarea
            value={data.extraNote}
            onChange={(e) => update({ extraNote: e.target.value })}
            placeholder="Contoh: 'Wajib ada musholla', 'Akses kursi roda', atau 'Jangan tempat berisik'."
            className="w-full p-4 bg-beige-100/30 border border-beige-500/50 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-navy-900 text-navy-900 transition-all min-h-[100px] placeholder:text-navy-700/40"
           />
        </div>
      </div>

      <div className="pt-6 flex gap-3">
        <button onClick={onBack} disabled={isLoading} className="px-6 py-3 rounded-xl text-navy-700 hover:text-navy-900 font-medium">
          Kembali
        </button>
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="flex-1 py-3 bg-navy-900 text-white rounded-xl font-medium hover:bg-navy-900/90 transition-all disabled:opacity-70 shadow-lg shadow-navy-900/20"
        >
          {isLoading ? "Sedang Mengurasi..." : "Buatkan Rencana"}
        </button>
      </div>
    </div>
  );
}