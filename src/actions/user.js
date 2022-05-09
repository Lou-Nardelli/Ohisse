// ACTION TYPE CHANGE_FIELD
export const CHANGE_FIELD = 'CHANGE_FIELD';

// ACTION CREATOR changeField
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});
