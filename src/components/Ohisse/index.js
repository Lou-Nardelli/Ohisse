// == Import
import ohisseLogo from 'src/assets/img/logo-complet-bicolor.png';
import './ohisse.scss';

// == Composant
function Ohisse() {
  return (
    <div className="ohisse">
      <img src={ohisseLogo} alt="ohisse logo" />
      <h1>Composant : Ohisse</h1>
    </div>
  );
}

// == Export
export default Ohisse;
