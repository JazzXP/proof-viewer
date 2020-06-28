import { configure, addDecorator } from '@storybook/react';

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userData from 'state/UserData-reducer';
import authData from 'state/AuthData-reducer';

const store = createStore(
  combineReducers({ userData, authData }),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

addDecorator((S) => (
  <Provider store={store}>
    <S />
  </Provider>
));

configure(require.context('../src', true, /\.stories\.js$/), module);
