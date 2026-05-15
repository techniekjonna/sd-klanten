import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { OverOns } from './pages/OverOns';
import { Contact } from './pages/Contact';
import { ZakelijkVervoer } from './pages/ZakelijkVervoer';
import { Airportvervoer } from './pages/Airportvervoer';
import { Treinvervoer } from './pages/Treinvervoer';
import { Diversen } from './pages/Diversen';

export const TaxiMC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/zakelijk-vervoer" element={<ZakelijkVervoer />} />
    <Route path="/airportvervoer" element={<Airportvervoer />} />
    <Route path="/treinvervoer" element={<Treinvervoer />} />
    <Route path="/diversen" element={<Diversen />} />
    <Route path="/over-ons" element={<OverOns />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
