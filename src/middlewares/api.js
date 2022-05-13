import axios from 'axios';

import {
  FETCH_SPOTS, FETCH_SPOT_BY_ID, REGISTER_SPOT, saveSpotById, saveSpots,
} from '../actions/spots';
import { isRegister, REGISTER_USER } from '../actions/user';

const axiosInstance = axios.create({
  // API url
  baseURL: 'http://0.0.0.0:8080/',
});

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // to get all spots form API
    case FETCH_SPOTS:
      axiosInstance
        .get('api/spots')
        .then(
          (response) => {
            // console.log(response.data);
            // to save all spots in the state
            store.dispatch(saveSpots(response.data));
          },
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    case FETCH_SPOT_BY_ID:
      axiosInstance
        .get(`api/spots/${action.id}`)
        .then(
          (response) => {
            // console.log(response.data);
            // to save all spots in the state
            store.dispatch(saveSpotById(response.data));
          },
        )
        .catch(
          () => console.log(`api/spots/${action.id}`),
        );
      next(action);
      break;
      // inscription user
    case REGISTER_USER: {
      // double destructuration
      const {
        user: {
          inputEmail,
          inputPassword,
          inputPseudo,
          inputFirstname,
          inputLastname,
          inputCity,
          inputCountry,
        },
      } = store.getState();

      axiosInstance
        .post(
          'api/register',
          {
            firstname: inputFirstname,
            lastname: inputLastname,
            pseudo: inputPseudo,
            city: inputCity,
            country: inputCountry,
            description: null,
            email: inputEmail,
            password: inputPassword,
            role: 'user',
          },
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(isRegister());
        })
        .catch(() => {
          console.log('oups...');
        });
      next(action);
      break;
    }
    case REGISTER_SPOT: {
      // double destructuration
      const {
        spots: {
          inputName,
          inputAddress,
          inputNumber,
          inputZipCode,
          inputCity,
          inputCountry,
          inputDiscipline,
          inputRockType,
          inputReputation,
          inputMinDif,
          inputMaxDif,
          inputDescription,
          inputPicture,
          inputLat,
          inputLng,
          type,
        },
      } = store.getState();

      axiosInstance
        .post(
          'api/spots/create',
          {
            name: inputName,
            number: 33,
            street: inputAddress,
            zipcode: inputZipCode,
            city: inputCity,
            country: inputCountry,
            latitude: `${inputLng}`,
            longitude: `${inputLat}`,
            discipline: inputDiscipline,
            type: type,
            rock_type: inputRockType,
            picture: inputPicture,
            various: inputDescription,
            reputation: inputReputation,
            min_difficulty: inputMinDif,
            max_difficulty: inputMaxDif,
          },
        )
        .then((response) => {
          console.log(response.data);
          // store.dispatch(fetchSpots());
        })
        .catch(() => {
          console.log('oups...');
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default apiMiddleWare;
