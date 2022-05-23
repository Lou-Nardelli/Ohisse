// import
import { Link } from 'react-router-dom';

// Styles
import failGif from 'src/assets/img/wall-climbing-jump.gif';
import './error.scss';

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">Tu t'es trompé de voie, il va falloir aller ailleurs !</h1>
      <div className="error__content">
        <p className="error__content--title">404</p>
        <img className="error__content--gif" src={failGif} alt="Fail climbing gif" />
      </div>
      <Link to="/"><button type="button" className="error__button">Retour à l'accueil</button></Link>
    </div>
  );
}

export default Error;
