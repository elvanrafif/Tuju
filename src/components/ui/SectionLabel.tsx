import type { ReactNode } from "react";

export default function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <label className={`flex items-center gap-2 text-xs font-bold tracking-widest text-navy-700/60 uppercase ${className}`}>
      {children}
    </label>
  );
}