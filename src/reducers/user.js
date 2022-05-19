import {
  CHANGE_FIELD,
  IS_LOGGED,
  CONFIRM_PASSWORD,
  IS_REGISTER,
  LOGOUT,
  SAVE_USER,
  DARKMODE,
  SAVE_FAVORITES,
  FETCH_USER_BY_ID,
  SET_LOADING,
  CHANGE_EDIT_STATUS,
  CHANGE_CURRENTUSER_FIELD,
} from '../actions/user';

export const initialState = {
  list: [],
  inputEmail: '',
  inputPassword: '',
  inputPseudo: '',
  inputFirstname: '',
  inputLastname: '',
  inputConfirmPassword: '',
  inputCity: '',
  inputCountry: '',
  inputDescription: '',
  isError: false,
  isRegister: false,
  isLogged: false,
  isDarkMode: false,
  isEditing: false,
  isLoading: false,
  favorites: [1, 2],
  currentUser: {
    firstname: 'Thibault',
    lastname: 'Peronno',
    pseudo: 'Thib',
    email: 'peronnothibault@hotmail.fr',
    city: 'Vernouillet',
    country: 'France',
    description: '',
    updated_at: '2022-05-11T07:51:33.000000Z',
    created_at: '2022-05-11T07:51:33.000000Z',
    id: 3,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }

    case CHANGE_CURRENTUSER_FIELD:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          [action.name]: action.value,
        },
      };

    case CONFIRM_PASSWORD: {
      if (state.inputConfirmPassword !== state.inputPassword) {
        return {
          ...state,
          isError: true,
        };
      }
      return {
        ...state,
        isError: false,
      };
    }
    case IS_REGISTER:
      return {
        ...state,
        isRegister: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        currentUser: [],
        favorites: [],

      };
    case DARKMODE:
      return {
        ...state,
        isDarkMode: action.isDarkMode,
      };

    case IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };

    case SAVE_USER:
      return {
        ...state,
        currentUser: action.user,
      };

    case SAVE_FAVORITES: {
      return {
        ...state,
        favorites: action.fav,
        isLoading: false,
      };
    }

    case FETCH_USER_BY_ID: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case CHANGE_EDIT_STATUS: {
      return {
        ...state,
        isEditing: action.isEditing,
      };
    }

    // case SET_LOADING: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }

    default:
      return state;
  }
};

export default reducer;
