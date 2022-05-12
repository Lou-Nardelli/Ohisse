// import
import { Link } from 'react-router-dom';

// Styles
import './error.scss';

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">Tu t'es trompé de voie, il va falloir aller ailleurs !</h1>
      <p className="error__content">404</p>
      <button type="button" className="error__button"><Link to="/">Retour à l'accueil</Link></button>
    </div>
  );
}

export default Error;
