import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Callback from './auth/Callback';
import Home from './pages/Home';
import { Header, Auth } from './components';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';

const StyledDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledDiv className="App" style={{ minHeight: '100vh' }}>
      <ThemeProvider theme={{ mode: 'dark' }}>
        <Provider store={store}>
          <Auth />
          <Header />
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/callback" component={Callback} />
          </Router>
        </Provider>
      </ThemeProvider>
    </StyledDiv>
  );
}

export default App;
