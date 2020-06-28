import { createStore, combineReducers } from 'redux';
import userData from './UserData-reducer';
import authData from './AuthData-reducer';
import { UserData } from './UserData';
import { AuthData } from './AuthData';

export interface StoreShape {
  userData: UserData;
  authData: AuthData;
}

export const store = createStore(
  combineReducers({ userData, authData }),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
