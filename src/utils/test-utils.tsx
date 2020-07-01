// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import userData from '../state/UserData-reducer';
import authData from '../state/AuthData-reducer';

function render(
  ui: React.ReactElement,
  {
    initialState = {},
    store = createStore(combineReducers({ userData, authData }), initialState),
    ...renderOptions
  }: any = {}
) {
  function Wrapper({ children }: { children: React.ReactElement }) {
    return <Provider store={store}>{children}</Provider>;
  }
  // @ts-ignore
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
