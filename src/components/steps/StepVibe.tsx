import type { DateFormData } from "../../utils/types";
import SelectionCard from "../ui/SelectionCard";
import Button from "../ui/Button";

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
        <h2 className="text-2xl font-serif font-bold text-navy-900">Tentukan Vibe.</h2>
        <p className="text-navy-700 text-sm">Pilih satu pengalaman utama.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map((cat) => (
          <SelectionCard
            key={cat.id}
            label={cat.id}
            subLabel={cat.desc}
            isSelected={data.category === cat.id}
            onClick={() => update({ category: cat.id })}
            className="text-left items-start" 
          />
        ))}
      </div>

      <div className="pt-4 flex gap-3">
        <Button variant="outline" onClick={onBack} className="w-1/3">
          Kembali
        </Button>
        <Button onClick={onNext} disabled={!data.category} className="flex-1">
          Lanjut
        </Button>
      </div>
    </div>
  );
}