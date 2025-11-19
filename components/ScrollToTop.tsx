import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // On utilise 'instant' pour éviter l'effet de défilement visible lors d'un changement de page complet.
    // On veut que l'utilisateur arrive directement sur le Hero.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};