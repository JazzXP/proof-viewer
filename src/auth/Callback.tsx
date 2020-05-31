import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";

const Callback = (props: any) => {
  useEffect(() => {
    auth0Client.handleAuthentication().then(() => {
      props.history.replace("/");
    });
  }, [props.history]);

  return <p>Loading profile...</p>;
};

export default withRouter(Callback);
