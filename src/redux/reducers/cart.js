import * as actionTypes from '../actions/actionTypes';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      return [...state].concat({
        product: action.product,
        quantity: action.quantity,
      });
    case actionTypes.GET_CART:
      return [].concat(action.cart);
    case actionTypes.INCREMENT_QUANTITY:
      return state.map((item) => {
        if (item.product.id !== action.productId) return item;
        return {product: item.product, quantity: item.quantity + 1};
      });
    case actionTypes.DECREMENT_QUANTITY:
      return state.map((item) => {
        if (item.product.id !== action.productId) return item;
        return {product: item.product, quantity: item.quantity - 1};
      });
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      return state.filter((item) => item.product.id !== action.productId);
    default:
      return state;
  }
};

export default cartReducer;
