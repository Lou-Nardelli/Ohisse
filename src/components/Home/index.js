// styles
import './home.scss';
import HomeMap from './HomeMap';

// == Import : local
import SliderPicture from './SliderPicture';
import SliderCards from './SliderCards';

function Home() {
  return (
    <div className="home">
      <SliderPicture />
      <div className="home__description">
        <h2 className="home__description--title">
          O'Hisse, qu'est ce que c'est ?
        </h2>
        <p className="home__description--text">
          O’hisse est une plateforme libre d’accès à destination
          de la communauté des grimpeurs.
          <br />
          <br />
          L’escalade est un sport en plein essor, ouverture de
          salle de bloc dans l’hexagone et depuis 2021 les Jeux
          Olympiques.
          <br />
          Les débutants comme les confirmés ont envie de découvrir de nouveaux
          lieux pour progresser ou bien
          mettre en pratique leur activité préférée.
          <br />
          Vous êtes à Bayonne, Rennes, Lille ou Paris, et vous souhaitez grimper
          en salle ou en extérieur ? Vous cherchez
          des blocs ou des voies ? Alors, vous êtes au bon endroit
          ! En quelques clics, trouvez votre prochaine session de
          grimpe selon votre envie et votre niveau.
          Vous avez une voie ou un bloc qui n’est pas sur notre
          site, partagez-le avec les passionnés et retrouvez-vous
          pour vos prochaines sessions avec d’autres grimpeurs avides
          de nouvelles sensations.
          <br />
          <br />
          <span>
            Notre but est simple : faciliter
            la recherche des salles et spots d'escalade
          </span>
        </p>
      </div>
      <HomeMap />
      <SliderCards />
    </div>
  );
}

export default Home;
