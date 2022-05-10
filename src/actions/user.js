// ACTION TYPE CHANGE_FIELD
export const CHANGE_FIELD = 'CHANGE_FIELD';

// ACTION CREATOR changeField
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

// ACTION TYPE CONFIRM_PASSWORD
export const CONFIRM_PASSWORD = 'CONFIRM_PASSWORD';

// ACTION CREATOR confirmPassword
export const confirmPassword = (value) => ({
  type: CONFIRM_PASSWORD,
  value,
});
