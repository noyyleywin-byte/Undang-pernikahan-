"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Sparkles, Heart, CheckCircle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// --- CONFIGURATION & CONSTANTS ---
const WEDDING_DATE = new Date('2026-12-25T10:00:00'); // Ganti dengan tanggal pernikahan Anda

// --- MAIN COMPONENT ---
export default function WeddingInvitation() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#332C28] font-sans antialiased selection:bg-[#E6DFD3]">
      <HeroSection />
      <CountdownSection />
      <DetailsSection />
      <RsvpAndWishSection />
      <Footer />
    </div>
  );
}

// --- 1. HERO SECTION ---
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b from-[#F7F3EB] to-[#FDFBF7]">
      {/* Background Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(#D4C5B3_1px,transparent_1px)] [background-size:32px_32px]"
      />
      
      <div className="z-10 max-w-2xl mx-auto space-y-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-[#8A7A6B]"
        >
          The Wedding of
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif font-light text-[#4A3E3D] tracking-wide"
        >
          Ananda <span className="text-3xl md:text-5xl block md:inline my-2 md:my-0 font-light text-[#A89480]">&</span> Kirana
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-24 h-[1px] bg-[#D4C5B3] mx-auto my-6"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-sm md:text-base tracking-[0.15em] font-light text-[#6E6053]"
        >
          FRIDAY, 25 DECEMBER 2026
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase text-[#A89480] animate-bounce"
      >
        Scroll Down
      </motion.div>
    </section>
  );
}

// --- 2. COUNTDOWN SECTION ---
function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +WEDDING_DATE - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime();
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-[#FDFBF7] text-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="text-xs tracking-[0.2em] uppercase text-[#8A7A6B] mb-8">Counting Down to Forever</h2>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {timeBlocks.map((block, idx) => (
            <div key={idx} className="bg-[#F7F3EB] p-4 rounded-xl border border-[#EDE6DA]">
              <span className="block text-2xl md:text-4xl font-light text-[#4A3E3D] font-serif">{String(block.value).padStart(2, '0')}</span>
              <span className="block text-[10px] uppercase tracking-wider text-[#A89480] mt-1">{block.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// --- 3. DETAILS & LOCATION SECTION ---
function DetailsSection() {
  return (
    <section className="py-20 bg-[#F7F3EB] px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-[#8A7A6B] block">The Celebration</span>
          <h2 className="text-3xl font-serif font-light text-[#4A3E3D]">Waktu & Lokasi Acara</h2>
          <p className="text-sm text-[#6E6053] leading-relaxed font-light">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <Calendar className="w-5 h-5 text-[#A89480] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm text-[#4A3E3D]">Jumat, 25 Desember 2026</h4>
                <p className="text-xs text-[#8A7A6B]">Akad Nikah: 08.00 - 10.00 WIB</p>
                <p className="text-xs text-[#8A7A6B]">Resepsi: 11.00 - 15.00 WIB</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#A89480] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-sm text-[#4A3E3D]">Amanjiwo Resort Borobudur</h4>
                <p className="text-xs text-[#8A7A6B] leading-relaxed">Ds. Majaksingi, Borobudur, Magelang, Jawa Tengah</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Placeholder Peta Modern Interaktif */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video md:aspect-square w-full bg-[#EFEAE0] rounded-2xl border border-[#E6DFD3] overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-sm"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#C4B5A3_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
          <MapPin className="w-8 h-8 text-[#A89480] mb-3 animate-pulse" />
          <h3 className="font-serif text-lg text-[#4A3E3D] mb-1">Amanjiwo Resort</h3>
          <p className="text-xs text-[#8A7A6B] mb-6 max-w-xs">Buka Google Maps untuk navigasi langsung ke lokasi acara.</p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="z-10 inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-widest uppercase bg-[#4A3E3D] text-white hover:bg-[#5C4E4D] transition-colors rounded-none"
          >
            Buka Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// --- 4. RSVP & AI WISH FORMATTER SECTION ---
function RsvpAndWishSection() {
  const [formData, setFormData] = useState({ name: '', attendance: 'yes', message: '' });
  const [wishlist, setWishlist] = useState([
    { name: 'Saraswati', message: 'Selamat menempuh hidup baru! Semoga cinta kalian berdua terus mekar seperti bunga di musim semi, abadi dan penuh kehangatan.', formatted: true },
  ]);
  
  const [isFormatting, setIsFormatting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fungsi Integrasi Gemini API
  const formatWishWithGemini = async (rawMessage) => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("Gemini API key is missing. Using fallback formatting.");
      return rawMessage; // Fallback jika API key belum diisi
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Ubah ucapan selamat pernikahan berikut menjadi jauh lebih hangat, puitis, elegan, dan menyentuh hati dalam bahasa Indonesia yang anggun, namun jangan terlalu panjang (maksimal 2-3 kalimat): "${rawMessage}"`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text().trim();
    } catch (error) {
      console.error("Error formatting wish with Gemini:", error);
      return rawMessage;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsFormatting(true);
    
    // Memproses ucapan mentah lewat Gemini API
    const formattedMessage = await formatWishWithGemini(formData.message);
    
    setIsFormatting(false);
    setWishlist([{ name: formData.name, message: formattedMessage, formatted: true }, ...wishlist]);
    setIsSubmitted(true);
    
    // Reset Form setelah beberapa saat
    setTimeout(() => {
      setFormData({ name: '', attendance: 'yes', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-[#FDFBF7] px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* RSVP Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-[#8A7A6B] block mb-1">RSVP & Wishes</span>
            <h2 className="text-3xl font-serif font-light text-[#4A3E3D]">Konfirmasi Kehadiran</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6E6053] mb-2 font-light">Nama Lengkap</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-[#F7F3EB] border border-[#EDE6DA] focus:border-[#A89480] focus:outline-none text-sm transition-colors rounded-none"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6E6053] mb-2 font-light">Konfirmasi Kehadiran</label>
              <select 
                value={formData.attendance}
                onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                className="w-full px-4 py-3 bg-[#F7F3EB] border border-[#EDE6DA] focus:border-[#A89480] focus:outline-none text-sm transition-colors rounded-none text-[#332C28]"
              >
                <option value="yes">Sedia Hadir</option>
                <option value="no">Maaf, Tidak Dapat Hadir</option>
              </select>
            </div>

            <div className="relative">
              <label className="block text-xs uppercase tracking-wider text-[#6E6053] mb-2 font-light flex justify-between items-center">
                <span>Ucapan & Doa Restu</span>
                <span className="text-[10px] text-[#A89480] flex items-center gap-1 normal-case italic">
                  <Sparkles className="w-3 h-3 text-amber-500" /> AI Wish Formatter Aktif
                </span>
              </label>
              <textarea 
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-[#F7F3EB] border border-[#EDE6DA] focus:border-[#A89480] focus:outline-none text-sm transition-colors rounded-none resize-none"
                placeholder="Tulis ucapan santai/biasa, AI kami akan merapikannya menjadi puitis..."
              />
            </div>

            <button 
              type="submit"
              disabled={isFormatting || isSubmitted}
              className="w-full bg-[#4A3E3D] text-white py-3.5 text-xs uppercase tracking-widest hover:bg-[#5C4E4D] transition-colors disabled:bg-[#A89480] font-medium flex items-center justify-center gap-2 rounded-none"
            >
              {isFormatting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  AI sedang merajut kata puitis...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Ucapan Terkirim!
                </>
              ) : (
                'Kirim Konfirmasi & Ucapan'
              )}
            </button>
          </form>
        </motion.div>

        {/* Live Wishlist Display */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col h-full"
        >
          <div className="flex items-center justify-between border-b border-[#EDE6DA] pb-3">
            <h3 className="font-serif text-xl text-[#4A3E3D] flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#A89480] fill-[#A89480]" /> Doa & Harapan Tamu
            </h3>
            <span className="text-xs bg-[#F7F3EB] px-2.5 py-1 text-[#8A7A6B] border border-[#EDE6DA] font-light">
              {wishlist.length} Ucapan
            </span>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar flex-1">
            <AnimatePresence mode="popLayout">
              {wishlist.map((wish, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="p-5 bg-[#F7F3EB] border border-[#EDE6DA] rounded-none space-y-2 relative group"
                >
                  {wish.formatted && (
                    <div className="absolute top-4 right-4 text-[10px] bg-white/80 backdrop-blur-sm text-[#8A7A6B] px-2 py-0.5 rounded-full border border-[#EDE6DA] flex items-center gap-1 font-light italic">
                      <Sparkles className="w-2.5 h-2.5 text-amber-500" /> Polished by AI
                    </div>
                  )}
                  <h4 className="font-medium text-sm text-[#4A3E3D] font-serif">{wish.name}</h4>
                  <p className="text-xs md:text-sm text-[#6E6053] leading-relaxed font-light italic">
                    "{wish.message}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// --- 5. FOOTER ---
function Footer() {
  return (
    <footer className="py-12 bg-[#F7F3EB] text-center border-t border-[#EDE6DA]">
      <p className="font-serif italic text-[#A89480] text-sm">Terima Kasih Atas Doa & Restu Anda</p>
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#8A7A6B] mt-4">Ananda & Kirana • 2026</p>
    </footer>
  );
}