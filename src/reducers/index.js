import { combineReducers } from 'redux';

import spotsReducer from './spots';
import userReducer from './user';

const rootReducer = combineReducers({
  spots: spotsReducer,
  user: userReducer,
});

export default rootReducer;
