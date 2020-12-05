import * as actionTypes from '../actions/actionTypes';

const topProductsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOP_PRODUCTS:
      return [];
    case actionTypes.FETCH_TOP_PRODUCTS_SUCCESSED:
      return action.topProducts;
    case actionTypes.FETCH_TOP_PRODUCTS_FAILED:
      return [];
    default:
      return state;
  }
};

export default topProductsReducer;
