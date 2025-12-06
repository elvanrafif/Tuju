import type { DateRecommendation } from "../../utils/types";
import { Repeat } from "lucide-react";
import { motion } from "framer-motion";
import StepHeader from "../ui/StepHeader";
import ResultCard from "../ui/ResultCard";
import Button from "../ui/Button";

interface Props {
  results: DateRecommendation[];
  onReset: () => void;
  isLoading?: boolean;
}

export default function StepResult({ results, onReset, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse pt-4">
        <div className="h-8 bg-beige-500/30 rounded-lg w-3/4 mx-auto mb-8"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-beige-500/30 space-y-3">
             <div className="h-6 bg-beige-500/20 rounded w-1/2"></div>
             <div className="h-20 bg-beige-100 rounded-xl mt-4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-navy-700">Belum ada ide yang pas.</p>
        <button onClick={onReset} className="mt-4 text-navy-900 font-bold underline">Ubah kriteria yuk</button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 pb-2"
    >
      <div className="text-center">
        <StepHeader 
          title="Rekomendasi." 
          subtitle={`${results.length} Tempat terkurasi untukmu.`}
        />
      </div>

      <div className="grid gap-5">
        {results.map((item, idx) => (
          <ResultCard key={item.id || idx} item={item} index={idx} />
        ))}
      </div>

      <Button variant="outline" onClick={onReset} className="w-full">
        <Repeat className="w-4 h-4" /> Ubah Kriteria
      </Button>
    </motion.div>
  );
}