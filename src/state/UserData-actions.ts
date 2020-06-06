export enum UserDataActions {
  SET_IMAGE_LIST,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  ADD_SHORTLIST,
  REMOVE_SHORTLIST,
}

export interface SET_IMAGE_LIST_ACTION {
  type: UserDataActions.SET_IMAGE_LIST;
  data: string[];
}
export const setImageList = (imageList: string[]) => ({
  type: UserDataActions.SET_IMAGE_LIST,
  data: imageList,
});

export interface ADD_FAVOURITE_ACTION {
  type: UserDataActions.ADD_FAVOURITE;
  data: string;
}
export const addFavourite = (image: string) => ({
  type: UserDataActions.ADD_FAVOURITE,
  data: image,
});

export interface REMOVE_FAVOURITE_ACTION {
  type: UserDataActions.REMOVE_FAVOURITE;
  data: string;
}
export const removeFavourite = (image: string) => ({
  type: UserDataActions.REMOVE_FAVOURITE,
  data: image,
});

export interface ADD_SHORTLIST_ACTION {
  type: UserDataActions.ADD_SHORTLIST;
  data: string;
}
export const addShortlist = (image: string) => ({
  type: UserDataActions.ADD_SHORTLIST,
  data: image,
});

export interface REMOVE_SHORTLIST_ACTION {
  type: UserDataActions.REMOVE_SHORTLIST;
  data: string;
}
export const removeShortlist = (image: string) => ({
  type: UserDataActions.REMOVE_SHORTLIST,
  data: image,
});

export type UserDataAction =
  | SET_IMAGE_LIST_ACTION
  | ADD_FAVOURITE_ACTION
  | REMOVE_FAVOURITE_ACTION
  | ADD_SHORTLIST_ACTION
  | REMOVE_SHORTLIST_ACTION;
