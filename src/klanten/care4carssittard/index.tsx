import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Werkzaamheden } from './pages/Werkzaamheden';
import { OverOns } from './pages/OverOns';
import { Contact } from './pages/Contact';

export const Care4CarsSittard = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/werkzaamheden" element={<Werkzaamheden />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
