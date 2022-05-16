// styles
import './teampage.scss';

function TeamPage() {
  const team = [
    { name: 'Gillen LAXALT', job: 'Product Owner', description: 'Gardien de Leaflet, grimpeur à Bayonne et alentours' },
    { name: 'Lou NARDELLI', job: 'Scrum Master', description: "Grande ministre du state et de l'API, randonneuse sans frontières" },
    { name: 'Romain BODIGUEL', job: 'Lead Dev Front', description: 'Porteur de nos visuels, garant de notre bon goût visuel' },
    { name: 'Thibault PERRONO', job: 'Git Master et Référent Technique', description: 'Maitre à penser de notre technique, représentant de la grimpe de Montreuil' },
    { name: 'Frédéric HAVAS', job: 'Lead Dev Back', description: 'A lu tous les topos relatifs à Laravel, photo non contractuelle' },
  ];
  return (
    <div className="teampage">
      <h3>L'équipe de O'Hisse</h3>

    </div>
  );
}

export default TeamPage;
