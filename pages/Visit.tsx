import React from 'react';
import { Send } from 'lucide-react';

export const Visit: React.FC = () => {
  return (
    <div className="min-h-screen bg-anthracite text-paper">
      
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0f0f0f]">
        <div className="text-center px-6 z-10">
          <span className="text-crimson uppercase tracking-[0.3em] text-xs block mb-4 font-bold">Expérience</span>
          <h1 className="font-serif text-5xl md:text-7xl text-paper mb-8">
            LE LIEU
          </h1>
          <p className="text-gray-400 text-lg font-light italic max-w-2xl mx-auto">
            "Le vin est une histoire que l'on boit, mais le domaine est une histoire que l'on vit."
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <div className="space-y-10">
          <h2 className="font-serif text-4xl text-white">La Porte Ouverte</h2>
          <div className="w-16 h-[2px] bg-crimson"></div>
          <p className="text-gray-400 leading-relaxed font-light">
            Nous vous ouvrons les portes de notre intimité. Venez marcher sur ces graves qui font la renommée de nos crus. Venez sentir l'odeur du chêne merrain dans la pénombre du chai à barriques. Venez toucher l'écorce des arbres de 400 ans qui veillent sur le parc.
          </p>
          <p className="text-gray-400 leading-relaxed font-light">
            Ici, l'accueil n'est pas une industrie, c'est une tradition familiale. Que vous soyez néophyte curieux ou collectionneur averti, la famille Dubreuil vous reçoit pour partager plus qu'une dégustation : un moment de vie suspendu.
          </p>
        </div>

        <div className="bg-stone p-10 border border-white/5">
          <h3 className="text-white font-serif text-2xl mb-8">Réserver votre parenthèse</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nom</label>
              <input type="text" className="w-full bg-anthracite border-b border-white/20 p-3 text-white focus:border-crimson focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
              <input type="email" className="w-full bg-anthracite border-b border-white/20 p-3 text-white focus:border-crimson focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Intention</label>
              <select className="w-full bg-anthracite border-b border-white/20 p-3 text-white focus:border-crimson focus:outline-none transition-colors">
                 <option>Visite & Dégustation</option>
                 <option>Allocation Professionnelle</option>
                 <option>Presse</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-crimson text-white py-4 uppercase tracking-widest font-bold hover:bg-white hover:text-anthracite transition-colors flex justify-center items-center mt-8">
              Envoyer <Send size={16} className="ml-2" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};