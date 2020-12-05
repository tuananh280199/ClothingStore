import * as actionTypes from '../actions/actionTypes';

const typesReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_TYPES:
      return [];
    case actionTypes.FETCH_TYPES_SUCCESSED:
      return action.types;
    case actionTypes.FETCH_TYPES_FAILED:
      return [];
    default:
      return state;
  }
};

export default typesReducer;
