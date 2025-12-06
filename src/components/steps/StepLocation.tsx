import { useState } from "react";
import type { DateFormData } from "../../utils/types";
import { INDONESIA_CITIES } from "../../data/location";
import { MapPin } from "lucide-react";
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
      <div className="space-y-1">
        <h2 className="text-2xl font-serif font-bold text-navy-900">Mulai dari mana?</h2>
        <p className="text-navy-700 text-sm">Tentukan titik awal perjalananmu.</p>
      </div>

      <div className="space-y-6">
        <div className="relative group">
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleLocationChange(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Ketik kotamu..."
            className="w-full bg-beige-100/50 border border-beige-500 text-navy-900 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all placeholder:text-navy-700/50"
          />
          <MapPin className="absolute right-4 top-4 text-navy-700 w-5 h-5 group-focus-within:text-navy-900 transition-colors" />
          
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
          <label className="text-xs font-bold tracking-widest text-navy-700/60 uppercase">
            Pergi sama siapa?
          </label>
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

      <Button onClick={onNext} disabled={data.location.length < 3}>
        Lanjut
      </Button>
    </div>
  );
}