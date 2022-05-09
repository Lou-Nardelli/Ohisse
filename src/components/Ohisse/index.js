// == Import : npm
import { Routes, Route } from 'react-router-dom';

// == Import : local
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from '../Home';
import SpotPage from '../SpotPage';
// import Spots from '../Spots';
import HomeMap from '../Home/HomeMap';
import Error from '../Error';

import './ohisse.scss';

// == Composant
function Ohisse() {
  return (
    <div className="ohisse">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-spot/:slug" element={<SpotPage />} />
        {/* <Route path="/fiches-interieur" element={<Spots listSpots={spotsIndoor} />} />
        <Route path="/fiches-exterieur" element={<Spots listSpots={spotsOutdoor} />} /> */}
        <Route path="/map" element={<HomeMap />} />
        <Route path="/connexion" element={<Home />} />
        <Route path="/inscription" element={<Home />} />
        <Route path="/profil" element={<Home />} />
        <Route path="/equipe" element={<Home />} />
        <Route path="/mentions-legales" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default Ohisse;
