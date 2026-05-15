import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tarieven } from './pages/Tarieven';
import { ZakelijkVervoer } from './pages/ZakelijkVervoer';
import { Luchthaven } from './pages/Luchthaven';
import { Contact } from './pages/Contact';

export const TaxibedrijfSavelkoul = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/zakelijk" element={<ZakelijkVervoer />} />
    <Route path="/luchthaven" element={<Luchthaven />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
