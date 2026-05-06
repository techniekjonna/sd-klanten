import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Contact } from './pages/Contact';
import { Afspraak } from './pages/Afspraak';

export const SchoonmaakbedrijfErwin = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/afspraak" element={<Afspraak />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
