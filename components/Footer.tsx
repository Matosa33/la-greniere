import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div>
          <h2 className="font-serif text-2xl text-white mb-2">RESSOURCES PARTENAIRES</h2>
          <p className="text-xs uppercase tracking-widest text-crimson/50 max-w-xs mt-4 leading-relaxed">
            Pour nos ambassadeurs, cavistes, et importateurs. Accédez à l'essentiel, sans filtre.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-[10px] uppercase tracking-widest">
          <a href="#" className="hover:text-crimson transition-colors">Fiches Techniques PDF</a>
          <a href="#" className="hover:text-crimson transition-colors">Packshots Haute Définition</a>
          <a href="#" className="hover:text-crimson transition-colors">Revue de Presse</a>
        </div>

        <div className="text-right">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-white/10 text-xs uppercase tracking-widest hover:bg-crimson hover:border-crimson hover:text-white transition-all rounded-sm">
            Connexion Espace Pro
          </a>
        </div>

      </div>
      <div className="text-center mt-20 opacity-20 text-[9px] uppercase tracking-[0.2em]">
        L'abus d'alcool est dangereux pour la santé.
      </div>
    </footer>
  );
};