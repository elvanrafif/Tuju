import type { DateRecommendation } from "../../utils/types";
import { MapPin, Star, Video, Send } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface ResultCardProps {
  item: DateRecommendation;
  index: number;
}

export default function ResultCard({ item, index }: ResultCardProps) {
  const getGoogleMapsLink = (query: string) => 
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  const getWhatsAppLink = () => {
    const mapsUrl = getGoogleMapsLink(item.googleQuery);
    const text = `Eh liat deh tempat ini: *${item.namaTempat}*\n\nKata AI ini cocok buat kita soalnya: _"${item.alasanAI}"_\n\n📍 ${item.lokasiSingkat}\n💰 ${item.estimasiHarga}\n\nCek Maps: ${mapsUrl}\n\nGimana? Gas? 🚀`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-beige-500/30 hover:shadow-md hover:border-beige-500 transition-all group"
    >
      <div className="flex flex-col items-start gap-1 mb-4">
        <h3 className="text-xl font-bold text-navy-900 leading-tight w-full">
          {item.namaTempat}
        </h3>
        <div className="text-sm font-bold text-emerald-700 w-full tracking-wide">
          {item.estimasiHarga}
        </div>
        <div className="flex items-center text-navy-700/60 text-xs mt-1 w-full">
          <MapPin className="w-3 h-3 mr-1" />
          {item.lokasiSingkat}
        </div>
      </div>

      <div className="bg-beige-100/50 p-4 rounded-xl mb-5 border border-beige-500/20">
        <div className="flex gap-3 items-start">
          <Star className="w-4 h-4 text-beige-500 fill-current shrink-0 mt-0.5" />
          <p className="text-navy-900 text-sm italic leading-relaxed opacity-90">
            "{item.alasanAI}"
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-3 border-t border-beige-500/20">
        <a 
          href={getGoogleMapsLink(item.googleQuery)}
          target="_blank"
          rel="noreferrer"
          title="Lihat di Google Maps"
          className="p-3 bg-beige-100 text-navy-900 rounded-xl hover:bg-beige-500/30 transition flex-shrink-0"
        >
          <MapPin className="w-5 h-5" />
        </a>

        <a 
          href={`https://www.tiktok.com/search?q=${encodeURIComponent(item.namaTempat + " " + item.lokasiSingkat + " review")}`}
          target="_blank"
          rel="noreferrer"
          title="Cari Review di TikTok"
          className="p-3 bg-black text-white rounded-xl hover:opacity-80 transition flex-shrink-0"
        >
          <FaTiktok className="w-5 h-5" />
        </a>

        <a 
          href={getWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-[#20bd5a] transition shadow-lg shadow-green-900/10 whitespace-nowrap"
        >
          <FaWhatsapp className="w-5 h-5" /> Share
        </a>
      </div>
    </motion.div>
  );
}