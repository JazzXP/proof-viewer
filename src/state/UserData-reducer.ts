import { UserData } from "./UserData";
import { UserDataAction, UserDataActions } from "./UserData-actions";

export default (
  state: UserData = {
    proofs: [],
    shortlist: [],
    favourites: [],
  },
  action: UserDataAction
) => {
  switch (action?.type) {
    case UserDataActions.SET_IMAGE_LIST:
      return {
        ...state,
        proofs: action.data,
      };
    case UserDataActions.ADD_FAVOURITE:
      return {
        ...state,
        favourites: Array.from(new Set([...state.favourites, action.data])),
      };
    case UserDataActions.REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((item) => item !== action.data),
      };
    case UserDataActions.ADD_SHORTLIST:
      return {
        ...state,
        shortlist: Array.from(new Set([...state.shortlist, action.data])),
      };
    case UserDataActions.REMOVE_SHORTLIST:
      return {
        ...state,
        shortlist: state.shortlist.filter((item) => item !== action.data),
      };
  }
  return state;
};
