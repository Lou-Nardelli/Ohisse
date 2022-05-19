// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// == Import : local
// import { changeField } from '../../../../actions/user';
import logoOhisse from 'src/assets/img/logo-simple-bicolor.png';
import SpotAddMap from '../SpotAddMap';
import {
  changeField, registerSpot,
} from '../../../../actions/spots';

// styles
import './spotin.scss';

function SpotIn() {
  // Used to modify the state
  const dispatch = useDispatch();
  // Used to read the state
  const inputNameValue = useSelector((state) => state.spots.inputName);
  const inputNumberValue = useSelector((state) => state.spots.inputNumber);
  const inputAddressValue = useSelector((state) => state.spots.inputAddress);
  const inputZipCodeValue = useSelector((state) => state.spots.inputZipCode);
  const inputCityValue = useSelector((state) => state.spots.inputCity);
  const inputCountryValue = useSelector((state) => state.spots.inputCountry);
  const inputDisciplineValue = useSelector((state) => state.spots.inputDiscipline);
  const inputReputationValue = useSelector((state) => state.spots.inputReputation);
  const inputDescriptionValue = useSelector((state) => state.spots.inputDescription);
  const inputPictureValue = useSelector((state) => state.spots.inputPicture);
  const currentSpot = useSelector((state) => state.spots.currentSpot);

  // useEffect(() => {
  //   dispatch(purgeSpotaddForm());
  // }, [SpotIn]);

  useEffect(() => {
    dispatch(changeField('Salle', 'type'));
  }, []);
  const inputName = useSelector((state) => state.spots.inputName);

  const handleChangeField = (value, name) => {
    dispatch(changeField(value, name));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('i submit');
    dispatch(registerSpot());
    console.log(inputName);
  };

  return (

    <div className="spotin">
      <h2 className="spotin__title">
        A l'abri, à l'intérieur<br />☕
      </h2>
      <form
        className="spotin__form"
        onSubmit={handleSubmit}
      >
        <div className="spotin__form--label-name">
          <label htmlFor="name"> <span> Nom de la salle <span className="spotin__form--required">*</span></span>
            <input
              type="text"
              name="name"
              className="spotin__form-input"
              placeholder="Nom de la salle"
              value={inputNameValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputName')}
              required
            />
          </label>
        </div>
        <div className="spotin__form--label-address">
          <label htmlFor="number">Numéro
            <input
              type="text"
              name="number"
              className="spotin__form-input"
              placeholder="Numéro"
              value={inputNumberValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputNumber')}
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
          <label htmlFor="city"><span> Ville <span className="spotin__form--required">*</span></span>
            <input
              type="text"
              name="city"
              className="spotin__form-input"
              placeholder="Ville"
              value={inputCityValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputCity')}
              required
            />
          </label>
          <label htmlFor="country"><span> Pays <span className="spotin__form--required">*</span></span>
            <select
              name="country"
              value={inputCountryValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputCountry')}
              required
            >
              <option value="" defaultValue disabled hidden>Merci de choisir le pays</option>
              <option value="France">France</option>
              <option value="Italie">Italie</option>
              <option value="Espagne">Espagne</option>
              <option value="Suisse">Suisse</option>
            </select>
          </label>
        </div>
        <div className="spotin__form--label-spot">
          <label htmlFor="discipline"><span> Discipline <span className="spotin__form--required">*</span></span>
            <select
              name="discipline"
              value={inputDisciplineValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputDiscipline')}
              required
            >
              <option value="" defaultValue disabled hidden>Quelle(s) discipline(s) dans cette salle</option>
              <option value="Bloc">Bloc</option>
              <option value="Voie">Voie</option>
              <option value="Bloc/Voie">Les deux</option>
            </select>
          </label>
          <label htmlFor="reputation">Réputation de la salle
            <select
              name="reputation"
              value={inputReputationValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputReputation')}
            >
              <option value="" defaultValue disabled hidden>Le niveau global de la salle</option>
              <option value="easy">Plutôt facile</option>
              <option value="medium">D'un niveau moyen</option>
              <option value="hard">Putôt costaud</option>
            </select>
          </label>
          <label htmlFor="description"><span> Description <span className="spotin__form--required">*</span></span>
            <textarea
              type="text"
              name="description"
              className="spotin__form-inputdescription"
              placeholder="Les informations intéressantes et manquantes à avoir sur ce lieu"
              value={inputDescriptionValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputDescription')}
              required
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
          <SpotAddMap spots={currentSpot} />
          <button type="submit" className="spotin__form-button">J'ajoute ce spot !</button>
        </div>
        <div className="spotin__form--message"><p> * champs obligatoires pour ajouter un lieu</p></div>
      </form>
    </div>
  );
}

export default SpotIn;
