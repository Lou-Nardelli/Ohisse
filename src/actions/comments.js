// ACTION TYPE CHANGE_VALUE
export const CHANGE_VALUE = 'CHANGE_VALUE';

// ACTION CREATOR changeValue
export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});
