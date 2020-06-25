import { createStore } from 'redux';
import userDataReducer from './UserData-reducer';
export const store = createStore(userDataReducer);
