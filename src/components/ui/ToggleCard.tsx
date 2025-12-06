import type { LucideIcon } from "lucide-react";

interface ToggleCardProps {
  label: string;
  subLabel: string;
  isActive: boolean;
  onClick: () => void;
  Icon: LucideIcon;
  activeColorClass: string; 
  activeBgClass: string;    
}

export default function ToggleCard({ 
  label, subLabel, isActive, onClick, Icon, activeColorClass, activeBgClass 
}: ToggleCardProps) {
  return (
    <div 
      onClick={onClick}
      className="flex items-center justify-between p-4 bg-white rounded-xl border border-beige-500/50 cursor-pointer hover:border-beige-500 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${isActive ? activeBgClass : 'bg-beige-100 text-navy-700/50'}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="font-semibold text-navy-900 text-sm">{label}</div>
          <div className="text-[10px] text-navy-700/60">{subLabel}</div>
        </div>
      </div>
      <div className={`w-11 h-6 rounded-full p-1 transition-colors duration-300 ${isActive ? activeColorClass : 'bg-gray-200'}`}>
        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isActive ? 'translate-x-5' : 'translate-x-0'}`} />
      </div>
    </div>
  );
}