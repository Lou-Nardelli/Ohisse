import { combineReducers } from 'redux';

import spotsReducer from './spots';
import userReducer from './user';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  spots: spotsReducer,
  user: userReducer,
  comments: commentsReducer,
});

export default rootReducer;
