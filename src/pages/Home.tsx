import React from 'react';
import styled from 'styled-components';
import theme from '../Theme';
import '../App.css';

const StyledDiv = styled.div`
  background: ${theme.backgroundColour};
  height: 100%;
  flex: 1;
`;

const Home = () => {
  return <StyledDiv className="App"></StyledDiv>;
};

export default Home;
