import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Diensten } from './pages/Diensten';
import { Luchthaven } from './pages/Luchthaven';
import { Tarieven } from './pages/Tarieven';
import { OverOns } from './pages/OverOns';
import { Contact } from './pages/Contact';

export const PackTaxi = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/luchthaven" element={<Luchthaven />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
