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
