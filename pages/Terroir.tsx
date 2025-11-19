import React, { useState, useEffect, useRef } from 'react';
import { Thermometer, Droplets, Sun, Layers, Wind, ArrowDown } from 'lucide-react';

export const Terroir: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer pour détecter quelle section de texte est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveLayer(index);
          }
        });
      },
      { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const layers = [
    {
      id: 0,
      depth: "Surface à -2m",
      name: "Graves Profondes",
      subtitle: "Chaleur & Drainage",
      desc: "Galets et graviers alluvionnaires chauds et filtrants. Ils emmagasinent la chaleur du jour (Effet Albedo) pour la restituer la nuit.",
      impact: "Maturité Cabernet",
      style: "Finesse & Fumé",
      bgClass: "bg-stone-800",
      texture: "https://www.transparenttextures.com/patterns/concrete-wall.png"
    },
    {
      id: 1,
      depth: "-2m à -5m",
      name: "Crasse de Fer",
      subtitle: "Minéralité & Complexité",
      desc: "Veines d'argiles ferrugineuses (oxydes de fer) agissant comme un catalyseur de complexité aromatique dans le sous-sol.",
      impact: "Oxydation Minérale",
      style: "Violette & Truffe",
      bgClass: "bg-orange-900",
      texture: "https://www.transparenttextures.com/patterns/cracked-concrete-wall.png"
    },
    {
      id: 2,
      depth: "Profondeur > 5m",
      name: "Socle Argileux",
      subtitle: "Réserve Hydrique",
      desc: "Sols froids à forte rétention d'eau. Ils agissent comme une éponge régulatrice, évitant le stress hydrique lors des étés secs.",
      impact: "Réserve Hydrique",
      style: "Puissance & Densité",
      bgClass: "bg-blue-900",
      texture: "https://www.transparenttextures.com/patterns/cubes.png"
    }
  ];

  return (
    <div className="bg-anthracite text-paper min-h-screen selection:bg-bordeaux selection:text-white">
      
      {/* === HERO === */}
      <section className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-block mb-6">
           <span className="text-[10px] uppercase tracking-[0.4em] text-bordeaux-light border border-bordeaux-light/30 px-4 py-2 rounded-full">Géologie</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-8">
          Une lecture dissidente <br/>
          <span className="italic text-white/60">du terroir de Lussac.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-serif italic">
          "Là où l'argile domine, la grave résiste."
        </p>
        <div className="mt-12 flex justify-center animate-bounce opacity-50">
          <ArrowDown className="text-white" />
        </div>
      </section>

      {/* === COUPE GÉOLOGIQUE (STICKY SCROLLYTELLING) === */}
      {/* Important : items-stretch sur le grid pour que la colonne gauche prenne toute la hauteur */}
      <section className="bg-[#0f0f0f] border-y border-white/5">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* COLONNE GAUCHE : VISUALISATION STICKY */}
            {/* Pas de overflow:hidden ici, sinon sticky casse */}
            <div className="lg:col-span-6 hidden lg:block">
               {/* Sticky Container : Reste collé en haut de la fenêtre */}
               <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden bg-black border-r border-white/5">
                  
                  <div className="absolute top-8 left-8 z-20">
                     <h2 className="font-serif text-3xl text-white">Voyage au <br/>Centre du Sol</h2>
                     <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-2">Coupe Géologique Interactive</p>
                  </div>

                  {/* La "Terre" qui bouge : On translate Y pour simuler la descente */}
                  <div 
                    className="absolute w-full transition-transform duration-1000 ease-in-out will-change-transform"
                    style={{ 
                      height: '300vh', // 3 couches de 100vh chacune
                      transform: `translateY(-${activeLayer * 33.33}%)` 
                    }}
                  >
                      {/* COUCHE 1 : GRAVES */}
                      <div className="h-[33.33%] w-full relative flex items-center justify-center bg-stone-900">
                         <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${layers[0].texture})` }}></div>
                         <div className="absolute inset-0 bg-black/20"></div>
                         <div className="z-10 text-center">
                           <h3 className="font-serif text-8xl text-white opacity-20 select-none tracking-tighter">GRAVES</h3>
                           <div className="mt-4 flex gap-2 justify-center">
                              <div className="w-4 h-4 rounded-full bg-stone-500 animate-pulse"></div>
                              <div className="w-3 h-3 rounded-full bg-stone-600"></div>
                              <div className="w-5 h-5 rounded-full bg-stone-400"></div>
                           </div>
                         </div>
                      </div>

                      {/* COUCHE 2 : FER */}
                      <div className="h-[33.33%] w-full relative flex items-center justify-center bg-[#3a1808]">
                         <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${layers[1].texture})` }}></div>
                         {/* Veines rouges */}
                         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/20 to-transparent"></div>
                         <h3 className="font-serif text-8xl text-orange-100 opacity-20 select-none z-10 tracking-tighter">FER</h3>
                      </div>

                      {/* COUCHE 3 : ARGILE */}
                      <div className="h-[33.33%] w-full relative flex items-center justify-center bg-[#0f172a]">
                         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${layers[2].texture})` }}></div>
                         <div className="absolute w-full h-1 bg-blue-500/10 top-1/4 blur-md"></div>
                         <div className="absolute w-full h-1 bg-blue-500/10 top-2/4 blur-md"></div>
                         <h3 className="font-serif text-8xl text-blue-100 opacity-20 select-none z-10 tracking-tighter">ARGILE</h3>
                      </div>
                  </div>

                  {/* Indicateur de profondeur (Barre latérale) */}
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/5">
                     <div 
                       className="w-full bg-bordeaux-light transition-all duration-1000 ease-in-out"
                       style={{ 
                         height: '33.33%',
                         transform: `translateY(${activeLayer * 100}%)`
                       }}
                     ></div>
                  </div>
                  
                  {/* Scanlines Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 z-40"></div>
               </div>
            </div>

            {/* COLONNE DROITE : TEXTE SCROLLABLE */}
            <div className="lg:col-span-6 bg-anthracite relative z-10">
               {layers.map((layer, index) => (
                 <div 
                   key={index}
                   data-index={index}
                   ref={(el) => { sectionRefs.current[index] = el; }}
                   className="min-h-screen flex flex-col justify-center p-12 lg:p-24 border-b border-white/5 last:border-b-0 transition-colors duration-700 hover:bg-white/[0.02]"
                 >
                    <div className="mb-6">
                       <span className="text-6xl font-serif text-white/10 block -mb-6 ml-[-10px]">0{index + 1}</span>
                       <h3 className="text-4xl md:text-5xl font-serif text-white relative z-10">{layer.name}</h3>
                    </div>
                    
                    <p className="text-bordeaux-light text-xs uppercase tracking-[0.2em] mb-8 font-bold flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-bordeaux-light"></span>
                      {layer.depth}
                    </p>
                    
                    <p className="text-white font-medium text-lg mb-4">{layer.subtitle}</p>

                    <p className="text-gray-400 font-light leading-relaxed text-lg mb-12 border-l border-white/10 pl-6">
                      {layer.desc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/40 p-6 border border-white/5 hover:border-white/20 transition-colors">
                        <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-2">Impact</p>
                        <p className="text-white font-serif text-xl">{layer.impact}</p>
                      </div>
                      <div className="bg-black/40 p-6 border border-white/5 hover:border-white/20 transition-colors">
                         <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-2">Style</p>
                         <p className="text-white font-serif text-xl">{layer.style}</p>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* === LE PARADOXE FROID (DATA) === */}
      <section className="py-32 bg-stone relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
               <div>
                  <h2 className="font-serif text-5xl text-white mb-6 leading-tight">Le Paradoxe Froid</h2>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    Situé dans un secteur tardif, la Grenière transforme sa fraîcheur historique en atout majeur face au réchauffement climatique.
                  </p>
               </div>
               <div className="flex justify-end">
                  <div className="bg-white/5 p-6 backdrop-blur-sm border border-white/10 text-right">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500">Station Météo</p>
                    <p className="text-white text-lg mt-1 font-serif">Moyenne 2014-2024</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
               {/* Stat 1 */}
               <div className="bg-anthracite p-12 group hover:bg-white/5 transition-colors relative">
                  <Thermometer className="w-8 h-8 text-bordeaux-light mb-8" strokeWidth={1} />
                  <p className="text-6xl font-serif text-white mb-4">-2°C</p>
                  <p className="text-xs uppercase tracking-widest text-bordeaux-light mb-6">Différentiel vs St-Émilion</p>
                  <p className="text-sm text-gray-400 font-light">Induit une maturation lente, préservant l'acidité naturelle.</p>
               </div>
               
               {/* Stat 2 */}
               <div className="bg-anthracite p-12 group hover:bg-white/5 transition-colors relative">
                  <Droplets className="w-8 h-8 text-bordeaux-light mb-8" strokeWidth={1} />
                  <p className="text-6xl font-serif text-white mb-4">5</p>
                  <p className="text-xs uppercase tracking-widest text-bordeaux-light mb-6">Nappes Phréatiques</p>
                  <p className="text-sm text-gray-400 font-light">Une résilience totale face aux canicules récentes (2018, 2022).</p>
               </div>

               {/* Stat 3 */}
               <div className="bg-anthracite p-12 group hover:bg-white/5 transition-colors relative">
                  <Sun className="w-8 h-8 text-bordeaux-light mb-8" strokeWidth={1} />
                  <p className="text-6xl font-serif text-white mb-4">Ouest</p>
                  <p className="text-xs uppercase tracking-widest text-bordeaux-light mb-6">Exposition Dominante</p>
                  <p className="text-sm text-gray-400 font-light">Soleil du soir, plus doux, évitant les brûlures du raisin.</p>
               </div>
            </div>
         </div>
      </section>

      {/* === L'ATOUT CABERNET === */}
      <section className="py-32 bg-anthracite border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
               
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                  <div className="lg:col-span-5">
                     <span className="text-bordeaux-light text-xs uppercase tracking-[0.3em] font-bold block mb-6">Vision 2050</span>
                     <h2 className="font-serif text-5xl text-white mb-8 leading-none">L'Atout <br/><span className="italic text-gray-500">Cabernet</span></h2>
                     <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
                       La stratégie variétale est notre réponse à l'équation : <br/>
                       <span className="text-white font-normal border-b border-bordeaux-light pb-1 inline-block mt-2">Graves + Fraîcheur = Cabernet</span>
                     </p>
                     <p className="text-gray-400 font-light text-sm mb-12 leading-relaxed">
                       Avec 20% de Cabernet Sauvignon, nous "verticalisons" nos vins. Le Cabernet apporte l'acidité structurante qui contrebalance l'opulence du Merlot.
                     </p>
                     
                     <div className="bg-bordeaux/5 border-l-2 border-bordeaux p-8">
                        <p className="font-serif text-xl text-white italic">
                          "Planter davantage de Cabernet est notre assurance-vie agronomique pour les 50 prochaines années."
                        </p>
                     </div>
                  </div>

                  <div className="lg:col-span-7 relative pl-0 lg:pl-20">
                     {/* Graphique Stylisé */}
                     <div className="space-y-12">
                        
                        <div className="group">
                           <div className="flex justify-between items-end mb-3">
                              <span className="text-4xl font-serif text-white">70%</span>
                              <span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Merlot</span>
                           </div>
                           <div className="h-px w-full bg-white/10">
                              <div className="h-[2px] bg-white w-[0%] group-hover:w-[70%] transition-all duration-1000 ease-out"></div>
                           </div>
                           <p className="text-sm text-gray-500 mt-3 opacity-50 group-hover:opacity-100 transition-opacity">Rondeur & Fruit</p>
                        </div>

                        <div className="group">
                           <div className="flex justify-between items-end mb-3">
                              <span className="text-4xl font-serif text-bordeaux-light">20%</span>
                              <span className="text-xs uppercase tracking-widest text-bordeaux-light">Cabernet Sauvignon</span>
                           </div>
                           <div className="h-px w-full bg-white/10">
                              <div className="h-[2px] bg-bordeaux-light w-[0%] group-hover:w-[20%] transition-all duration-1000 ease-out delay-100"></div>
                           </div>
                           <p className="text-sm text-gray-500 mt-3 opacity-50 group-hover:opacity-100 transition-opacity">Structure & Garde</p>
                        </div>

                        <div className="group">
                           <div className="flex justify-between items-end mb-3">
                              <span className="text-4xl font-serif text-white/40">10%</span>
                              <span className="text-xs uppercase tracking-widest text-white/40">Cabernet Franc</span>
                           </div>
                           <div className="h-px w-full bg-white/10">
                              <div className="h-[2px] bg-white/40 w-[0%] group-hover:w-[10%] transition-all duration-1000 ease-out delay-200"></div>
                           </div>
                           <p className="text-sm text-gray-500 mt-3 opacity-50 group-hover:opacity-100 transition-opacity">Finesse Florale</p>
                        </div>

                     </div>
                     <div className="absolute right-4 -top-14 lg:-right-16 lg:-top-22 bg-stone-900 p-10 border border-white/10 shadow-2xl rotate-6">
                        <p className="font-serif text-7xl text-white leading-none">15</p>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">Hectares</p>
                     </div>
               </div>
         </div>
      </section>

      {/* === INGÉNIERIE === */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
         <div className="text-center mb-20">
           <span className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-4 block">Savoir-Faire</span>
           <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ingénierie Œnologique</h2>
           <p className="italic text-gray-400">"Le contenant façonne le contenu"</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Béton */}
            <div className="bg-stone p-12 border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="w-16 h-16 bg-stone-800 rounded-full mb-8 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <Layers className="text-white" size={24} />
               </div>
               <h3 className="font-serif text-3xl text-white mb-2">Béton Brut</h3>
               <p className="text-[10px] uppercase tracking-widest text-bordeaux-light mb-8">Inertie Thermique</p>
               <p className="text-gray-400 font-light leading-relaxed">
                 Utilisé pour 80% de la production. L'épaisseur du béton garantit une fermentation douce, sans chocs thermiques. C'est le gardien de la pureté du fruit.
               </p>
            </div>

            {/* Bois */}
            <div className="bg-stone p-12 border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="w-16 h-16 bg-amber-900/20 rounded-full mb-8 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <Wind className="text-amber-600" size={24} />
               </div>
               <h3 className="font-serif text-3xl text-white mb-2">Chêne Français</h3>
               <p className="text-[10px] uppercase tracking-widest text-amber-600 mb-8">Micro-Oxygénation</p>
               <p className="text-gray-400 font-light leading-relaxed">
                 Réservé aux cuvées Esthète & Chartreuse. La porosité du chêne permet une respiration lente du vin, polymérisant les tannins pour un toucher de bouche soyeux.
               </p>
            </div>
         </div>
      </section>

    </div>
  );
};