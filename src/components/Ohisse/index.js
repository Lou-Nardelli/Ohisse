// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from '../Home';
import SpotPage from '../SpotPage';
import Spots from '../Spots';

import './ohisse.scss';

// == Composant
function Ohisse() {
  return (
    <div className="ohisse">
      <Header />
      <Home />
      <SpotPage />
      <Spots />
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
