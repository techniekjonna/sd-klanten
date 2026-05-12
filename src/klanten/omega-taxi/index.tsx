import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TaxiService } from './pages/Diensten';
import { ZakelijkeService } from './pages/OverOns';
import { AirportService } from './pages/Contact';
import { Bestellen } from './pages/Bestellen';

export const OmegaTaxi = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/taxi-service" element={<TaxiService />} />
    <Route path="/zakelijke-service" element={<ZakelijkeService />} />
    <Route path="/airport-service" element={<AirportService />} />
    <Route path="/bestellen" element={<Bestellen />} />
  </Routes>
);
