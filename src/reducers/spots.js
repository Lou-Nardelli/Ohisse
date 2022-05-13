import spots from 'src/localData/data';

import {
  NEXT_INDEX,
  PREVIOUS_INDEX,
  NEXT_CARD_INDEX,
  PREVIOUS_CARD_INDEX,
  CHANGE_FIELD,
  RECOVER_LAT_LNG,
  SAVE_SPOTS,
  SAVE_SPOT_BY_ID,
  FETCH_SPOT_BY_ID,
  PURGE_SPOTADD_FORM,
} from '../actions/spots';

export const initialState = {
  isLoading: false,
  listSpots: spots,
  // currentIndex for slider picture in home page
  currentIndexSliderPicture: 0,
  currentIndexSliderCard: 0,
  // currentSpot in single spot page
  currentSpot: [{
    id: 1,
    name: 'ARKOSE',
    number: 33,
    street: 'Rue du Progrès',
    zipcode: '93100',
    city: 'Montreuil',
    country: 'France',
    longitude: '48.85186663238125',
    latitude: '2.4192897136670743',
    discipline: 'voie',
    type: 'interieur',
    rock_type: 'synthétique',
    picture: 'https://www.grimper.com/media/guide_salles/img_salles/arkose_montreuil_5_arkose.jpg',
    various: 'lorem impsum lorem carium',
    reputation: 'difficile',
    min_difficulty: '5a',
    max_difficulty: '9a',
  }],
  inputName: '',
  inputAddress: null,
  inputNumber: null,
  inputZipCode: null,
  inputCity: '',
  inputCountry: '',
  inputDiscipline: '',
  inputRockType: null,
  inputReputation: null,
  inputMinDif: null,
  inputMaxDif: null,
  inputDescription: '',
  inputPicture: null,
  inputLat: '',
  inputLng: '',
  type: '',
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
    case NEXT_CARD_INDEX: {
      if (state.currentIndexSliderCard === 3) {
        return {
          ...state,
          currentIndexSliderCard: 0,
        };
      }
      return {
        ...state,
        currentIndexSliderCard: state.currentIndexSliderCard + 1,
      };
    }
    case PREVIOUS_CARD_INDEX: {
      if (state.currentIndexSliderCard === 0) {
        return {
          ...state,
          currentIndexSliderCard: 3,
        };
      }
      return {
        ...state,
        currentIndexSliderCard: state.currentIndexSliderCard - 1,
      };
    }
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case RECOVER_LAT_LNG:
      return {
        ...state,
        inputLat: action.latlng.lat,
        inputLng: action.latlng.lng,
      };
    case SAVE_SPOTS:
      return {
        ...state,
        listSpots: action.data,
      };
    case FETCH_SPOT_BY_ID:
      // isLoading during the fetch
      return {
        ...state,
        isLoading: true,
      };
    case SAVE_SPOT_BY_ID: {
      console.log(action.data);
      return {
        ...state,
        currentSpot: [action.data],
        isLoading: false,
      };
    }
    case PURGE_SPOTADD_FORM: {
      return {
        ...state,
        inputName: '',
        inputAddress: null,
        inputZipCode: null,
        inputNumber: null,
        inputCity: '',
        inputCountry: '',
        inputDiscipline: null,
        inputRockType: null,
        inputReputation: null,
        inputMinDif: null,
        inputMaxDif: null,
        inputDescription: null,
        inputPicture: null,
        inputLat: '',
        inputLng: '',
      };
    }

    default:
      return state;
  }
};

export default reducer;
