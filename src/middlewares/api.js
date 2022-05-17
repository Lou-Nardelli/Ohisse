import axios from 'axios';
import { array } from 'prop-types';

import {
  FETCH_SPOTS, FETCH_SPOT_BY_ID, REGISTER_SPOT, saveSpotById, saveSpots, fetchSpots,
} from '../actions/spots';
import {
  ADD_FAV,
  fetchFavoritesById,
  FETCH_FAVORITES_BY_ID,
  FETCH_USER_BY_ID,
  isLogged, isRegister, LOGGIN, LOGOUT, REGISTER_USER, REMOVE_FAV, saveFavorites, saveUser, SAVE_FAVORITES,
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
          console.log('connexion OK');
          console.log(response.data);
          console.log(response.data.token.original.access_token);

          const tokenAPI = response.data.token.original.access_token;
          const { user } = response.data;

          // we save token to local storage
          localStorage.setItem('token', JSON.stringify(tokenAPI));

          // we retrieve token of the localStorage
          // const tokenStringify = localStorage.getItem('token');
          // we transform token into JSON
          // const token = JSON.parse(tokenStringify);
          // console.log(token);

          // we save token to axios
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${tokenAPI}`;

          // we modify the state to inform that the use is connected
          store.dispatch(isLogged());

          // we save the user to the state user-> currentUser
          store.dispatch(saveUser(user));

          // we fetch all favorite spots
          store.dispatch(fetchFavoritesById());
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

      // we retrieve token of the localStorage
      // const tokenStringigy = localStorage.getItem('token');
      // we transform token into JSON
      // const token = JSON.parse(tokenStringigy);
      // console.log(token);

      // console.log(axiosInstance);
      // const token = JSON.parse(localStorage.getItem('token'));
      const name = inputName.replace('.', ' ');

      axiosInstance
        .post(
          'api/spots/create',

          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // },
          {
            number: inputNumber,
            name: name,
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
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case FETCH_USER_BY_ID: {
      const token = JSON.parse(localStorage.getItem('token'));
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

      axiosInstance
        .get(
          `api/user/${action.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveUser(response.data));
          store.dispatch(fetchFavoritesById());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    case LOGOUT: {
      // we delete token
      localStorage.removeItem('token');
      // we delete fav
      localStorage.removeItem('favorites');
      // we clean axioInstance
      delete axiosInstance.defaults.headers.common.Authorization;
      next(action);
      break;
    }

    // add favorite spot with idUser and isSpot
    case ADD_FAV: {
      // console.log(store.getState());
      const {
        user: {
          currentUser: {
            id: idUser,
          },
        },
        spots: {
          currentSpot: [{
            id: idSpot,
          }],
        },
      } = store.getState();

      // console.log(idUser, idSpot);

      axiosInstance
        .post(
          'api/user/bookmarks/add',
          {
            userId: idUser,
            spotId: idSpot,
          },
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // },
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(fetchFavoritesById());
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }

    case FETCH_FAVORITES_BY_ID: {
      const {
        user: {
          currentUser: {
            id: idUser,
          },
        },
      } = store.getState();

      axiosInstance
        .get(
          `api/user/bookmarks/${idUser}`,
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // },
        )
        .then((response) => {
          // console.log(response.data);
          const arrayFav = response.data;
          const favorites = arrayFav.map((item) => item.id_spot);
          localStorage.setItem('favorites', JSON.stringify(response.data));
          // console.log(favorites);
          // console.log(JSON.parse(localStorage.getItem('favorites')));
          store.dispatch(saveFavorites(favorites));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case REMOVE_FAV: {
      // we retrieve the id of the current user
      // and the id fo th current spot
      const {
        user: {
          currentUser: {
            id: idUser,
          },
        },
        spots: {
          currentSpot: [{
            id: idSpot,
          }],
        },
      } = store.getState();
      // we look for the information of all the favorites
      const arrayFavoritesAPI = JSON.parse(localStorage.getItem('favorites'));
      // console.log(arrayFavoritesAPI);
      // we find the id of the bookmark
      const bookmark = arrayFavoritesAPI.find((item) => item.id_spot === idSpot && item.id_user === idUser);
      // console.log(bookmark);
      const idBookmark = bookmark.id;
      // console.log(idBookmark);

      axiosInstance
        .delete(
          `api/user/bookmarks/delete/${idBookmark}`,
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // },
        )
        .then((response) => {
          console.log(response.data);
          store.dispatch(fetchFavoritesById());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default apiMiddleWare;
