// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './ohisse.scss';

// == Composant
function Ohisse() {
  return (
    <div className="ohisse">
      <Header />
      <h1>Composant : Ohisse</h1>
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
