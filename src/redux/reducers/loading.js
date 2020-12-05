import * as actionTypes from '../actions/actionTypes';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADING:
      return true;
    case actionTypes.HIDE_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
