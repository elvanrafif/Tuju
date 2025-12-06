import { useState } from "react";
import type { DateFormData } from "../../utils/types";
import { INDONESIA_CITIES } from "../../data/location";
import StepHeader from "../ui/StepHeader";
import SectionLabel from "../ui/SectionLabel";
import Input from "../ui/Input";
import Button from "../ui/Button";

interface Props {
  data: DateFormData;
  update: (data: Partial<DateFormData>) => void;
  onNext: () => void;
}

export default function StepLocation({ data, update, onNext }: Props) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleLocationChange = (val: string) => {
    update({ location: val });
    if (val.length > 0) {
      setSuggestions(INDONESIA_CITIES.filter(c => c.toLowerCase().includes(val.toLowerCase())).slice(0, 5));
      setShowSuggestions(true);
    } else setShowSuggestions(false);
  };

  return (
    <div className="space-y-8">
      <StepHeader 
        title="Mulai dari mana?" 
        subtitle="Tentukan titik awal perjalananmu." 
      />

      <div className="space-y-6">
        <div className="relative group">
          <Input
            withIcon
            value={data.location}
            onChange={(e) => handleLocationChange(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Ketik kotamu..."
          />
          
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-20 w-full bg-white border border-beige-500 rounded-xl shadow-xl mt-2 overflow-hidden py-1">
              {suggestions.map((city) => (
                <li key={city} onClick={() => { update({ location: city }); setShowSuggestions(false); }} className="px-4 py-3 hover:bg-beige-100 cursor-pointer text-sm text-navy-700">
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-3">
          <SectionLabel>Pergi sama siapa?</SectionLabel>
          <div className="flex bg-beige-100 p-1 rounded-xl">
            {['Pasangan', 'Teman', 'Keluarga'].map((p) => (
              <button
                key={p}
                onClick={() => update({ partner: p as any })}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  data.partner === p 
                    ? 'bg-white shadow-sm text-navy-900 ring-1 ring-black/5' 
                    : 'text-navy-700/60 hover:text-navy-700'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Button onClick={onNext} disabled={data.location.length < 3} className="w-full">
        Lanjut
      </Button>
    </div>
  );
}