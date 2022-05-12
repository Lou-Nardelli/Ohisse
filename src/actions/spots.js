// ACTION TYPE NEXT_INDEX
export const NEXT_INDEX = 'NEXT_INDEX';

// ACTION CREATOR nextIndex
export const nextIndex = () => ({
  type: NEXT_INDEX,
});

// ACTION TYPE PREVIOUS_INDEX
export const PREVIOUS_INDEX = 'PREVIOUS_INDEX';

// ACTION CREATOR previousIndex
export const previousIndex = () => ({
  type: PREVIOUS_INDEX,

});

// ACTION TYPE NEXT_CARD_INDEX
export const NEXT_CARD_INDEX = 'NEXT_CARD_INDEX';

// ACTION CREATOR nextCardIndex
export const nextCardIndex = () => ({
  type: NEXT_CARD_INDEX,
});

// ACTION TYPE PREVIOUS_CARD_INDEX
export const PREVIOUS_CARD_INDEX = 'PREVIOUS_CARD_INDEX';

// ACTION CREATOR previousCardIndex
export const previousCardIndex = () => ({
  type: PREVIOUS_CARD_INDEX,

});
// ACTION TYPE CHANGE_FIELD
export const CHANGE_FIELD = 'CHANGE_FIELD';

// ACTION CREATOR changeField
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

// ACTION TYPE RECOVER_LAT_LNG
export const RECOVER_LAT_LNG = 'RECOVER_LAT_LNG';

// ACTION CREATOR recoverLatLng
export const recoverLatLng = (latlng) => ({
  type: RECOVER_LAT_LNG,
  latlng,
  
// ACTION TYPE FETCH_SPOTS
export const FETCH_SPOTS = 'FETCH_SPOTS';

// ACTION CREATOR fetchSpots
export const fetchSpots = () => ({
  type: FETCH_SPOTS,

});

// ACTION TYPE SAVE_SPOTS
export const SAVE_SPOTS = 'SAVE_SPOTS';

// ACTION CREATOR saveSpots
export const saveSpots = (data) => ({
  type: SAVE_SPOTS,
  data,
});

// ACTION TYPE FETCH_SPOT_BY_ID
export const FETCH_SPOT_BY_ID = 'FETCH_SPOT_BY_ID';

// ACTION CREATOR fetchSpotById
export const fetchSpotById = (id) => ({
  type: FETCH_SPOT_BY_ID,
  id,
});

// ACTION TYPE SAVE_SPOT_BY_ID
export const SAVE_SPOT_BY_ID = 'SAVE_SPOT_BY_ID';

// ACTION CREATOR saveSpotById
export const saveSpotById = (data) => ({
  type: SAVE_SPOT_BY_ID,
  data,
});

// ACTION TYPE IS_LOADING
export const IS_LOADING = 'IS_LOADING';

// ACTION CREATOR isLoading
export const isLoading = () => ({
  type: IS_LOADING,
});
