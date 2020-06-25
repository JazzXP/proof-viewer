import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Callback from './auth/Callback';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/callback" component={Callback} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
