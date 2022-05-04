// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import logoSimple from 'src/assets/img/logo-simple-bicolor.png';
import './footer.scss';

// == Composant
function Footer() {
  return (
    <div className="footer">
      <div className="footer__socials">
        <img src={logoSimple} alt="logo simple ohisse" />
      </div>
      <div className="footer__about">
        A propos de O'Hisse
      </div>
      <div className="footer__links">
        <Link className="footer-link" to="">L'équipe</Link>
        <Link className="footer-link" to="">Mentions légales</Link>
        <Link className="footer-link" to="">Plan du site</Link>
      </div>
      <div className="footer__copyright">
        Proudly remotely made in France @2022 - ohisse.fr
      </div>
    </div>
  );
}

// == Export
export default Footer;
