import { useState, useEffect } from "react";
import MultiStepForm from "./components/MultiStepForm";
import AnimatedHeader from "./components/ui/AnimatedHeader"; // Import Component Baru
import { motion } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Timer 3 detik untuk animasi typing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-beige-100 text-navy-900 font-sans selection:bg-beige-500 selection:text-navy-900 overflow-hidden">
      
      {/* 1. ANIMATED HEADER (Splash -> Header) */}
      <AnimatedHeader isLoading={isLoading} />

      {/* 2. MAIN CONTENT (Muncul setelah loading selesai) */}
      {!isLoading && (
        <motion.main 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }} 
          className="max-w-md mx-auto p-4 relative z-0"
        >
          <div className="bg-white rounded-[2rem] shadow-xl shadow-navy-900/5 p-1 border border-beige-500/30">
            <MultiStepForm />
          </div>
          
          <footer className="text-center mt-8 text-xs text-navy-700 opacity-60 font-serif">
            © {new Date().getFullYear()} TUJU Curated.
          </footer>
        </motion.main>
      )}
    </div>
  );
}

export default App;