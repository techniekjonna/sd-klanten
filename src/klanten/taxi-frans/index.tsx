import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Contact } from './pages/Contact';
import { Europa } from './pages/Europa';

export const TaxiFrans = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/europa" element={<Europa />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
