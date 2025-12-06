interface StepHeaderProps {
  title: string;
  subtitle: string;
}

export default function StepHeader({ title, subtitle }: StepHeaderProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-serif font-bold text-navy-900">{title}</h2>
      <p className="text-navy-700 text-sm">{subtitle}</p>
    </div>
  );
}