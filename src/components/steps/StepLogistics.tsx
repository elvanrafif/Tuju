import type { DateFormData } from "../../utils/types";
import { Sparkles, Flame, PenLine } from "lucide-react";
import StepHeader from "../ui/StepHeader";
import SectionLabel from "../ui/SectionLabel";
import SelectionCard from "../ui/SelectionCard";
import ToggleCard from "../ui/ToggleCard";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";

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
      <StepHeader 
        title="Sentuhan Akhir." 
        subtitle="Sesuaikan dengan realita." 
      />

      <div className="space-y-6">
        <div>
          <SectionLabel className="mb-3">Kondisi Dompet</SectionLabel>
          <div className="grid grid-cols-3 gap-3">
            {['Save 💸', 'Normal ⚖️', 'Splurge 💎'].map((b) => (
              <SelectionCard
                key={b}
                label={b}
                isSelected={data.budgetTier === b}
                onClick={() => update({ budgetTier: b as any })}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <SectionLabel>Preferensi Khusus</SectionLabel>
          
          <ToggleCard
            label="Hidden Gem?"
            subLabel="Cari tempat tersembunyi."
            isActive={data.isHiddenGem}
            onClick={() => update({ isHiddenGem: !data.isHiddenGem })}
            Icon={Sparkles}
            activeColorClass="bg-navy-900"
            activeBgClass="bg-beige-500 text-navy-900"
          />

          <ToggleCard
            label="Lagi Viral?"
            subLabel="Prioritaskan yang trending."
            isActive={data.isViral}
            onClick={() => update({ isViral: !data.isViral })}
            Icon={Flame}
            activeColorClass="bg-navy-900"
            activeBgClass="bg-navy-900 text-white"
          />
        </div>

        <div className="space-y-2 pt-2">
           <SectionLabel><PenLine className="w-3 h-3" /> Catatan Tambahan (Opsional)</SectionLabel>
           <TextArea
            value={data.extraNote}
            onChange={(e) => update({ extraNote: e.target.value })}
            placeholder="Contoh: 'Wajib ada musholla', 'Akses kursi roda', atau 'Jangan tempat berisik'."
           />
        </div>
      </div>

      <div className="pt-6 flex gap-3">
        <Button variant="outline" onClick={onBack} disabled={isLoading} className="w-1/3">
          Kembali
        </Button>
        <Button onClick={onSubmit} disabled={isLoading} className="flex-1 shadow-lg shadow-navy-900/20">
          {isLoading ? "Sedang Mengurasi..." : "Buatkan Rencana"}
        </Button>
      </div>
    </div>
  );
}