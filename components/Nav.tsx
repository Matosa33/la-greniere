import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'L\'Onde de Choc', path: '/', label: 'Accueil' },
    { name: 'Le Socle', path: '/terroir', label: 'Terroir' },
    { name: 'La Galerie', path: '/vins', label: 'Vins' },
    { name: 'Le Fil Rouge', path: '/histoire', label: 'Héritage' },
    { name: 'L\'Immersion', path: '/visite', label: 'Visite' },
  ];

  return (
    <>
      {/* Brand Mark - AGRANDI */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference">
        <Link to="/" className="group block">
          <div className="flex flex-col items-start">
            <span className="font-serif text-3xl md:text-4xl text-white font-bold tracking-tighter leading-none group-hover:text-bordeaux-light transition-colors">
              La Grenière
            </span>
            <span className="text-xs uppercase tracking-[0.4em] text-white/60 mt-2 group-hover:text-bordeaux-light/80 transition-colors font-bold">
              Lussac
            </span>
          </div>
        </Link>
      </div>

      {/* Menu Trigger - AGRANDI */}
      <button 
        onClick={() => setIsOpen(true)} 
        className={`fixed top-6 right-8 z-50 group flex items-center gap-4 mix-blend-difference transition-all duration-500 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <span className="hidden md:block text-xs uppercase tracking-[0.3em] text-white font-bold group-hover:text-bordeaux-light transition-colors">
          Menu
        </span>
        <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center group-hover:border-bordeaux-light group-hover:rotate-90 transition-all duration-500 backdrop-blur-sm">
          <Menu size={24} className="text-white group-hover:text-bordeaux-light" />
        </div>
      </button>

      {/* Overlay */}
      <div className={`fixed inset-0 z-[60] bg-anthracite transition-all duration-1000 cubic-bezier(0.77, 0, 0.175, 1) ${isOpen ? 'clip-path-full' : 'clip-path-none pointer-events-none'}`} style={{ clipPath: isOpen ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)' }}>
        
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-8 right-8 z-50 flex items-center gap-4 group"
        >
          <span className="hidden md:block text-xs uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">
            Fermer
          </span>
          <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:border-bordeaux-light group-hover:rotate-90 transition-all duration-500">
            <X size={24} className="text-white/50 group-hover:text-bordeaux-light" />
          </div>
        </button>

        <div className="h-full w-full flex items-center justify-center relative overflow-hidden">
          {/* Red Ambient Glow (Darker Bordeaux) */}
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-bordeaux/10 rounded-full blur-[150px] -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl px-6 h-full py-24">
            
            {/* Left Info */}
            <div className="hidden md:flex col-span-4 flex-col justify-between border-r border-white/5 pr-12 py-12">
               <div>
                 <p className="text-xs uppercase tracking-[0.3em] text-bordeaux-light mb-4">Contact</p>
                 <p className="text-white/60 font-light text-sm leading-relaxed">
                   33570 Lussac, France<br/>
                   +33 (0)5 57 24 16 87
                 </p>
               </div>
               <div>
                 <p className="font-serif italic text-3xl text-white/40 leading-snug">
                   "Ceci n'est pas du vin.<br/>C'est le sang de la pierre."
                 </p>
               </div>
            </div>

            {/* Links */}
            <div className="col-span-8 flex flex-col justify-center md:pl-24 space-y-4">
              {links.map((link, index) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center"
                >
                  {/* Numéro X4 (Grande taille, Serif Italic) */}
                  <span className="font-serif italic text-5xl md:text-6xl text-bordeaux-light absolute -left-24 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-all duration-500 -translate-x-8 group-hover:translate-x-0">
                    0{index + 1}
                  </span>
                  
                  <span className={`font-serif text-5xl md:text-7xl lg:text-8xl transition-all duration-500 ${location.pathname === link.path ? 'text-bordeaux-light italic' : 'text-white/20 hover:text-white hover:italic'}`}>
                    {link.name}
                  </span>
                  
                  <span className="ml-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-bordeaux-light group-hover:translate-x-4">
                    <ChevronRight size={48} strokeWidth={0.5} />
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};