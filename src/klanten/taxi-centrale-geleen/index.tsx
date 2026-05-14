import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Bestellen } from './pages/Bestellen';
import { Tarieven } from './pages/Tarieven';
import { AirportService } from './pages/AirportService';
import { Contact } from './pages/Contact';

export const TaxiCentraleGeleen = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/bestellen" element={<Bestellen />} />
    <Route path="/tarieven" element={<Tarieven />} />
    <Route path="/airport-service" element={<AirportService />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
