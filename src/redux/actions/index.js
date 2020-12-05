import * as actionTypes from './actionTypes';
import searchProduct from '../../networking/searchProduct';

export const showLoading = () => {
  return {
    type: actionTypes.SHOW_LOADING,
  };
};

export const hideLoading = () => {
  return {
    type: actionTypes.HIDE_LOADING,
  };
};

export const fetchTypes = () => {
  return {
    type: actionTypes.FETCH_TYPES,
  };
};

export const fetchTypesSuccessed = (types) => {
  return {
    type: actionTypes.FETCH_TYPES_SUCCESSED,
    types,
  };
};

export const fetchTypesFailed = (error) => {
  return {
    type: actionTypes.FETCH_TYPES_FAILED,
    error,
  };
};

export const fetchTopProducts = () => {
  return {
    type: actionTypes.FETCH_TOP_PRODUCTS,
  };
};

export const fetchTopProductsSuccessed = (topProducts) => {
  return {
    type: actionTypes.FETCH_TOP_PRODUCTS_SUCCESSED,
    topProducts,
  };
};

export const fetchTopProductsFailed = (error) => {
  return {
    type: actionTypes.FETCH_TOP_PRODUCTS_FAILED,
    error,
  };
};

export const fetchListProducts = (idType, page) => {
  return {
    type: actionTypes.FETCH_LIST_PRODUCTS,
    idType,
    page,
  };
};

export const fetchListProductsSuccessed = (listProducts) => {
  return {
    type: actionTypes.FETCH_LIST_PRODUCTS_SUCCESSED,
    listProducts,
  };
};

export const fetchListProductsFailed = (error) => {
  return {
    type: actionTypes.FETCH_LIST_PRODUCTS_FAILED,
    error,
  };
};

export const getMoreListProducts = (idType, page) => {
  return {
    type: actionTypes.GET_MORE_LIST_PRODUCTS,
    idType,
    page,
  };
};

export const getMoreListProductsSuccessed = (moreProducts) => {
  return {
    type: actionTypes.GET_MORE_LIST_PRODUCTS_SUCCESSED,
    moreProducts,
  };
};

export const getMoreListProductsFailed = (error) => {
  return {
    type: actionTypes.GET_MORE_LIST_PRODUCTS_FAILED,
    error,
  };
};

export const addProductToCart = (product, quantity) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    product,
    quantity,
  };
};

export const getProductCart = (cart) => {
  return {
    type: actionTypes.GET_CART,
    cart,
  };
};

export const incrementQuantity = (productId) => {
  return {
    type: actionTypes.INCREMENT_QUANTITY,
    productId,
  };
};

export const decrementQuantity = (productId) => {
  return {
    type: actionTypes.DECREMENT_QUANTITY,
    productId,
  };
};

export const removeProductFromcart = (productId) => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    productId,
  };
};

export const userSignIn = (user) => {
  return {
    type: actionTypes.USER_SIGNIN,
    user,
  };
};

export const filterTask = (keyword) => {
  return {
    type: actionTypes.FILTER_TASK,
    keyword,
  };
};

export const filterTaskSuccessed = (data) => {
  return {
    type: actionTypes.FILTER_TASK_SUCCESSED,
    data,
  };
};

export const filterTaskFailed = (error) => {
  return {
    type: actionTypes.FILTER_TASK_FAILED,
    error,
  };
};
