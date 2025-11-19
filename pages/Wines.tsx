import React, { useState, useEffect, useRef } from 'react';
import { WINES } from '../constants';
import { Plus, Quote, ChevronUp, ChevronDown } from 'lucide-react';

export const Wines: React.FC = () => {
  // On ne stocke plus juste un index entier, mais une progression flottante (ex: 1.45)
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Configuration du scroll
  const SCROLL_PER_WINE = 0.6; // Réduit pour plus de réactivité (60vh par vin)
  const TOTAL_HEIGHT_VH = 100 + ((WINES.length - 1) * (SCROLL_PER_WINE * 100));

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollDistance = viewportHeight * SCROLL_PER_WINE;
      
      const scrolledPixels = -rect.top;
      
      if (scrolledPixels < 0) {
        setScrollProgress(0);
        return;
      }

      const rawProgress = scrolledPixels / scrollDistance;
      const maxProgress = WINES.length - 1;
      const clampedProgress = Math.max(0, Math.min(maxProgress, rawProgress));
      
      setScrollProgress(clampedProgress);

      // Logic for Snap / Magnetism
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      
      scrollTimeout.current = setTimeout(() => {
        // Si on est proche d'un entier (ex: 1.1 ou 0.9), on snap
        const targetIndex = Math.round(clampedProgress);
        if (Math.abs(clampedProgress - targetIndex) > 0.05) {
             // On déclenche un scroll doux vers la cible
             const targetScroll = targetIndex * scrollDistance;
             // Note: On ne force pas le scroll ici pour ne pas hijacker l'utilisateur
             // Mais on pourrait ajouter un bouton ou une animation CSS si désiré.
             // Pour l'instant on laisse la liberté fluide demandée.
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWine = (index: number) => {
    if (!containerRef.current) return;
    const viewportHeight = window.innerHeight;
    const scrollDistance = viewportHeight * SCROLL_PER_WINE;
    
    const top = containerRef.current.offsetTop;
    window.scrollTo({
      top: top + (index * scrollDistance),
      behavior: 'smooth'
    });
  };

  // Index principal actif
  const activeIndex = Math.round(scrollProgress);

  // Calculs pour l'interpolation visuelle (RIGUEUR & NETTETÉ)
  const renderBottle = (index: number) => {
    const distance = scrollProgress - index;

    // Fenêtre d'affichage très stricte : on coupe dès qu'on s'éloigne un peu
    if (Math.abs(distance) > 0.8) return null;

    // Opacité : Courbe accélérée. 
    // Dès qu'on est à 0.5 de distance, l'opacité chute drastiquement pour éviter le chevauchement "brouillon"
    const opacity = Math.max(0, 1 - (Math.abs(distance) * 1.5));
    
    // Translation Y : Mouvement plus court et précis
    // Si distance > 0 (on descend), la bouteille monte légèrement (-50px max)
    const translateY = distance * -80; 
    
    // Scale : Très subtil changement de taille
    const scale = 1 - (Math.abs(distance) * 0.15);
    
    // Blur : Quasi inexistant pour garder la "Rigueur"
    // Max 2px de flou juste pour suggérer le mouvement
    const blur = Math.abs(distance) * 3;

    return (
      <div 
        key={index}
        className="absolute inset-0 flex justify-center items-center will-change-transform"
        style={{ 
          opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
          zIndex: Math.round(opacity * 10),
          filter: `blur(${blur}px)`
        }}
      >
        <img 
          src={WINES[index].image} 
          alt={WINES[index].name}
          className="h-[50vh] lg:h-[65vh] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
        />
      </div>
    );
  };

  const getListStyle = (index: number) => {
    const distance = scrollProgress - index;
    const absDist = Math.abs(distance);
    
    // Forme concave plus subtile et "Tech"
    const translateX = Math.pow(absDist, 2) * 8; 
    const opacity = Math.max(0.15, 1 - absDist * 0.8); // Fade out plus rapide des items non actifs
    const scale = Math.max(0.85, 1 - absDist * 0.1);

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity: opacity,
      transformOrigin: 'right center'
    };
  };

  return (
    <div 
      ref={containerRef} 
      className="bg-anthracite w-full relative" 
      style={{ height: `${TOTAL_HEIGHT_VH}vh` }} 
    >
      
      {/* STICKY CONTAINER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* BACKGROUND AMBIENCE */}
        <div className="absolute inset-0 transition-colors duration-1000 ease-linear"
            style={{
              background: WINES[activeIndex].tag === 'Icon'
                ? 'radial-gradient(circle at 50% 50%, #1a0505 0%, #0a0a0a 60%)' // Plus sombre, plus subtil
                : WINES[activeIndex].tag === 'Innovation'
                ? 'radial-gradient(circle at 50% 50%, #101010 0%, #0a0a0a 60%)'
                : '#0a0a0a'
            }}
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 animate-grain"></div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-32 grid grid-cols-1 lg:grid-cols-12 items-center h-full relative z-10">
          
          {/* LEFT: INFO */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-center h-full pr-12 relative">
             {WINES.map((wine, idx) => (
               <div 
                 key={`info-${idx}`} 
                 className={`absolute w-full transition-all duration-500 ease-out ${
                   idx === activeIndex ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-4 pointer-events-none'
                 }`}
               >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-8 bg-bordeaux-light"></span>
                    <span className="text-bordeaux-light text-[10px] uppercase tracking-[0.2em]">
                      {wine.appellation}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-5xl xl:text-6xl text-paper leading-[1] mb-6 tracking-tight">
                    {wine.name}
                  </h2>
                  
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 max-w-sm border-l border-white/10 pl-4">
                    {wine.description.substring(0, 200)}...
                  </p>

                  <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-6 mb-6">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-gray-600 block mb-1">Production</span>
                      <span className="text-white font-serif text-lg">{wine.production}</span>
                    </div>
                    {wine.score && (
                      <div>
                        <span className="text-[9px] uppercase tracking-widest text-bordeaux-light block mb-1">Note</span>
                        <span className="text-white font-serif text-lg">{wine.score}</span>
                      </div>
                    )}
                  </div>

                  {wine.tastingNotes && (
                    <div className="bg-white/[0.02] p-5 border border-white/5 relative max-w-sm">
                      <Quote size={16} className="text-bordeaux-light mb-2 opacity-50" />
                      <p className="text-gray-300 italic font-serif text-base leading-relaxed">
                        {wine.tastingNotes}
                      </p>
                      {wine.critic && (
                        <p className="text-[9px] uppercase tracking-widest text-gray-500 mt-3 text-right">
                          — {wine.critic}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="pt-6">
                    <button className="flex items-center gap-3 text-white text-[10px] uppercase tracking-widest hover:text-bordeaux-light transition-colors group">
                      <span className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:border-bordeaux-light group-hover:scale-105 transition-all"><Plus size={14}/></span>
                      Fiche Technique
                    </button>
                  </div>
               </div>
             ))}
          </div>

          {/* CENTER: BOTTLE */}
          <div className="lg:col-span-4 flex justify-center items-center h-full relative pointer-events-none">
            
            {/* Backlight Glow (Reduced intensity for rigor) */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[550px] rounded-full blur-[90px] transition-all duration-1000 opacity-40 ${
              WINES[activeIndex].type === 'Red' ? 'bg-bordeaux' : 
              WINES[activeIndex].type === 'White' ? 'bg-amber-100/10' : 'bg-rose-500/10'
            }`}></div>
            
            <div className="relative w-full h-full flex items-center justify-center">
               {WINES.map((_, idx) => renderBottle(idx))}
            </div>

            {/* Floor Shadow */}
            <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 w-[120px] h-[15px] bg-black blur-xl rounded-[100%] opacity-90 z-0"></div>
          </div>

          {/* RIGHT: NAV */}
          <div className="lg:col-span-4 h-full flex flex-col justify-center pl-24 relative z-20">
            <div className="space-y-1 py-12">
              {WINES.map((wine, idx) => {
                if (Math.abs(scrollProgress - idx) > 4) return null;

                const style = getListStyle(idx);
                const isActive = activeIndex === idx;

                return (
                  <button 
                    key={idx}
                    onClick={() => scrollToWine(idx)}
                    className={`w-full text-right group py-2 pr-6 relative focus:outline-none will-change-transform`}
                    style={style}
                  >
                    <div className="flex flex-col items-end">
                        <span className={`block text-[8px] uppercase tracking-widest mb-1 transition-colors duration-300 ${isActive ? 'text-bordeaux-light' : 'text-gray-700 group-hover:text-gray-500'}`}>
                          {wine.appellation}
                        </span>
                        <span className={`block font-serif transition-all duration-300 leading-none ${isActive ? 'text-3xl text-white italic' : 'text-xl text-white/20 group-hover:text-white/50'}`}>
                          {wine.name}
                        </span>
                    </div>
                    
                    {/* Indicateur actif */}
                    <div 
                      className={`absolute right-0 top-1/2 -translate-y-1/2 w-[2px] bg-bordeaux-light transition-all duration-300 ${isActive ? 'h-6 opacity-100' : 'h-0 opacity-0'}`}
                    ></div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden absolute bottom-8 left-0 w-full flex justify-center gap-8 z-30">
          <button 
            onClick={() => scrollToWine(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center active:bg-bordeaux disabled:opacity-20 border border-white/10"
          >
            <ChevronUp size={20} />
          </button>
          <button 
            onClick={() => scrollToWine(activeIndex + 1)}
            disabled={activeIndex === WINES.length - 1}
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center active:bg-bordeaux disabled:opacity-20 border border-white/10"
          >
            <ChevronDown size={20} />
          </button>
        </div>

      </div>
    </div>
  );
};