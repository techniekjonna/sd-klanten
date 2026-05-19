import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Airportservice } from './pages/Airportservice';
import { Zakelijk } from './pages/Zakelijk';
import { Particulier } from './pages/Particulier';
import { Groepsvervoer } from './pages/Groepsvervoer';
import { Schoolvervoer } from './pages/Schoolvervoer';
import { Kortingskaart } from './pages/Kortingskaart';
import { ReserveerAirporttaxi } from './pages/ReserveerAirporttaxi';
import { PrijzenAirportservice } from './pages/PrijzenAirportservice';
import { Contact } from './pages/Contact';

export const TaxiServiceJulliard = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/airportservice" element={<Airportservice />} />
    <Route path="/zakelijk" element={<Zakelijk />} />
    <Route path="/particulier" element={<Particulier />} />
    <Route path="/groepsvervoer" element={<Groepsvervoer />} />
    <Route path="/schoolvervoer" element={<Schoolvervoer />} />
    <Route path="/kortingskaart" element={<Kortingskaart />} />
    <Route path="/reserveer-airporttaxi" element={<ReserveerAirporttaxi />} />
    <Route path="/prijzen-airportservice" element={<PrijzenAirportservice />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);
