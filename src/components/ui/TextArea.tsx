interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function TextArea({ className = "", ...props }: TextAreaProps) {
  return (
    <textarea
      className={`w-full p-4 bg-beige-100/30 border border-beige-500/50 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-navy-900 text-navy-900 transition-all min-h-[100px] placeholder:text-navy-700/40 ${className}`}
      {...props}
    />
  );
}