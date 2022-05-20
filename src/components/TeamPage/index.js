// == Import : npm
import { useSelector } from 'react-redux';

// == Import : local
import ohisDetour from '../../assets/img/team/ohis.png';
import gillenDetour from '../../assets/img/team/gillen-detour.png';
import louDetour from '../../assets/img/team/lou-detour.png';
import romainDetour from '../../assets/img/team/romain-detour.png';
import thibaultDetour from '../../assets/img/team/thibault-detour.png';
import fredericDetour from '../../assets/img/team/frederic-detour.png';
import linkedinLogo from '../../assets/img/socials/LI-In-Bug.png';
import githubLogoDark from '../../assets/img/socials/GitHub-Mark-32px.png';
import githubLogoLight from '../../assets/img/socials/GitHub-Mark-Light-32px.png';

// styles
import './teampage.scss';

function TeamPage() {
  // Recovers darkmode's status on the state
  const isDark = useSelector((state) => state.user.isDarkMode);

  return (
    <div className="teampage">
      <h3 className="teampage__title">L'équipe de O'Hisse</h3>
      <div className="teampage__members">
        <div className="teampage__member">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={gillenDetour} alt="Team member" />
              </div>
              <div className="flip-box-back">
                <img src={ohisDetour} alt="Ohis" />
              </div>
            </div>
          </div>
          <h4 className="teampage__member--name">Gillen LAXALT</h4>
          <div className="teampage__member--socials">
            <a
              href="https://www.linkedin.com/in/gillenlaxalt/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={linkedinLogo} alt="Logo Linkedin" />
            </a>
            <a
              href="https://github.com/gillenlaxalt"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={isDark ? githubLogoLight : githubLogoDark} alt="Logo GitHub" />
            </a>
          </div>
          <h5 className="teampage__member--job">Product Owner</h5>
          <p className="teampage__member--description">Cartographe de Leaflet, grimpeur à Bayonne et alentours</p>
        </div>
        <div className="teampage__member">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={louDetour} alt="Team member" />
              </div>
              <div className="flip-box-back">
                <img src={ohisDetour} alt="Ohis" />
              </div>
            </div>
          </div>
          <h4 className="teampage__member--name">Lou NARDELLI</h4>
          <div className="teampage__member--socials">
            <a
              href="https://www.linkedin.com/in/lou-nardelli/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={linkedinLogo} alt="Logo Linkedin" />
            </a>
            <a
              href="https://github.com/Lou-Nardelli"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={isDark ? githubLogoLight : githubLogoDark} alt="Logo GitHub" />
            </a>
          </div>
          <h5 className="teampage__member--job">Scrum Master</h5>
          <p className="teampage__member--description">Grande ministre du state et de l'API, randonneuse sans frontières</p>
        </div>
        <div className="teampage__member">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={romainDetour} alt="Team member" />
              </div>
              <div className="flip-box-back">
                <img src={ohisDetour} alt="Ohis" />
              </div>
            </div>
          </div>
          <h4 className="teampage__member--name">Romain BODIGUEL</h4>
          <div className="teampage__member--socials">
            <a
              href="https://www.linkedin.com/in/romain-bodiguel/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={linkedinLogo} alt="Logo Linkedin" />
            </a>
            <a
              href="https://github.com/romain-bodiguel"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={isDark ? githubLogoLight : githubLogoDark} alt="Logo GitHub" />
            </a>
          </div>
          <h5 className="teampage__member--job">Lead Dev Front</h5>
          <p className="teampage__member--description">Porteur de nos visuels, garant de notre bon goût graphique</p>
        </div>
        <div className="teampage__member">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={thibaultDetour} alt="Team member" />
              </div>
              <div className="flip-box-back">
                <img src={ohisDetour} alt="Ohis" />
              </div>
            </div>
          </div>
          <h4 className="teampage__member--name">Thibault PERRONO</h4>
          <div className="teampage__member--socials">
            <a
              href="https://www.linkedin.com/in/thibault-peronno/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={linkedinLogo} alt="Logo Linkedin" />
            </a>
            <a
              href="https://github.com/Thib-numberX"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={isDark ? githubLogoLight : githubLogoDark} alt="Logo GitHub" />
            </a>
          </div>
          <h5 className="teampage__member--job">Git Master / Tech Referent</h5>
          <p className="teampage__member--description">Maitre à penser de notre technique, représentant de la grimpe de Montreuil</p>
        </div>
        <div className="teampage__member">
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={fredericDetour} alt="Team member" />
              </div>
              <div className="flip-box-back">
                <img src={ohisDetour} alt="Ohis" />
              </div>
            </div>
          </div>
          <h4 className="teampage__member--name">Frédéric HAVAS</h4>
          <div className="teampage__member--socials">
            <a
              href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-havas-142098118/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={linkedinLogo} alt="Logo Linkedin" />
            </a>
            <a
              href="https://github.com/FredericHavas"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={isDark ? githubLogoLight : githubLogoDark} alt="Logo GitHub" />
            </a>
          </div>
          <h5 className="teampage__member--job">Lead Dev Back</h5>
          <p className="teampage__member--description">A lu tous les topos relatifs à Laravel, assureur du back</p>
        </div>
      </div>
    </div>
  );
}

// == Export
export default TeamPage;
