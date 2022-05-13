import {
  CHANGE_FIELD,
  CONFIRM_PASSWORD,
  IS_REGISTER,
  LOGOUT,
  DARKMODE,
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
  isError: false,
  isRegister: false,
  isLogged: true,
  isDarkMode: false,

  currentUser: {
    firstname: 'Thibault',
    lastname: 'Peronno',
    pseudo: 'Thib',
    email: 'peronnothibault@hotmail.fr',
    city: 'Vernouillet',
    country: 'France',
    description: '',
    password: 123456789,
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
      };
    case DARKMODE:
      return {
        ...state,
        isDarkMode: action.isDarkMode,
      };

    default:
      return state;
  }
};

export default reducer;
