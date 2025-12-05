import type { DateFormData } from "../../utils/types";

interface Props {
  data: DateFormData;
  update: (data: Partial<DateFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepVibe({ data, update, onNext, onBack }: Props) {
  const CATEGORIES = [
    { id: "Makan Cantik", desc: "Cafe, Bistro, Fine Dining" },
    { id: "Alam & Terbuka", desc: "Taman, Pantai, Piknik" },
    { id: "Activity", desc: "Workshop, Olahraga, Arcade" },
    { id: "Seni & Museum", desc: "Gallery, Pameran, Sejarah" },
    { id: "Ngopi Santai", desc: "Coffee Shop, Deep Talk" },
    { id: "Night Life", desc: "Bar, Live Music, City Lights" },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-sans font-bold text-navy-900">Tentukan Vibe.</h2>
        <p className="text-navy-700 text-sm">Pilih satu pengalaman utama.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => update({ category: cat.id })}
            className={`p-4 rounded-xl border text-left transition-all ${
              data.category === cat.id
                ? "border-navy-900 bg-beige-500/20 ring-1 ring-navy-900" // Selected State
                : "border-beige-500/50 hover:border-navy-700 bg-white"
            }`}
          >
            <div className={`font-semibold text-sm mb-1 ${data.category === cat.id ? "text-navy-900" : "text-navy-700"}`}>
              {cat.id}
            </div>
            <div className={`text-[10px] leading-tight ${data.category === cat.id ? "text-navy-900/80" : "text-navy-700/50"}`}>
              {cat.desc}
            </div>
          </button>
        ))}
      </div>

      <div className="pt-4 flex gap-3">
        <button onClick={onBack} className="px-6 py-3 rounded-xl text-navy-700 hover:text-navy-900 font-medium">
          Kembali
        </button>
        <button
          onClick={onNext}
          disabled={!data.category}
          className="flex-1 py-3 bg-navy-900 text-white rounded-xl font-medium hover:bg-navy-900/90 transition-all disabled:opacity-50"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}