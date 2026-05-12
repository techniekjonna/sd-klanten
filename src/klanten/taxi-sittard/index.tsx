import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tarieven } from './pages/Tarieven';
import { ZakelijkVervoer } from './pages/ZakelijkVervoer';
import { Luchthaven } from './pages/Luchthaven';
import { Rolstoeltaxi } from './pages/Rolstoeltaxi';
import { Contact } from './pages/Contact';

export const TaxiSittard = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/zakelijk" element={<ZakelijkVervoer />} />
    <Route path="/luchthaven" element={<Luchthaven />} />
    <Route path="/rolstoeltaxi" element={<Rolstoeltaxi />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
