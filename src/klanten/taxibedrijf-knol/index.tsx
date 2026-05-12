import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Diensten } from './pages/Diensten';
import { OverOns } from './pages/OverOns';
import { Contact } from './pages/Contact';

export const TaxibedrijfKnol = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
