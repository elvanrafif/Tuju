import { useState } from "react";
import type { DateFormData, DateRecommendation } from "../utils/types";
import { generateDateIdeas } from "../services/ai";
import { motion, AnimatePresence } from "framer-motion";
import StepLocation from "./steps/StepLocation";
import StepVibe from "./steps/StepVibe";
import StepLogistics from "./steps/StepLogistics";
import StepResult from "./steps/StepResult";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<DateRecommendation[]>([]);
  
  // State ini TIDAK AKAN DI-RESET saat tombol 'Cari Ulang' diklik
  const [formData, setFormData] = useState<DateFormData>({
    location: "",
    partner: "Pasangan",
    category: "", 
    mood: "Chill",
    budgetTier: "Save 💸",
    time: "Malam",
    isHiddenGem: false,
    isViral: false,
    extraNote: ""
  });

  const updateData = (partial: Partial<DateFormData>) => setFormData(p => ({ ...p, ...partial }));
  const nextStep = () => setStep(p => p + 1);
  const prevStep = () => setStep(p => p - 1);

  // Fungsi untuk 'Cari Ulang' / Edit
  const handleEditSearch = () => {
    // Kita hanya memindahkan user kembali ke Step 1
    // Data formData DIBIARKAN UTUH (Persistent)
    setStep(1);
    // Opsional: Jika ingin rekomendasi lama hilang, uncomment baris bawah:
    // setRecommendations([]); 
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    nextStep(); 
    try {
      const results = await generateDateIdeas(formData);
      setRecommendations(results);
    } catch (error) {
      prevStep();
      alert("Gagal koneksi AI. Coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const fadeVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="p-6 min-h-[400px]">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="1" variants={fadeVariant} initial="initial" animate="animate" exit="exit">
            <StepLocation data={formData} update={updateData} onNext={nextStep} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="2" variants={fadeVariant} initial="initial" animate="animate" exit="exit">
            <StepVibe data={formData} update={updateData} onNext={nextStep} onBack={prevStep} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div key="3" variants={fadeVariant} initial="initial" animate="animate" exit="exit">
            <StepLogistics data={formData} update={updateData} onSubmit={handleSubmit} onBack={prevStep} isLoading={isLoading} />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div key="4" variants={fadeVariant} initial="initial" animate="animate" exit="exit">
            <StepResult 
              results={recommendations} 
              onReset={handleEditSearch} 
              isLoading={isLoading}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}