import {combineReducers} from 'redux';

import topProductsReducer from './topProducts';
import typesReducer from './types';
import cartReducer from './cart';
import userReducer from './user';
import searchReducer from './search';
import loadingReducer from './loading';
import listProductsReducer from './listProducts';

const allReducers = combineReducers({
  loading: loadingReducer,
  types: typesReducer,
  topProducts: topProductsReducer,
  listProducts: listProductsReducer,
  cart: cartReducer,
  user: userReducer,
  listProductSearch: searchReducer,
});

export default allReducers;
