import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-900/90 shadow-lg shadow-navy-900/20",
    secondary: "bg-beige-100 text-navy-900 hover:bg-beige-500/30",
    outline: "bg-white border border-beige-500/50 text-navy-700 hover:bg-beige-100"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}