import * as actionTypes from '../actions/actionTypes';

const initialState = {
  list: [],
  error: null,
};

const listProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_PRODUCTS:
      return {
        ...state,
        list: [],
      };
    case actionTypes.FETCH_LIST_PRODUCTS_SUCCESSED:
      return {
        ...state,
        list: action.listProducts,
      };
    case actionTypes.FETCH_LIST_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.GET_MORE_LIST_PRODUCTS:
      return state;
    case actionTypes.GET_MORE_LIST_PRODUCTS_SUCCESSED:
      return {
        ...state,
        list: action.moreProducts.concat(state.list),
      };
    case actionTypes.GET_MORE_LIST_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default listProductsReducer;
