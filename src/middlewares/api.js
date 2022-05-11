import axios from 'axios';

import {
  FETCH_SPOTS, FETCH_SPOT_BY_ID, FETCH_SPOT_BY_SLUG, saveSpots,
} from '../actions/spots';

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
          // store.dispatch(saveSpots(response.data));
          },
        )
        .catch(
          () => console.log(`api/spots/${action.id}`),
        );
      next(action);
      break;

    default:
      next(action);
  }
};

export default apiMiddleWare;
