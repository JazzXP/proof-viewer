import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import auth0Client from './Auth';
import { setProfile } from '../state';

const Callback = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth0Client.handleAuthentication().then(() => {
      dispatch(setProfile(auth0Client.getProfile()));
      props.history.replace('/');
    });
  }, [props.history]);

  return <p>Loading profile...</p>;
};

export default withRouter(Callback);
