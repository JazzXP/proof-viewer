import { AuthData } from './AuthData';
import { AuthDataAction, AuthDataActions } from './AuthData-actions';

export default (
  state: AuthData = {
    loggedIn: false,
    profile: undefined,
  },
  action: AuthDataAction
) => {
  switch (action.type) {
    case AuthDataActions.SET_PROFILE:
      return {
        ...state,
        loggedIn: true,
        profile: action.data,
      };
    case AuthDataActions.CLEAR_PROFILE:
      return {
        ...state,
        loggedIn: false,
        profile: undefined,
      };
  }
  return state;
};
