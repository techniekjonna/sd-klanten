import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SoortenVervoer } from './pages/SoortenVervoer';
import { RitBoeken } from './pages/RitBoeken';
import { Luchthavens } from './pages/Luchthavens';
import { Contact } from './pages/Contact';

export const TaxiCompleetMaastricht = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/soorten-vervoer" element={<SoortenVervoer />} />
    <Route path="/rit-boeken" element={<RitBoeken />} />
    <Route path="/luchthavens" element={<Luchthavens />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
