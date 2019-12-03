import * as types from '../types';

export default (state = {}, action = {}) => {

  switch (action.type) {

    case types.SET_DATA:
      state = action.object_data;
      return state || {};

    case types.CLEAR:
      return state = {};

    default:
      return state;
  }
}