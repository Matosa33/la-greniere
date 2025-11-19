import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, Award, Leaf, Users, Star } from 'lucide-react';
import { IMAGES } from '../constants';

export const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-anthracite text-paper min-h-screen w-full overflow-x-hidden relative">
      
      {/* === HERO: L'ONDE DE CHOC === */}
      <section className="relative h-[95vh] w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Visual: Stone Texture with Deep Bordeaux Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a0a0a]/60 z-10"></div>
          <img 
            src={IMAGES.terroir_texture}
            alt="Terroir Graves" 
            className="w-full h-full object-cover opacity-80 animate-slow-pan"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-transparent to-bordeaux/20 z-20 mix-blend-overlay"></div>
        </div>

        {/* Typography */}
        <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
          <p className="text-bordeaux-light text-xs md:text-sm uppercase tracking-[0.6em] mb-6 animate-reveal-up font-bold drop-shadow-lg">
            Depuis 1914
          </p>
          <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.8] text-paper tracking-tighter animate-reveal-up mix-blend-difference mb-8">
            L'EXCEPTION <br/>
            <span className="italic text-white/90">TELLURIQUE</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 animate-reveal-up animation-delay-200">
            <Link to="/vins" className="group relative px-8 py-3 border border-white/20 rounded-sm overflow-hidden transition-all hover:border-bordeaux-light">
               <div className="absolute inset-0 w-0 bg-bordeaux-light transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
               <span className="relative text-xs uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors">Découvrir les vins</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-60">
          <span className="text-[9px] uppercase tracking-[0.3em]">Explorer</span>
          <div className="h-16 w-[1px] bg-white/20 overflow-hidden">
            <div className="w-full h-full bg-bordeaux-light animate-float"></div>
          </div>
        </div>
      </section>

      {/* === SECTION 2: THE TRUST GRID (LES PILIERS) === */}
      <section className="relative z-20 bg-stone border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
          
          {/* Pilier 1: Famille */}
          <div className="p-12 flex flex-col items-center text-center group hover:bg-white/5 transition-colors duration-500 reveal-on-scroll">
            <Users className="w-8 h-8 text-bordeaux-light mb-6 opacity-80" strokeWidth={1} />
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">5 Générations</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-bordeaux-light mb-4">Continuité Familiale</p>
            <p className="text-sm text-gray-400 font-light max-w-xs leading-relaxed">
              Depuis 1914, la famille Dubreuil cultive une indépendance farouche et une connaissance charnelle du parcellaire.
            </p>
          </div>

          {/* Pilier 2: Terre */}
          <div className="p-12 flex flex-col items-center text-center group hover:bg-white/5 transition-colors duration-500 reveal-on-scroll animation-delay-200">
            <Leaf className="w-8 h-8 text-bordeaux-light mb-6 opacity-80" strokeWidth={1} />
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">15 Hectares</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-bordeaux-light mb-4">Viticulture Raisonnée</p>
            <p className="text-sm text-gray-400 font-light max-w-xs leading-relaxed">
              Certifié <span className="text-white font-normal">HVE 3</span>. Une gestion chirurgicale du vignoble pour une biodiversité préservée et des vins vivants.
            </p>
          </div>

          {/* Pilier 3: Excellence */}
          <div className="p-12 flex flex-col items-center text-center group hover:bg-white/5 transition-colors duration-500 reveal-on-scroll animation-delay-300">
            <Award className="w-8 h-8 text-bordeaux-light mb-6 opacity-80" strokeWidth={1} />
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">Reconnaissance</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-bordeaux-light mb-4">Presse & Critique</p>
            <div className="flex flex-col gap-1 text-sm text-gray-400 font-light">
               <span>Guide Hachette</span>
               <span>Bettane & Desseauve</span>
               <span>Andreas Larsson</span>
            </div>
          </div>

        </div>
      </section>

      {/* === SECTION 3: LE MANIFESTE (CONTEXTE) === */}
      <section className="relative z-20 bg-anthracite py-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bordeaux/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <div className="lg:col-span-7 reveal-on-scroll">
            <span className="text-bordeaux-light text-xs uppercase tracking-[0.4em] font-bold block mb-6">Le Terroir</span>
            <h2 className="text-4xl md:text-6xl font-serif text-paper leading-[1.1] mb-8">
              Lussac en surface. <br/>
              <span className="text-bordeaux italic">Grand Cru en profondeur.</span>
            </h2>
            <div className="w-20 h-[1px] bg-white/20 mb-8"></div>
            <p className="text-lg font-light text-gray-400 leading-relaxed mb-8 text-balance">
              Nous ne sommes pas un simple point sur la carte du Libournais. Alors que l'appellation dort sur des lits d'argile froide, le Château de la Grenière s'éveille sur une croupe de graves brûlantes.
            </p>
            <Link to="/terroir" className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white hover:text-bordeaux-light transition-colors group">
              Comprendre l'anomalie <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-5 reveal-on-scroll relative h-[600px] w-full">
             {/* Composition Image */}
             <div className="absolute inset-0 bg-stone image-loading-bg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1528823872057-9c018a7a7553?q=80&w=1000&auto=format&fit=crop" 
                  alt="Vignes et Sol"
                  className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-[2s]"
                />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-8 -left-8 bg-bordeaux p-6 shadow-2xl shadow-black/50 max-w-[200px]">
               <p className="font-serif text-2xl text-white italic leading-none mb-2">"Ceci n'est pas de l'argile."</p>
               <p className="text-[9px] uppercase tracking-widest text-white/60">Audren Dubreuil</p>
             </div>
          </div>

        </div>
      </section>
      
      {/* === SECTION 4: L'ALLIANCE (TEASER HISTOIRE) === */}
      <section className="py-32 bg-stone relative">
         <div className="max-w-5xl mx-auto px-6 text-center reveal-on-scroll">
            <span className="text-bordeaux-light text-xs uppercase tracking-[0.4em] font-bold block mb-6">L'Héritage</span>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-12">L'Alliance des Générations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left mb-12">
               <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-white">Jean-Pierre & Audren</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    L'un a bâti les murs et ouvert le monde. L'autre sculpte le vin et cherche la précision. Une alchimie père-fils qui propulse la Grenière dans le XXIe siècle.
                  </p>
               </div>
               <div className="h-[300px] bg-anthracite relative overflow-hidden group">
                   <img 
                     src={IMAGES.jp_audren}
                     alt="Père et Fils"
                     className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 grayscale"
                   />
               </div>
            </div>
            
            <Link to="/histoire" className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white hover:text-bordeaux-light transition-colors">
              Découvrir leur histoire <MoveRight size={16} />
            </Link>
         </div>
      </section>

      {/* === SECTION 5: FOCUS CUVÉE (HAUTE COUTURE) === */}
      <section className="bg-[#0f0f0f] py-40 px-6 relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll relative z-10">
            <div>
              <span className="text-bordeaux-light text-xs uppercase tracking-[0.4em] font-bold block mb-4">Haute Couture</span>
              <h3 className="font-serif text-5xl md:text-7xl text-white">Esthète</h3>
            </div>
            <Link to="/vins" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors mb-4">
              Voir toute la collection <MoveRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative">
            
            {/* Technical Info */}
            <div className="md:col-span-4 space-y-8 md:pl-12 reveal-on-scroll order-2 md:order-1 relative z-10">
               <div className="space-y-2">
                 <p className="text-xs uppercase tracking-widest text-gray-500">Production</p>
                 <p className="text-xl text-white font-serif">1000 Bouteilles</p>
               </div>
               <div className="w-full h-[1px] bg-white/10"></div>
               <div className="space-y-2">
                 <p className="text-xs uppercase tracking-widest text-gray-500">Vinification</p>
                 <p className="text-xl text-white font-serif">Intégrale en fûts de 500L</p>
               </div>
               <div className="w-full h-[1px] bg-white/10"></div>
               <div className="space-y-2">
                 <p className="text-xs uppercase tracking-widest text-gray-500">Profil</p>
                 <p className="text-xl text-white font-serif">Velours, Cèdre, Mûre</p>
               </div>
            </div>

            {/* Bottle Visual (Levitating, No Box) */}
            <div className="md:col-span-4 flex justify-center relative order-1 md:order-2 reveal-on-scroll">
               {/* Glow Behind */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-bordeaux/30 blur-[100px] rounded-full"></div>
               
               {/* Bottle */}
               <div className="relative z-20 h-[500px] w-auto transform transition-transform duration-1000 hover:scale-105">
                  <img 
                    src={IMAGES.esthete}
                    alt="Esthète Bottle"
                    className="h-full w-auto object-contain drop-shadow-2xl"
                  />
               </div>

               {/* Floor Shadow */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[20px] bg-black/80 blur-xl rounded-[100%]"></div>
            </div>

            {/* Description */}
            <div className="md:col-span-4 md:pr-12 reveal-on-scroll order-3 relative z-10">
               <p className="text-gray-300 font-light leading-relaxed text-lg mb-6">
                 "La rareté n'est pas un vain mot. Ce vin est né d'un fantasme : celui de la douceur absolue. C'est la main de fer dans le gant de soie."
               </p>
               <div className="flex gap-2">
                 <Star className="w-4 h-4 text-bordeaux-light fill-bordeaux-light" />
                 <Star className="w-4 h-4 text-bordeaux-light fill-bordeaux-light" />
                 <Star className="w-4 h-4 text-bordeaux-light fill-bordeaux-light" />
                 <Star className="w-4 h-4 text-bordeaux-light fill-bordeaux-light" />
                 <Star className="w-4 h-4 text-bordeaux-light fill-bordeaux-light" />
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};