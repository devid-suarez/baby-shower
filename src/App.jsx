import React, { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const ConfettiBackground = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 rounded-sm bg-[#C5A059] animate-pulse"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`,
          opacity: Math.random() * 0.5 + 0.3,
          backgroundColor: Math.random() > 0.5 ? '#C5A059' : '#DDA7CC' // Ajustado al tono más cálido
        }}
      />
    ))}
  </div>
);

const PawPrint = ({ className = "w-4 h-4", fill = "#C3A492" }) => (
  <svg viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8.5C13.3807 8.5 14.5 7.38071 14.5 6C14.5 4.61929 13.3807 3.5 12 3.5C10.6193 3.5 9.5 4.61929 9.5 6C9.5 7.38071 10.6193 8.5 12 8.5Z" />
    <path d="M18.5 13C19.8807 13 21 11.8807 21 10.5C21 9.11929 19.8807 8 18.5 8C17.1193 8 16 9.11929 16 10.5C16 11.8807 17.1193 13 18.5 13Z" />
    <path d="M5.5 13C6.88071 13 8 11.8807 8 10.5C8 9.11929 6.88071 8 5.5 8C4.11929 8 3 9.11929 3 10.5C3 11.8807 4.11929 13 5.5 13Z" />
    <path d="M12 21.5C15 21.5 17 19.5 17 16.5C17 14.5 15.5 13 14 12.5C13.5 12.3 12.5 12.5 12 12.5C11.5 12.5 10.5 12.3 10 12.5C8.5 13 7 14.5 7 16.5C7 19.5 9 21.5 12 21.5Z" />
  </svg>
);

// 1. Gatito Rosado Claro (Estilo Kawaii Suave - Delineado Tonal)
const CatPink = ({ delay = "0s", size = "w-28 h-28" }) => (
  <div className={`relative ${size} animate-float`} style={{ animationDelay: delay }}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md overflow-visible">
      {/* Patitas Kawaii */}
      <path d="M 28 70 Q 28 92 34 92 Q 40 92 40 70" fill="#F0C4B8" stroke="#C28D7D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 60 70 Q 60 92 66 92 Q 72 92 72 70" fill="#F0C4B8" stroke="#C28D7D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Orejas */}
      <path d="M 20 45 L 14 18 L 40 28 Z" fill="#F0C4B8" stroke="#C28D7D" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 22 38 L 18 24 L 33 32 Z" fill="#E2A291" />
      
      <path d="M 80 45 L 86 18 L 60 28 Z" fill="#F0C4B8" stroke="#C28D7D" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 78 38 L 82 24 L 67 32 Z" fill="#E2A291" />
      
      {/* Cabeza ancha y achatada */}
      <ellipse cx="50" cy="52" rx="44" ry="32" fill="#F0C4B8" stroke="#C28D7D" strokeWidth="2.5" />
      
      {/* Mejillas sonrosadas */}
      <ellipse cx="20" cy="56" rx="4.5" ry="3" fill="#FF8A8A" opacity="0.35"/>
      <ellipse cx="80" cy="56" rx="4.5" ry="3" fill="#FF8A8A" opacity="0.35"/>
      
      {/* Ojos muy separados (Color café súper oscuro, no negro) */}
      <circle cx="26" cy="53" r="3.2" fill="#3A2218" />
      <circle cx="74" cy="53" r="3.2" fill="#3A2218" />
      
      {/* Boquita chiquita en W */}
      <path d="M 46 56 Q 48 59 50 56 Q 52 59 54 56" stroke="#3A2218" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Bigotes suaves del color del delineado */}
      <path d="M 6 53 L 14 54" stroke="#C28D7D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 4 59 L 12 58" stroke="#C28D7D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 94 53 L 86 54" stroke="#C28D7D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 96 59 L 88 58" stroke="#C28D7D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

// 2. Gatito Atigrado Caramelo (Estilo Kawaii Suave - Delineado Tonal)
const CatTabby = ({ delay = "0.5s", size = "w-32 h-32" }) => (
  <div className={`relative ${size} z-10 animate-float`} style={{ animationDelay: delay }}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg overflow-visible">
      {/* Patitas Kawaii */}
      <path d="M 28 70 Q 28 92 34 92 Q 40 92 40 70" fill="#C48D66" stroke="#9D653E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 60 70 Q 60 92 66 92 Q 72 92 72 70" fill="#C48D66" stroke="#9D653E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Orejas */}
      <path d="M 20 45 L 14 18 L 40 28 Z" fill="#C48D66" stroke="#9D653E" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 22 38 L 18 24 L 33 32 Z" fill="#DCA37C" />
      
      <path d="M 80 45 L 86 18 L 60 28 Z" fill="#C48D66" stroke="#9D653E" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M 78 38 L 82 24 L 67 32 Z" fill="#DCA37C" />
      
      {/* Cabeza ancha */}
      <ellipse cx="50" cy="52" rx="44" ry="32" fill="#C48D66" stroke="#9D653E" strokeWidth="2.5" />
      
      {/* Rayitas atigradas */}
      <path d="M 40 25 Q 42 32 42 38" stroke="#9D653E" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 50 23 Q 50 32 50 39" stroke="#9D653E" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 60 25 Q 58 32 58 38" stroke="#9D653E" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Mejillas sonrosadas */}
      <ellipse cx="20" cy="56" rx="4.5" ry="3" fill="#FF8A8A" opacity="0.35"/>
      <ellipse cx="80" cy="56" rx="4.5" ry="3" fill="#FF8A8A" opacity="0.35"/>
      
      {/* Ojos y Boca */}
      <circle cx="26" cy="53" r="3.2" fill="#3A2218" />
      <circle cx="74" cy="53" r="3.2" fill="#3A2218" />
      <path d="M 46 56 Q 48 59 50 56 Q 52 59 54 56" stroke="#3A2218" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Bigotes */}
      <path d="M 6 53 L 14 54" stroke="#9D653E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 4 59 L 12 58" stroke="#9D653E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 94 53 L 86 54" stroke="#9D653E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 96 59 L 88 58" stroke="#9D653E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

// 3. Gatito con Manchas (Estilo Kawaii Suave - Delineado Tonal)
const CatSpotted = ({ delay = "1s", size = "w-28 h-28" }) => {
  // Generamos un ID único usando el delay para que el clip-path no se cruce si hay varios
  const clipId = `spotted-clip-${delay.replace('.', '')}`;
  return (
    <div className={`relative ${size} animate-float`} style={{ animationDelay: delay }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md overflow-visible">
        <defs>
          <clipPath id={clipId}>
             <ellipse cx="50" cy="52" rx="44" ry="32" />
          </clipPath>
        </defs>
        
        {/* Patitas */}
        <path d="M 28 70 Q 28 92 34 92 Q 40 92 40 70" fill="#FFF5E8" stroke="#D1BBA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 60 70 Q 60 92 66 92 Q 72 92 72 70" fill="#FFF5E8" stroke="#D1BBA3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Oreja Izquierda (Mancha Marrón Oscuro) */}
        <path d="M 20 45 L 14 18 L 40 28 Z" fill="#6B5145" stroke="#6B5145" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M 22 38 L 18 24 L 33 32 Z" fill="#E2A291" />
        
        {/* Oreja Derecha (Mancha Caramelo) */}
        <path d="M 80 45 L 86 18 L 60 28 Z" fill="#C48D66" stroke="#C48D66" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M 78 38 L 82 24 L 67 32 Z" fill="#DCA37C" />
        
        {/* Cabeza Base Color Crema */}
        <ellipse cx="50" cy="52" rx="44" ry="32" fill="#FFF5E8" stroke="#D1BBA3" strokeWidth="2.5" />
        
        {/* Manchas redondeadas dentro de la cara */}
        <g clipPath={`url(#${clipId})`}>
          <circle cx="18" cy="22" r="32" fill="#6B5145" />
          <circle cx="85" cy="18" r="36" fill="#C48D66" />
        </g>
        
        {/* Re-dibuja el borde para tapar los cortes del clip */}
        <ellipse cx="50" cy="52" rx="44" ry="32" fill="none" stroke="#D1BBA3" strokeWidth="2.5" />

        {/* Mejillas */}
        <ellipse cx="20" cy="56" rx="4.5" ry="3" fill="#FF8A8A" opacity="0.35"/>
        <ellipse cx="80" cy="56" rx="4.5" ry="3" fill="#FF8A8A" opacity="0.35"/>

        {/* Ojos y Boca */}
        <circle cx="26" cy="53" r="3.2" fill="#3A2218" />
        <circle cx="74" cy="53" r="3.2" fill="#3A2218" />
        <path d="M 46 56 Q 48 59 50 56 Q 52 59 54 56" stroke="#3A2218" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Bigotes */}
        <path d="M 6 53 L 14 54" stroke="#D1BBA3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 4 59 L 12 58" stroke="#D1BBA3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 94 53 L 86 54" stroke="#D1BBA3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 96 59 L 88 58" stroke="#D1BBA3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
};

const MagicMap = () => (
  <svg viewBox="0 0 300 150" className="w-full max-w-[320px] mx-auto drop-shadow-md my-4" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="300" height="150" rx="15" fill="#F4EAE0" opacity="0.4" />
    {/* Camino en zigzag */}
    <path d="M30,80 L80,40 L150,90 L220,30 L270,100" fill="none" stroke="#D3A988" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30,80 L80,40 L150,90 L220,30 L270,100" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4,4" strokeLinecap="round" strokeLinejoin="round" />

    {/* Gemas */}
    <g className="animate-pulse-slow"><circle cx="30" cy="80" r="7" fill="#C5A059" /><circle cx="30" cy="80" r="5" fill="#FFF" opacity="0.8" /></g>
    <g className="animate-pulse-slow" style={{animationDelay: '0.5s'}}><circle cx="80" cy="40" r="7" fill="#C5A059" /><circle cx="80" cy="40" r="5" fill="#FFF" opacity="0.8" /></g>
    <g className="animate-pulse-slow" style={{animationDelay: '1s'}}><circle cx="150" cy="90" r="9" fill="#B07D55" stroke="#C5A059" strokeWidth="2" /><circle cx="150" cy="90" r="4" fill="#FFF" opacity="0.8" /></g>
    <g className="animate-pulse-slow" style={{animationDelay: '1.5s'}}><circle cx="220" cy="30" r="7" fill="#C5A059" /><circle cx="220" cy="30" r="5" fill="#FFF" opacity="0.8" /></g>
    <g className="animate-pulse-slow" style={{animationDelay: '2s'}}><circle cx="270" cy="100" r="10" fill="#9C7961" stroke="#C5A059" strokeWidth="2" /><circle cx="270" cy="100" r="5" fill="#FFF" opacity="0.8" /></g>

    {/* Árboles Redondos */}
    <circle cx="50" cy="110" r="15" fill="#A4B48A" opacity="0.9" />
    <circle cx="45" cy="105" r="10" fill="#BED0A2" />
    <circle cx="55" cy="115" r="8" fill="#879671" />
    <path d="M50,110 L50,130" stroke="#7A6658" strokeWidth="4" strokeLinecap="round" />
    
    <circle cx="120" cy="30" r="12" fill="#BED0A2" />
    <path d="M120,35 L120,50" stroke="#7A6658" strokeWidth="3" strokeLinecap="round" />

    {/* Pino */}
    <path d="M190,60 L210,90 L170,90 Z" fill="#879671" />
    <path d="M190,45 L205,75 L175,75 Z" fill="#A4B48A" />
    <path d="M190,80 L190,100" stroke="#685549" strokeWidth="4" strokeLinecap="round" />

    {/* Casita Principal */}
    <g transform="translate(260, 60)">
      <rect x="-15" y="0" width="30" height="25" fill="#FDF7EE" rx="2" stroke="#7A6658" strokeWidth="1"/>
      <path d="M-20,0 L0,-20 L20,0 Z" fill="#C29672" stroke="#7A6658" strokeWidth="1" strokeLinejoin="round"/>
      <rect x="-5" y="10" width="10" height="15" fill="#9C7961" rx="1" />
      <circle cx="2" cy="18" r="1.5" fill="#FFF" />
      {/* Ventanita */}
      <rect x="7" y="3" width="6" height="6" fill="#A4B48A" rx="1" opacity="0.7"/>
    </g>
  </svg>
);

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Fuentes
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Estilos CSS y animaciones
    const style = document.createElement('style');
    style.textContent = `
      .font-script { font-family: 'Dancing Script', cursive; }
      .font-serif-elegant { font-family: 'Playfair Display', serif; }
      
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeInUp 2.5s ease-out forwards;
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(0px); }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }

      @keyframes pulseSlow {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.1); }
      }
      .animate-pulse-slow {
        animation: pulseSlow 3s ease-in-out infinite;
      }
      
      .text-outline-white {
        text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0px 2px 4px rgba(0,0,0,0.1);
      }
    `;
    document.head.appendChild(style);

    // Lógica Timer
    const targetDate = new Date('June 7, 2026 14:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000); 

    return () => clearInterval(interval);
  }, []);

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=4.550745,-74.111123', '_blank');
  };

  return (
    // Fondo actualizado al tono crema de la nueva imagen
    <div className="min-h-screen bg-[#FAF5EB] flex flex-col items-center relative overflow-x-hidden text-gray-800 pb-12">
      <ConfettiBackground />

      <div className="w-full max-w-md bg-transparent px-4 pt-10 flex flex-col items-center relative z-10">
        
        {/* Decoración superior */}
        <div className="w-full flex justify-between px-6 opacity-60 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <PawPrint className="w-6 h-6" fill="#C29672" />
          <PawPrint className="w-6 h-6" fill="#C29672" />
        </div>

        {/* Textos */}
        <div className="text-center mt-4 flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-script text-5xl sm:text-6xl text-outline-white text-[#8C6E5F] leading-none mb-1">
            Mi familia
          </h1>
          <h2 className="font-script text-3xl sm:text-4xl text-outline-white text-[#8C6E5F]">
            te invita a celebrar
          </h2>
          <p className="font-serif-elegant text-lg sm:text-xl font-semibold mt-4 text-[#5A4942]">
            Mi Baby Shower, att:
          </p>
          
          {/* Nombre DESTACADO */}
          <div className="mt-2 relative">
            <h3 className="font-script text-7xl sm:text-8xl text-[#C29672] drop-shadow-md transform -rotate-2 relative z-10">
              Dayla
            </h3>
            <div className="absolute inset-0 bg-white/50 blur-xl rounded-full z-0 transform scale-150"></div>
          </div>
        </div>

        {/* GATITOS SUPERIORES (Justo encima del contador) */}
        <div className="flex justify-center items-end mt-8 -mb-4 w-full max-w-[340px] relative z-20 gap-2 sm:gap-4">
          <CatPink delay="0s" size="w-24 h-24 sm:w-28 sm:h-28" />
          <CatTabby delay="1s" size="w-28 h-28 sm:w-32 sm:h-32" />
          <CatSpotted delay="0.5s" size="w-24 h-24 sm:w-28 sm:h-28" />
        </div>

        {/* CONTADOR SIN FONDO BLANCO */}
        <div className="w-full py-4 flex flex-col items-center relative z-10 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center justify-center space-x-1 sm:space-x-3 w-full px-1">
            
            {/* Box Días */}
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-[#D3A988] border-[2px] sm:border-[3px] border-[#C5A059] rounded-2xl sm:rounded-3xl w-16 h-20 sm:w-20 sm:h-28 flex flex-col justify-center items-center shadow-md">
                <span className="text-[#3A2C2C] font-serif-elegant text-[9px] sm:text-xs font-bold tracking-widest mt-1">DÍAS</span>
                <span className="text-white font-serif-elegant text-2xl sm:text-4xl mt-1">{String(timeLeft.days).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-20 sm:h-28 space-y-1 sm:space-y-2 opacity-70">
              <PawPrint className="w-3 h-3 sm:w-4 sm:h-4" fill="#C5A059" />
              <div className="w-[1.5px] sm:w-[2px] h-6 sm:h-10 bg-[#C5A059]"></div>
              <PawPrint className="w-3 h-3 sm:w-4 sm:h-4" fill="#C5A059" />
            </div>

            {/* Box Horas */}
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="bg-[#D3A988] border-[2px] sm:border-[3px] border-[#C5A059] rounded-2xl sm:rounded-3xl w-16 h-20 sm:w-20 sm:h-28 flex flex-col justify-center items-center shadow-md">
                <span className="text-[#3A2C2C] font-serif-elegant text-[9px] sm:text-xs font-bold tracking-widest mt-1">HRS</span>
                <span className="text-white font-serif-elegant text-2xl sm:text-4xl mt-1">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-20 sm:h-28 space-y-1 sm:space-y-2 opacity-70">
              <PawPrint className="w-3 h-3 sm:w-4 sm:h-4" fill="#C5A059" />
              <div className="w-[1.5px] sm:w-[2px] h-6 sm:h-10 bg-[#C5A059]"></div>
              <PawPrint className="w-3 h-3 sm:w-4 sm:h-4" fill="#C5A059" />
            </div>

            {/* Box Minutos */}
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="bg-[#D3A988] border-[2px] sm:border-[3px] border-[#C5A059] rounded-2xl sm:rounded-3xl w-16 h-20 sm:w-20 sm:h-28 flex flex-col justify-center items-center shadow-md">
                <span className="text-[#3A2C2C] font-serif-elegant text-[9px] sm:text-xs font-bold tracking-widest mt-1 mb-0">MIN</span>
                <span className="text-white font-serif-elegant text-2xl sm:text-4xl mt-1">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-20 sm:h-28 space-y-1 sm:space-y-2 opacity-70">
              <PawPrint className="w-3 h-3 sm:w-4 sm:h-4" fill="#C5A059" />
              <div className="w-[1.5px] sm:w-[2px] h-6 sm:h-10 bg-[#C5A059]"></div>
              <PawPrint className="w-3 h-3 sm:w-4 sm:h-4" fill="#C5A059" />
            </div>

            {/* Box Segundos */}
            <div className="flex flex-col items-center animate-float" style={{ animationDelay: '0.9s' }}>
              <div className="bg-[#D3A988] border-[2px] sm:border-[3px] border-[#C5A059] rounded-2xl sm:rounded-3xl w-16 h-20 sm:w-20 sm:h-28 flex flex-col justify-center items-center shadow-md">
                <span className="text-[#3A2C2C] font-serif-elegant text-[9px] sm:text-xs font-bold tracking-widest mt-1 mb-0">SEG</span>
                <span className="text-white font-serif-elegant text-2xl sm:text-4xl mt-1">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tarjeta de Fecha Destacada */}
        <div className="mt-8 mb-2 bg-white/50 border border-[#C29672]/30 px-8 py-4 rounded-2xl shadow-sm text-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="flex items-center justify-center space-x-2 mb-1">
             <Calendar className="text-[#8C6E5F]" size={20} />
             <p className="font-serif-elegant text-lg text-[#8C6E5F] font-bold tracking-widest uppercase text-[12px] sm:text-sm">
                Agéndalo
             </p>
          </div>
          <p className="font-serif-elegant text-2xl sm:text-3xl text-[#3A2C2C] font-bold mt-1">
            Domingo 7 de Junio
          </p>
          <p className="font-serif-elegant text-xl text-[#C29672] font-semibold mt-1">
            2:00 PM
          </p>
        </div>

        {/* Mapa Mágico */}
        <div 
          className="mt-6 flex flex-col items-center cursor-pointer group w-full"
          onClick={handleLocationClick}
        >
          <div className="relative w-full flex justify-center transform transition-transform duration-500 group-hover:scale-105">
             <MagicMap />
          </div>
          
          <button className="mt-2 flex items-center space-x-3 bg-white/80 backdrop-blur-md px-6 py-4 rounded-full shadow-md border border-[#C5A059]/60 hover:bg-white transition-all transform group-hover:-translate-y-1">
            <div className="bg-gradient-to-br from-[#C5A059] to-[#C29672] p-2 rounded-full shadow-inner animate-pulse">
               <MapPin size={20} className="text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif-elegant text-lg font-bold text-[#3A2C2C] leading-tight">Calle 48Q sur #5C - 59</span>
              <span className="text-xs text-[#8C6E5F] font-sans font-semibold uppercase tracking-wider">Ver ruta en el mapa</span>
            </div>
          </button>
        </div>
        
        {/* GATITOS INFERIORES (Debajo del mapa) */}
        <div className="flex justify-center items-end mt-12 w-full max-w-[200px] relative z-20 gap-6">
          <CatTabby delay="1.5s" size="w-20 h-20 sm:w-24 sm:h-24" />
          <CatPink delay="0.5s" size="w-20 h-20 sm:w-24 sm:h-24" />
        </div>

        {/* Decoración inferior */}
        <div className="flex space-x-6 opacity-40 pb-8 mt-6">
           <PawPrint className="w-3 h-3" fill="#C29672" />
           <PawPrint className="w-3 h-3" fill="#C29672" />
           <PawPrint className="w-3 h-3" fill="#C29672" />
        </div>

      </div>
    </div>
  );
}