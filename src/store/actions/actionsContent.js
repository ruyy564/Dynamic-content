import { ADD_VALUE, ADD_VALUE_ERROR } from '../../helpers/constants';

export const addValue = (payload) => ({
  payload,
  type: ADD_VALUE,
});

export const addValueError = (payload) => ({
  payload,
  type: ADD_VALUE_ERROR,
});
