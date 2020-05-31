import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import auth0Client from "./auth/Auth";

const Home = (props: any) => {
  useEffect(() => {
    if (!auth0Client.isAuthenticated()) {
      auth0Client.signIn();
    }
  }, []);
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {auth0Client.isAuthenticated() && (
          <div>
            <label className="mr-2 text-white">
              {auth0Client.getProfile().name}
            </label>
            <br />
            <button
              className="btn btn-dark"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Home;
