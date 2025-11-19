import React from 'react';
import { TIMELINE, FAMILY_PROFILES } from '../constants';

export const History: React.FC = () => {
  return (
    <div className="bg-anthracite overflow-hidden min-h-screen text-paper">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black border-b border-white/5">
        <div className="text-center px-6">
          <h1 className="font-serif text-6xl md:text-8xl text-paper mb-6">LE FIL ROUGE</h1>
          <p className="text-bordeaux-light text-xs uppercase tracking-[0.3em]">L'Alliance des Générations</p>
        </div>
      </section>

      {/* The Duo Section: Le Bâtisseur & L'Esthète */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Jean-Pierre */}
            <div className="bg-stone p-12 border border-white/5 relative overflow-hidden group hover:border-bordeaux/30 transition-colors">
               <div className="absolute top-0 right-0 p-6 opacity-10 font-serif text-9xl leading-none select-none">IV</div>
               <h3 className="text-bordeaux-light uppercase tracking-widest text-xs font-bold mb-4">{FAMILY_PROFILES[0].title}</h3>
               <h2 className="font-serif text-4xl text-white mb-8">{FAMILY_PROFILES[0].name}</h2>
               <p className="text-gray-400 font-light leading-relaxed text-lg">
                 {FAMILY_PROFILES[0].description}
               </p>
            </div>

            {/* Audren */}
            <div className="bg-stone p-12 border border-white/5 relative overflow-hidden group hover:border-bordeaux/30 transition-colors">
               <div className="absolute top-0 right-0 p-6 opacity-10 font-serif text-9xl leading-none select-none">V</div>
               <h3 className="text-bordeaux-light uppercase tracking-widest text-xs font-bold mb-4">{FAMILY_PROFILES[1].title}</h3>
               <h2 className="font-serif text-4xl text-white mb-8">{FAMILY_PROFILES[1].name}</h2>
               <p className="text-gray-400 font-light leading-relaxed text-lg">
                 {FAMILY_PROFILES[1].description}
               </p>
            </div>

         </div>
      </section>

      {/* The Roots Intro */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
         <h2 className="font-serif text-4xl text-white mb-6">Les Racines</h2>
         <p className="text-gray-400 font-light leading-relaxed text-lg">
            Tout commence avec les moines cisterciens de l'Abbaye de Faise au XVIIIe siècle. Ces "ingénieurs du sol" avaient déjà identifié la croupe graveleuse de la Grenière comme un terroir d'élite. Mais l'acte fondateur de la famille Dubreuil a lieu en 1914. Ce passage de "fermier" à "maître" forge l'ADN du domaine.
         </p>
      </section>

      {/* Timeline: Archives 1914 */}
      <section className="py-24 max-w-5xl mx-auto px-6 relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2"></div>
        
        <div className="text-center mb-20 relative z-10">
           <span className="bg-anthracite px-6 py-2 font-serif text-3xl text-white border border-white/10 inline-block">Archives 1914</span>
           <p className="text-bordeaux-light text-xs uppercase tracking-widest mt-4">Une Odyssée Viticole</p>
        </div>

        <div className="space-y-24">
          {TIMELINE.map((event, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
               
               {/* Year Bubble */}
               <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-bordeaux border-4 border-anthracite rounded-full z-20 mt-1.5 md:mt-0"></div>

               {/* Content Side */}
               <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 text-left">
                  <span className="text-bordeaux-light font-bold text-sm mb-2 block">{event.year}</span>
                  <h3 className="font-serif text-2xl text-white mb-4">{event.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {event.description}
                  </p>
               </div>

               {/* Image Side (Empty for layout balance or actual image) */}
               <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 hidden md:block">
                  {/* Placeholder for timeline imagery if needed, kept subtle */}
                  <div className="w-full h-[200px] bg-white/5 border border-white/5 relative overflow-hidden opacity-50 hover:opacity-100 transition-opacity">
                     <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
               </div>

            </div>
          ))}
        </div>

      </section>

      {/* Footer Image */}
      <section className="h-[60vh] w-full relative overflow-hidden">
         <div className="absolute inset-0 bg-bordeaux/20 mix-blend-multiply z-10"></div>
         <img src="https://images.unsplash.com/photo-1560167016-022b78a0258e?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale contrast-150" alt="Vignes" />
         <div className="absolute inset-0 flex items-center justify-center z-20">
            <p className="font-serif text-4xl md:text-6xl text-white italic text-center">"L'Avenir s'écrit à deux."</p>
         </div>
      </section>
    </div>
  );
};