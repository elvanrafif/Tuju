interface SelectionCardProps {
  label: string;
  subLabel?: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

export default function SelectionCard({ label, subLabel, isSelected, onClick, className = "" }: SelectionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl border text-center transition-all ${
        isSelected
          ? "border-navy-900 bg-navy-900 text-white shadow-lg shadow-navy-900/20 scale-105"
          : "border-beige-500/50 text-navy-700 hover:bg-beige-100 bg-white"
      } ${className}`}
    >
      <div className="font-bold text-sm whitespace-nowrap">{label}</div>
      {subLabel && (
        <div className={`text-[10px] mt-1 ${isSelected ? "text-white/80" : "text-navy-700/50"}`}>
          {subLabel}
        </div>
      )}
    </button>
  );
}