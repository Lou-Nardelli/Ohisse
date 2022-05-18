// ACTION TYPE CHANGE_VALUE
export const CHANGE_VALUE = 'CHANGE_VALUE';

// ACTION CREATOR changeValue
export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});
// ACTION TYPE SEND_MESSAGE_TO_SERVER
export const SEND_MESSAGE_TO_SERVER = 'SEND_MESSAGE_TO_SERVER';

// ACTION CREATOR sendMessageToServer
export const sendMessageToServer = () => ({
  type: SEND_MESSAGE_TO_SERVER,
});

// ACTION TYPE SAVE_NEW_MESSAGE
export const SAVE_NEW_MESSAGE = 'SAVE_NEW_MESSAGE';

// ACTION CREATOR saveNewMessage
export const saveNewMessage = (message) => ({
  type: SAVE_NEW_MESSAGE,
  message,
});

// ACTION TYPE FETCH_ALL_COMMENTS_BY_SPOT
export const FETCH_ALL_COMMENTS_BY_SPOT = 'FETCH_ALL_COMMENTS_BY_SPOT';

// ACTION CREATOR fetchAllCommentsBySpot
export const fetchAllCommentsBySpot = () => ({
  type: FETCH_ALL_COMMENTS_BY_SPOT,

});

// ACTION TYPE SAVE_CURRENT_COMMENTS
export const SAVE_CURRENT_COMMENTS = 'SAVE_CURRENT_COMMENTS';

// ACTION CREATOR saveCurrentComments
export const saveCurrentComments = (comments) => ({
  type: SAVE_CURRENT_COMMENTS,
  comments,
});
