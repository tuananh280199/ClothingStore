import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Main from './src/components/Main/Main';
import allReducers from './src/redux/reducers';
import rootSaga from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

sagaMiddleware.run(rootSaga);

export default App;
