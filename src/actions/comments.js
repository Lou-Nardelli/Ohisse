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
