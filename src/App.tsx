import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Callback from "./auth/Callback";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/callback" component={Callback} />
      </Router>
    </div>
  );
}

export default App;
