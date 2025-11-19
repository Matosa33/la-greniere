import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Terroir } from './pages/Terroir';
import { Wines } from './pages/Wines';
import { Visit } from './pages/Visit';
import { History } from './pages/History';
import { Cursor } from './components/Cursor';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ce composant gère la remise à zéro du scroll */}
      <div className="min-h-screen bg-anthracite text-paper font-sans selection:bg-bordeaux selection:text-white">
        <Cursor />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terroir" element={<Terroir />} />
            <Route path="/vins" element={<Wines />} />
            <Route path="/visite" element={<Visit />} />
            <Route path="/histoire" element={<History />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;