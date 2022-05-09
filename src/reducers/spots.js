import { NEXT_INDEX, PREVIOUS_INDEX } from '../actions/spots';

export const initialState = {
  // currentIndex for slider picture in home page
  currentIndexSliderPicture: 0,
  // currentSpot in single spot page
  currentSpot: {
    id: 1,
    name: 'ARKOSE',
    number: 33,
    street: 'Rue du Progrès',
    zipcode: '93100',
    city: 'Montreuil',
    country: 'France',
    longitude: '',
    latitude: '',
    discipline: 'voie',
    type: 'interieur',
    rock_type: 'synthétique',
    picture: 'https://www.grimper.com/media/guide_salles/img_salles/arkose_montreuil_5_arkose.jpg',
    various: 'lorem impsum lorem carium',
    reputation: 'difficile',
    min_difficulty: '5a',
    max_difficulty: '9a',
  },
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
