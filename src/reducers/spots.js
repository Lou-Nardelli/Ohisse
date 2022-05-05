import { NEXT_INDEX, PREVIOUS_INDEX } from '../actions/spots';

export const initialState = {
  list: [],
  currentIndexSliderPicture: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEXT_INDEX: {
      if (state.currentIndexSliderPicture === 3) {
        return {
          ...state,
          currentIndexSliderPicture: 0,
        };
      }
      return {
        ...state,
        currentIndexSliderPicture: state.currentIndexSliderPicture + 1,
      };
    }
    case PREVIOUS_INDEX: {
      if (state.currentIndexSliderPicture === 0) {
        return {
          ...state,
          currentIndexSliderPicture: 3,
        };
      }
      return {
        ...state,
        currentIndexSliderPicture: state.currentIndexSliderPicture - 1,
      };
    }

    default:
      return state;
  }
};

export default reducer;
