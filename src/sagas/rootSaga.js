import {all, call} from 'redux-saga/effects';
import watchGetMoreListProduct from './getMoreListProductSaga';
import watchFetchListProduct from './listProductSaga';
import watchFilterProduct from './searchSaga';
import watchFetchTopProducts from './TopProductsSaga';
import watchFetchTypes from './TypesSaga';

function* rootSaga() {
  yield all([
    call(watchFetchTopProducts),
    call(watchFetchTypes),
    call(watchFilterProduct),
    call(watchFetchListProduct),
    call(watchGetMoreListProduct),
  ]);
}

export default rootSaga;
