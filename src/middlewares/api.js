import axios from 'axios';

import {
  FETCH_SPOTS, FETCH_SPOT_BY_ID, saveSpotById, saveSpots,
} from '../actions/spots';
import { REGISTER_USER } from '../actions/user';

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
            console.log(response.data);
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
            // role: 1,
          },
        )
        .then((response) => {
          console.log(response.data);
          // todo action to register response to state (state -> user -> currentUser)
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
