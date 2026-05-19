import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Diensten } from './pages/Diensten';
import { OverOns } from './pages/OverOns';
import { Tarieven } from './pages/Tarieven';
import { Bestellen } from './pages/Bestellen';
import { Contact } from './pages/Contact';

export const TaxibedrijfVanDerVarst = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/bestellen" element={<Bestellen />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
