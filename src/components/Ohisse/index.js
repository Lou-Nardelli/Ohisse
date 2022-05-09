import { useSelector } from 'react-redux';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from '../Home';
import SpotPage from '../SpotPage';
import Spots from '../Spots';

import './ohisse.scss';

// == Composant
function Ohisse() {
  // all spots (from state)
  const spots = useSelector((state) => state.spots.listSpots);
  // filter to get a array of interior spots
  const spotsInterior = spots.filter((item) => item.type === 'interieur');
  // filter to get a array of outdoor spots
  const spotsOutdoor = spots.filter((item) => item.type === 'exterieur');
  return (
    <div className="ohisse">
      <Header />
      <Home />
      <SpotPage />
      {
        // depending on the route,
        // either the list of spots interior or the list of outdoor spots
        // will be displayed
      }
      <Spots title="Salles intérieures" listSpots={spotsInterior} />
      <Spots title="Spots extérieurs" listSpots={spotsOutdoor} />
      {/* Routes */
       /* Home url / */
       /* User url /user */
       /* Spots url /spots */
       }
      <Footer />
    </div>
  );
}

// == Export
export default Ohisse;
