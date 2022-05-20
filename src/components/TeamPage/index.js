// == Import : local
import gillenDetour from '../../assets/img/team/gillen-detour.png';
import louDetour from '../../assets/img/team/lou-detour.png';
import romainDetour from '../../assets/img/team/romain-detour.png';
import thibaultDetour from '../../assets/img/team/thibault-detour.png';
import fredericDetour from '../../assets/img/team/frederic-detour.png';
import linkedinLogo from '../../assets/img/socials/LI-In-Bug.png';
import githubLogo from '../../assets/img/socials/GitHub-Mark-32px.png';

// styles
import './teampage.scss';

function TeamPage() {
  return (
    <div className="teampage">
      <h3 className="teampage__title">L'équipe de O'Hisse</h3>
      <div className="teampage__members">
        <div className="teampage__member">
          <img src={gillenDetour} alt="Team member" className="teampage__member--picture" />
          <h4 className="teampage__member--name">Gillen LAXALT</h4>
          <div className="teampage__member--socials">
            <img src={linkedinLogo} alt="Logo Linkedin" />
            <img src={githubLogo} alt="Logo GitHub" />
          </div>
          <h5 className="teampage__member--job">Product Owner</h5>
          <p className="teampage__member--description">Gardien de Leaflet, grimpeur à Bayonne et alentours</p>
        </div>
        <div className="teampage__member">
          <img src={louDetour} alt="Team member" className="teampage__member--picture" />
          <h4 className="teampage__member--name">Lou NARDELLI</h4>
          <h5 className="teampage__member--job">Scrum Master</h5>
          <p className="teampage__member--description">Grande ministre du state et de l'API, randonneuse sans frontières</p>
        </div>
        <div className="teampage__member">
          <img src={romainDetour} alt="Team member" className="teampage__member--picture" />
          <h4 className="teampage__member--name">Romain BODIGUEL</h4>
          <h5 className="teampage__member--job">Lead Dev Front</h5>
          <p className="teampage__member--description">Porteur de nos visuels, garant de notre bon goût visuel</p>
        </div>
        <div className="teampage__member">
          <img src={thibaultDetour} alt="Team member" className="teampage__member--picture" />
          <h4 className="teampage__member--name">Thibault PERRONO</h4>
          <h5 className="teampage__member--job">Git Master / Tech Referent</h5>
          <p className="teampage__member--description">Maitre à penser de notre technique, représentant de la grimpe de Montreuil</p>
        </div>
        <div className="teampage__member">
          <img src={fredericDetour} alt="Team member" className="teampage__member--picture" />
          <h4 className="teampage__member--name">Frédéric HAVAS</h4>
          <h5 className="teampage__member--job">Lead Dev Back</h5>
          <p className="teampage__member--description">A lu tous les topos relatifs à Laravel, photo non contractuelle</p>
        </div>
      </div>
    </div>
  );
}

// == Export
export default TeamPage;
