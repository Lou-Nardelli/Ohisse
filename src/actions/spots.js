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
});
