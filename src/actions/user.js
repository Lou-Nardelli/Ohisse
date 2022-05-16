// ACTION TYPE CHANGE_FIELD
export const CHANGE_FIELD = 'CHANGE_FIELD';

// ACTION CREATOR changeField
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

// ACTION TYPE CONFIRM_PASSWORD
export const CONFIRM_PASSWORD = 'CONFIRM_PASSWORD';

// ACTION CREATOR confirmPassword
export const confirmPassword = (value) => ({
  type: CONFIRM_PASSWORD,
  value,
});

// ACTION TYPE REGISTER_USER
export const REGISTER_USER = 'REGISTER_USER';

// ACTION CREATOR registerUser
export const registerUser = () => ({
  type: REGISTER_USER,

});

// ACTION TYPE IS_REGISTER
export const IS_REGISTER = 'IS_REGISTER';

// ACTION CREATOR isRegister
export const isRegister = () => ({
  type: IS_REGISTER,
});

// ACTION TYPE LOGGIN
export const LOGGIN = 'LOGGIN';

// ACTION CREATOR loggin
export const loggin = () => ({
  type: LOGGIN,

});

// ACTION TYPE IS_LOGGED
export const IS_LOGGED = 'IS_LOGGED';

// ACTION CREATOR isLogged
export const isLogged = () => ({
  type: IS_LOGGED,
});

// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';

// ACTION CREATOR logout
export const logout = () => ({
  type: LOGOUT,
});
