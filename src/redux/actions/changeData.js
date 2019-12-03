import * as types from '../types';

export const setData = data => {
  return {
    type: types.SET_DATA,
    object_data: data
  }
};