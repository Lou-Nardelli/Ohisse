import { CHANGE_FIELD, CONFIRM_PASSWORD } from '../actions/user';

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

    default:
      return state;
  }
};

export default reducer;
