import axios from 'axios';

import {
  FETCH_SPOTS, FETCH_SPOT_BY_ID, REGISTER_SPOT, saveSpotById, saveSpots, fetchSpots,
} from '../actions/spots';
import {
  isLogged, isRegister, LOGGIN, REGISTER_USER,
} from '../actions/user';

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

    // to connect the user
    case LOGGIN: {
      // double destructuration
      const { user: { inputEmail, inputPassword } } = store.getState();

      // we send to API password and email
      axiosInstance
        .post(
          'api/login',
          {
            email: inputEmail,
            password: inputPassword,
          },
        )
        // we recive information about user and token
        .then((response) => {
          // const { data: accès_token } = response;
          console.log(response.data.access_token);
          const token = response.data.access_token;

          // we save token to axios
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

          // we modify the state to inform that the use is connected
          store.dispatch(isLogged());

          // we save the user to the state user-> currentUser
          // store.dispatch(saveUser(user));

          // we fetch all favorite spots
          // store.dispatch(fetchFavorites());

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
          store.dispatch(fetchSpots());

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
