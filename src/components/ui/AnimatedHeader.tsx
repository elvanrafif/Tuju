import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isLoading: boolean;
}

export default function AnimatedHeader({ isLoading }: Props) {
  const text = "TUJU.";
  
  const letterVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      layout 
      transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }} 
      className={`flex flex-col items-center justify-center text-center transition-colors duration-500
        ${isLoading 
          ? "fixed inset-0 z-50 bg-beige-100" // Mode Splash Screen
          : "relative z-10 pt-10 pb-6 bg-transparent" // Mode Header Biasa
        }
      `}
    >
      {/* LOGO TEXT (Typing Effect -> Static) */}
      <motion.h1 
        layout="position" 
        className={`font-serif font-bold tracking-tight text-navy-900 leading-none
          ${isLoading ? "text-7xl md:text-9xl" : "text-5xl"} 
        `}
      >
        {isLoading ? (
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
            className="flex items-center"
          >
            {text.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariant}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        ) : (
          "TUJU." 
        )}
      </motion.h1>

      {/* SLOGAN (Hanya muncul setelah jadi Header) */}
      <AnimatePresence>
        {!isLoading && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-navy-700 text-sm mt-3 font-medium tracking-wide uppercase opacity-80"
          >
            "Tentukan arah tanpa pasrah."
          </motion.p>
        )}
      </AnimatePresence>
    </motion.header>
  );
}