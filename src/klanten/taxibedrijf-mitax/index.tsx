import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { Tarieven } from './pages/Contact';
import { Boeken } from './pages/Boeken';

export const TaxibedrijfMitax = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/boeken" element={<Boeken />} />
  </Routes>
);
