import { MapPin } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  withIcon?: boolean;
}

export default function Input({ withIcon, className = "", ...props }: InputProps) {
  return (
    <div className="relative group">
      <input
        className={`w-full bg-beige-100/50 border border-beige-500 text-navy-900 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all placeholder:text-navy-700/50 ${className}`}
        {...props}
      />
      {withIcon && (
        <MapPin className="absolute right-4 top-4 text-navy-700 w-5 h-5 group-focus-within:text-navy-900 transition-colors" />
      )}
    </div>
  );
}