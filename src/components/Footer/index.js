// == Import : npm
import { Link } from 'react-router-dom';

// == Import : local
import logoFb from 'src/assets/img/socials/facebook-brands.svg';
import logoTw from 'src/assets/img/socials/twitter-brands.svg';
import logoIg from 'src/assets/img/socials/instagram-brands.svg';
import './footer.scss';

// == Composant
function Footer() {
  return (
    <div className="footer">
      <div className="footer__socials">
        <Link to=""><img src={logoFb} alt="logo facebook" /></Link>
        <Link to=""><img src={logoTw} alt="logo twitter" /></Link>
        <Link to=""><img src={logoIg} alt="logo instagram" /></Link>
      </div>
      <h3 className="footer__about">
        A propos de O'Hisse :
      </h3>
      <div className="footer__links">
        <Link className="footer-link" to="">L'équipe</Link>
        <Link className="footer-link" to="/mentions-legales">Mentions légales</Link>
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
