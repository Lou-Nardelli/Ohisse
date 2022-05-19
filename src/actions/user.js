// ACTION TYPE CHANGE_FIELD
export const CHANGE_FIELD = 'CHANGE_FIELD';

// ACTION CREATOR changeField
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

// ACTION TYPE CHANGE_CURRENTUSER_FIELD
export const CHANGE_CURRENTUSER_FIELD = 'CHANGE_CURRENTUSER_FIELD';

// ACTION CREATOR changeCurrentuserField
export const changeCurrentuserField = (value, name) => ({
  type: CHANGE_CURRENTUSER_FIELD,
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

// ACTION TYPE IS_TOKEN
export const IS_TOKEN = 'IS_TOKEN';

// ACTION CREATOR isToken
export const isToken = () => ({
  type: IS_TOKEN,

});

// ACTION TYPE SAVE_USER
export const SAVE_USER = 'SAVE_USER';

// ACTION CREATOR saveUser
export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

// ACTION TYPE FETCH_USER_BY_ID
export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID';

// ACTION CREATOR fetchUserById
export const fetchUserById = (id) => ({
  type: FETCH_USER_BY_ID,
  id,
});

// ACTION TYPE DARKMODE
export const DARKMODE = 'DARKMODE';

// ACTION CREATOR darkMode
export const darkMode = (isDarkMode) => ({
  type: DARKMODE,
  isDarkMode,

});

// ACTION TYPE ADD_FAV
export const ADD_FAV = 'ADD_FAV';

// ACTION CREATOR addFav
export const addFav = () => ({
  type: ADD_FAV,

});

// ACTION TYPE FETCH_FAVORITES_BY_ID
export const FETCH_FAVORITES_BY_ID = 'FETCH_FAVORITES_BY_ID';

// ACTION CREATOR fetchFavoritesById
export const fetchFavoritesById = () => ({
  type: FETCH_FAVORITES_BY_ID,

});

// ACTION TYPE SAVE_FAVORITES
export const SAVE_FAVORITES = 'SAVE_FAVORITES';

// ACTION CREATOR saveFavorites
export const saveFavorites = (fav) => ({
  type: SAVE_FAVORITES,
  fav,
});

// ACTION TYPE REMOVE_FAV
export const REMOVE_FAV = 'REMOVE_FAV';

// ACTION CREATOR removeFav
export const removeFav = () => ({
  type: REMOVE_FAV,
});

// ACTION TYPE SET_LOADING
export const SET_LOADING = 'SET_LOADING';

// ACTION CREATOR setLoading
export const setLoading = () => ({
  type: SET_LOADING,

});

// ACTION TYPE CHANGE_EDIT_STATUS
export const CHANGE_EDIT_STATUS = 'CHANGE_EDIT_STATUS';

// ACTION CREATOR changeEditStatus
export const changeEditStatus = (isEditing) => ({
  type: CHANGE_EDIT_STATUS,
  isEditing,
});

// ACTION TYPE UPDATE_USER
export const UPDATE_USER = 'UPDATE_USER';

// ACTION CREATOR updateUser
export const updateUser = () => ({
  type: UPDATE_USER,
});
