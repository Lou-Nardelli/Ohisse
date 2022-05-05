// == Import
import ohisseLogo from 'src/assets/img/logo-complet-bicolor.png';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from '../Home';
import './ohisse.scss';

// == Composant
function Ohisse() {
  return (
    <div className="ohisse">
      <Header />
      <img src={ohisseLogo} alt="ohisse logo" />
      <h1>Composant : Ohisse</h1>
      <Home />
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
