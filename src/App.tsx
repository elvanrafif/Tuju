// src/App.tsx
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <div className="min-h-screen bg-beige-100 text-navy-900 font-sans selection:bg-beige-500 selection:text-navy-900">
      
      <header className="pt-10 pb-6 text-center">
        {/* BRAND NAME */}
        <h1 className="text-5xl font-serif font-bold tracking-tight text-navy-900">
          TUJU.
        </h1>
        {/* SLOGAN */}
        <p className="text-navy-700 text-sm mt-3 font-medium tracking-wide uppercase opacity-80">
          "Tentukan arah tanpa pasrah."
        </p>
      </header>

      <main className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-[2rem] shadow-xl shadow-navy-900/5 p-1 border border-beige-500/30">
          <MultiStepForm />
        </div>
        
        <footer className="text-center mt-8 text-xs text-navy-700 opacity-60 font-serif">
          © {new Date().getFullYear()} TUJU Curated.
        </footer>
      </main>
    </div>
  );
}

export default App;