export enum AuthDataActions {
  SET_PROFILE = 'SET_PROFILE',
  CLEAR_PROFILE = 'CLEAR_PROFILE',
}

export interface SET_PROFILE_ACTION {
  type: AuthDataActions.SET_PROFILE;
  data: any;
}
export const setProfile = (profile: any) => ({
  type: AuthDataActions.SET_PROFILE,
  data: profile,
});

export interface CLEAR_PROFILE_ACTION {
  type: AuthDataActions.CLEAR_PROFILE;
}
export const clearProfile = () => ({
  type: AuthDataActions.CLEAR_PROFILE,
});

export type AuthDataAction = SET_PROFILE_ACTION | CLEAR_PROFILE_ACTION;
