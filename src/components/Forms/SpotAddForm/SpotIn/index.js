// == Import : npm
import { useSelector, useDispatch } from 'react-redux';

// == Import : local
// import { changeField } from '../../../../actions/user';
import logoOhisse from 'src/assets/img/logo-simple-bicolor.png';
import HomeMap from '../../../Home/HomeMap';
import { changeField } from '../../../../actions/spots';

// styles
import './spotin.scss';

function SpotIn() {
  // Used to modify the state
  const dispatch = useDispatch();
  // Used to read the state
  const inputNameValue = useSelector((state) => state.spots.inputName);
  const inputAddressValue = useSelector((state) => state.spots.inputAddress);
  const inputZipCodeValue = useSelector((state) => state.spots.inputZipCode);
  const inputCityValue = useSelector((state) => state.spots.inputCity);
  const inputCountryValue = useSelector((state) => state.spots.inputCountry);
  const inputDisciplineValue = useSelector((state) => state.spots.inputDiscipline);
  const inputReputationValue = useSelector((state) => state.spots.inputReputation);
  const inputDescriptionValue = useSelector((state) => state.spots.inputDescription);
  const inputPictureValue = useSelector((state) => state.spots.inputPicture);
  const currentSpot = useSelector((state) => state.spots.currentSpot);

  const handleChangeField = (value, name) => {
    dispatch(changeField(value, name));
  };

  return (
    <div className="spotin">
      <h2 className="spotin__title">
        A l'abri, à l'intérieur<br />☕
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
              value={inputNameValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputName')}
            />
          </label>
        </div>
        <div className="spotin__form--label-address">
          <label htmlFor="address">Adresse
            <input
              type="text"
              name="address"
              className="spotin__form-input"
              placeholder="Adresse"
              value={inputAddressValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputAddress')}
            />
          </label>
          <label htmlFor="zipcode">Code Postal
            <input
              type="number"
              name="zipcode"
              className="spotin__form-input"
              placeholder="Code postal"
              value={inputZipCodeValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputZipCode')}
            />
          </label>
          <label htmlFor="city">Ville
            <input
              type="text"
              name="city"
              className="spotin__form-input"
              placeholder="Ville"
              value={inputCityValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputCity')}
            />
          </label>
          <label htmlFor="country">Pays
            <select
              name="country"
              value={inputCountryValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputCountry')}
            >
              <option value="" selected disabled hidden>Merci de choisir le pays</option>
              <option value="france">France</option>
              <option value="italy">Italie</option>
              <option value="spain">Espagne</option>
              <option value="swiss">Suisse</option>
            </select>
          </label>
        </div>
        <div className="spotin__form--label-spot">
          <label htmlFor="discipline">Discipline
            <select
              name="discipline"
              value={inputDisciplineValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputDiscipline')}
            >
              <option value="" selected disabled hidden>Quelle(s) discipline(s) dans cette salle</option>
              <option value="boulder">Bloc</option>
              <option value="route">Voie</option>
              <option value="both">Les deux</option>
            </select>
          </label>
          <label htmlFor="reputation">Réputation de la salle
            <select
              name="reputation"
              value={inputReputationValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputReputation')}
            >
              <option value="" selected disabled hidden>Le niveau global de la salle</option>
              <option value="easy">Plutôt facile</option>
              <option value="medium">D'un niveau moyen</option>
              <option value="hard">Putôt costaud</option>
            </select>
          </label>
          <label htmlFor="description">Description
            <textarea
              type="text"
              name="description"
              className="spotin__form-inputdescription"
              placeholder="Les informations intéressantes et manquantes à avoir sur ce lieu"
              value={inputDescriptionValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputDescription')}
            />
          </label>
          <label htmlFor="picture">Photo
            <input
              type="url"
              name="picture"
              className="spotin__form-input"
              id="spotin__form-input-picture"
              placeholder="URL d'une photo de la salle"
              value={inputPictureValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputPicture')}
            />
            <img src={inputPictureValue || logoOhisse} alt="link given" />
          </label>
        </div>
        <div className="spotin__form--mapsubmit">
          <HomeMap spots={currentSpot} />
          <button type="submit" className="spotin__form-button">J'ajoute ce spot !</button>
        </div>
      </form>
    </div>
  );
}

export default SpotIn;
