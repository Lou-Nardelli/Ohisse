// == Import : local
import gillenDetour from '../../assets/img/team/gillen-detour.png';
import louDetour from '../../assets/img/team/lou-detour.png';
import romainDetour from '../../assets/img/team/romain-detour.png';
import thibaultDetour from '../../assets/img/team/thibault-detour.png';
import fredericDetour from '../../assets/img/team/frederic-detour.png';

// styles
import './teampage.scss';

function TeamPage() {
  const team = [
    {
      name: 'Gillen LAXALT', job: 'Product Owner', description: 'Gardien de Leaflet, grimpeur à Bayonne et alentours', img: '../../assets/img/team/gillen-detour.png',
    },
    {
      name: 'Lou NARDELLI', job: 'Scrum Master', description: "Grande ministre du state et de l'API, randonneuse sans frontières", img: '../../assets/img/team/lou-detour.png',
    },
    {
      name: 'Romain BODIGUEL', job: 'Lead Dev Front', description: 'Porteur de nos visuels, garant de notre bon goût visuel', img: '../../assets/img/team/romain-detour.png',
    },
    {
      name: 'Thibault PERRONO', job: 'Git Master et Référent Technique', description: 'Maitre à penser de notre technique, représentant de la grimpe de Montreuil', img: '../../assets/img/team/thibault-detour.png',
    },
    {
      name: 'Frédéric HAVAS', job: 'Lead Dev Back', description: 'A lu tous les topos relatifs à Laravel, photo non contractuelle', img: '../../assets/img/team/frederic-detour.png',
    },
  ];

  return (
    <div className="teampage">
      <h3 className="teampage__title">L'équipe de O'Hisse</h3>
      <div className="teampage__member">
        <img src={gillenDetour} alt="Team member" className="teampage__member--picture" />
        <h4 className="teampage__member--name">Gillen LAXALT</h4>
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
        <h5 className="teampage__member--job">Git Master et Référent Technique</h5>
        <p className="teampage__member--description">Maitre à penser de notre technique, représentant de la grimpe de Montreuil</p>
      </div>
      <div className="teampage__member">
        <img src={fredericDetour} alt="Team member" className="teampage__member--picture" />
        <h4 className="teampage__member--name">Frédéric HAVAS</h4>
        <h5 className="teampage__member--job">Lead Dev Back</h5>
        <p className="teampage__member--description">A lu tous les topos relatifs à Laravel, photo non contractuelle</p>
      </div>
    </div>
  );
}

// == Export
export default TeamPage;
