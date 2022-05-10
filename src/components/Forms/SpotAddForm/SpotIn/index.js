// == Import : npm
// import { useSelector, useDispatch } from 'react-redux';

// == Import : local
// import { changeField } from '../../../../actions/user';
import logoOhisse from 'src/assets/img/logo-simple-bicolor.png';

// styles
import './spotin.scss';

function SpotIn() {
  // Used to modify the state
  // const dispatch = useDispatch();
  // Used to read the state
  // const inputSpotInNameValue = useSelector((state) => state.currentSpot.name);

  return (
    <div className="spotin">
      <h2 className="spotin__title">
        ☕ A l'abri, à l'intérieur ☕
      </h2>
      <form
        className="spotin__form"
        // onSubmit={handleSubmit}
      >
        <div className="spotin__form--label-name">
          <label htmlFor="name">Nom de la salle
            <input
              type="text"
              name="name"
              className="spotin__form-input"
              placeholder="Nom de la salle"
            />
          </label>
        </div>
        <div className="spotin__form--label-address">
          <label htmlFor="address">Adresse
            <input
              type="text"
              name="address"
              className="spotin__form-input"
              placeholder="Nom de la salle"
            />
          </label>
          <label htmlFor="zipcode">Code Postal
            <input
              type="text"
              name="zipcode"
              className="spotin__form-input"
              placeholder="Nom de la salle"
            />
          </label>
          <label htmlFor="city">Ville
            <input
              type="text"
              name="city"
              className="spotin__form-input"
              placeholder="Nom de la salle"
            />
          </label>
          <label htmlFor="country">Pays
            <select name="country">
              <option value="" defaultChecked>Merci de choisir le pays</option>
              <option value="france">France</option>
              <option value="italy">Italie</option>
              <option value="spain">Espagne</option>
              <option value="swiss">Suisse</option>
            </select>
          </label>
        </div>
        <div className="spotin__form--label-spot">
          <label htmlFor="discipline">Discipline
            <select name="discipline">
              <option value="" defaultChecked>Merci de choisir la discipline de la salle</option>
              <option value="boulder">Bloc</option>
              <option value="route">Voie</option>
              <option value="both">Les deux</option>
            </select>
          </label>
          <label htmlFor="reputation">Réputation de la salle
            <select name="discipline">
              <option value="" defaultChecked>La réputation de la salle pour son niveau</option>
              <option value="easy">Plutôt facile</option>
              <option value="medium">D'un niveau moyen</option>
              <option value="hard">Putôt costaud</option>
            </select>
          </label>
          <label htmlFor="description">Description
            <input
              type="text"
              name="description"
              className="spotin__form-inputdescription"
              placeholder="Une petite description avec les informations intéressantes à avoir sur ce lieu"
            />
          </label>
          <label htmlFor="picture">Photo
            <input
              type="text"
              name="picture"
              className="spotin__form-input"
              placeholder="URL d'une photo de la salle"
            />
            <img src={logoOhisse} alt="link given" />
          </label>
        </div>
        <button type="submit" className="spotin__form-button">J'ajoute ce spot !</button>
      </form>
    </div>
  );
}

export default SpotIn;
