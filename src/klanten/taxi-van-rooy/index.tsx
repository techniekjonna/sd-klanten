import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Diensten } from './pages/Diensten';
import { DienstDetail } from './pages/DienstDetail';
import { OverOns } from './pages/OverOns';
import { WerkenBij } from './pages/WerkenBij';
import { Contact } from './pages/Contact';

export const TaxiVanRooy = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/diensten" element={<Diensten />} />
      <Route path="/diensten/:slug" element={<DienstDetail />} />
      <Route path="/over-ons" element={<OverOns />} />
      <Route path="/werken-bij" element={<WerkenBij />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
);
