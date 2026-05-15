import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Diensten } from './pages/Diensten';
import { AirportService } from './pages/AirportService';
import { ParticulierVervoer } from './pages/ParticulierVervoer';
import { Hotelvervoer } from './pages/Hotelvervoer';
import { VervoerOpMaat } from './pages/VervoerOpMaat';
import { Contact } from './pages/Contact';

export const GlobalTaxiHeerlen = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/diensten" element={<Diensten />} />
    <Route path="/diensten/airport-service" element={<AirportService />} />
    <Route path="/diensten/particulier-vervoer" element={<ParticulierVervoer />} />
    <Route path="/diensten/hotelvervoer" element={<Hotelvervoer />} />
    <Route path="/diensten/vervoer-op-maat" element={<VervoerOpMaat />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
