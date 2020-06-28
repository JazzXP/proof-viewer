import React, { useEffect } from 'react';
import auth0Client from '../auth/Auth';
import { useDispatch } from 'react-redux';
import { setProfile } from '../state';

export const Auth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth0Client.isAuthenticated() && document.location.href.indexOf('callback') === -1) {
      auth0Client.signIn();
    }
  }, []);

  useEffect(() => {
    if (auth0Client.isAuthenticated()) {
      console.log(auth0Client.getProfile());
      dispatch(setProfile(auth0Client.getProfile()));
    }
  });

  return <></>;
};
