// == Import : npm
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// == Import : local
// import { changeField } from '../../../../actions/user';
import logoOhisse from 'src/assets/img/logo-simple-bicolor.png';
import SpotAddMap from '../SpotAddMap';
import { changeField, purgeSpotaddForm } from '../../../../actions/spots';

// styles
import './spotout.scss';

function SpotOut() {
  const cotations = [
    '4',
    '5a',
    '5b',
    '5c',
    '6a',
    '6b',
    '6c',
    '7a',
    '7b',
    '7c',
    '8a',
    '8b',
    '8c',
    '9a',
    '9b',
    '9c',
  ];

  const rocks = [
    'calcaire',
    'calcaire dolomite',
    'conglomérat',
    'gneiss',
    'granite',
    'grès',
    'volcanique',
    'schiste',
  ];
  // Used to modify the state
  const dispatch = useDispatch();
  // Used to read the state
  const inputNameValue = useSelector((state) => state.spots.inputName);
  const inputZipCodeValue = useSelector((state) => state.spots.inputZipCode);
  const inputCityValue = useSelector((state) => state.spots.inputCity);
  const inputCountryValue = useSelector((state) => state.spots.inputCountry);
  const inputDisciplineValue = useSelector((state) => state.spots.inputDiscipline);
  const inputRockTypeValue = useSelector((state) => state.spots.inputRockType);
  const inputMinDifValue = useSelector((state) => state.spots.inputMinDif);
  const inputMaxDifValue = useSelector((state) => state.spots.inputMaxDif);
  const inputDescriptionValue = useSelector((state) => state.spots.inputDescription);
  const inputPictureValue = useSelector((state) => state.spots.inputPicture);
  const currentSpot = useSelector((state) => state.spots.currentSpot);

  const handleChangeField = (value, name) => {
    dispatch(changeField(value, name));
  };

  useEffect(() => {
    dispatch(purgeSpotaddForm());
  }, [SpotOut]);

  const value = (element) => element === inputMinDifValue;

  return (
    <div className="spotout">
      <h2 className="spotout__title">
        A l'air, à l'extérieur<br />⛰️
      </h2>
      <form
        className="spotout__form"
        // onSubmit={handleSubmit}
      >
        <div className="spotout__form--label-name">
          <label htmlFor="name">Nom du spot
            <input
              type="text"
              name="name"
              className="spotout__form-input"
              placeholder="Nom du spot"
              value={inputNameValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputName')}
            />
          </label>
        </div>
        <div className="spotout__form--label-address">
          <label htmlFor="zipcode">Code Postal
            <input
              type="number"
              name="zipcode"
              className="spotout__form-input"
              placeholder="Code postal"
              value={inputZipCodeValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputZipCode')}
            />
          </label>
          <label htmlFor="city">Ville
            <input
              type="text"
              name="city"
              className="spotout__form-input"
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
              <option value="" defaultValue disabled hidden>Merci de choisir le pays</option>
              <option value="france">France</option>
              <option value="italy">Italie</option>
              <option value="spain">Espagne</option>
              <option value="swiss">Suisse</option>
            </select>
          </label>
        </div>
        <div className="spotout__form--label-spot">
          <label htmlFor="discipline">Discipline
            <select
              name="discipline"
              value={inputDisciplineValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputDiscipline')}
            >
              <option value="" defaultValue disabled hidden>Quelle(s) discipline(s) sur ce spot</option>
              <option value="boulder">Bloc</option>
              <option value="route">Voie</option>
              <option value="both">Les deux</option>
            </select>
          </label>
          <label htmlFor="rocktype">Type de roche
            <select
              name="rocktype"
              value={inputRockTypeValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputRockType')}
            >
              <option value="" defaultValue disabled hidden>Quel type de roche</option>
              {
                rocks.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="mindif">Difficulté minimum
            <select
              name="mindif"
              value={inputMinDifValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputMinDif')}
            >
              <option value="" defaultValue disabled hidden>Le niveau minimum</option>
              {
                cotations.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="maxdif">Difficulté maximum
            <select
              name="maxdif"
              value={inputMaxDifValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputMaxDif')}
            >
              <option value="" defaultValue disabled hidden>Le niveau maximum</option>
              {
                cotations.map((item, index) => {
                  if (cotations.findIndex(value) <= index) {
                    return <option key={item} value={item}>{item}</option>;
                  }
                  return null;
                })
              }
            </select>
          </label>
          <label htmlFor="description">Description
            <textarea
              type="text"
              name="description"
              className="spotout__form-inputdescription"
              placeholder="Les informations intéressantes et manquantes à avoir sur ce lieu"
              value={inputDescriptionValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputDescription')}
            />
          </label>
          <label htmlFor="picture">Photo
            <input
              type="url"
              name="picture"
              className="spotout__form-input"
              id="spotout__form-input-picture"
              placeholder="URL d'une photo du spot"
              value={inputPictureValue}
              onChange={(event) => handleChangeField(event.target.value, 'inputPicture')}
            />
            <img src={inputPictureValue || logoOhisse} alt="link given" />
          </label>
        </div>
        <div className="spotout__form--mapsubmit">
          <SpotAddMap spots={currentSpot} />
          <button type="submit" className="spotout__form-button">J'ajoute ce spot !</button>
        </div>
      </form>
    </div>
  );
}

export default SpotOut;
