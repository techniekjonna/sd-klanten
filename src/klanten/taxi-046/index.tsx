import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { HetBedrijf } from './pages/HetBedrijf';
import { Vervoer } from './pages/Vervoer';
import { Punten } from './pages/Punten';
import { Tarieven } from './pages/Tarieven';
import { Airport } from './pages/Airport';
import { Bestel } from './pages/Bestel';
import { Contact } from './pages/Contact';

export const Taxi046 = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/het-bedrijf" element={<HetBedrijf />} />
    <Route path="/vervoer" element={<Vervoer />} />
    <Route path="/punten" element={<Punten />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/airport" element={<Airport />} />
    <Route path="/bestel" element={<Bestel />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
