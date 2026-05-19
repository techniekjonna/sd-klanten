import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Vacatures } from './pages/Vacatures';
import { Contact } from './pages/Contact';

export const TaxiComfortMaastricht = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/vacatures" element={<Vacatures />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
