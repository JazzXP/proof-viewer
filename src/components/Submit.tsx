import React from 'react';
import styled from 'styled-components';
import theme from '../Theme';

export interface SubmitProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const StyledSubmit = styled.input`
  border-radius: 5px;
  padding: 5px;
  background: ${theme.button.background};
  color: ${theme.button.foreground};
  &:hover {
    background: ${theme.button.hover?.background ?? theme.button.background};
    color: ${theme.button.hover?.foreground ?? theme.button.foreground};
  }
  &:active {
    background: ${theme.button.pressed?.background ?? theme.button.background};
    color: ${theme.button.pressed?.foreground ?? theme.button.foreground};
  }
  &:focus {
    background: ${theme.button.focused?.background ?? theme.button.background};
    color: ${theme.button.focused?.foreground ?? theme.button.foreground};
  }
`;

export const Submit = (props: SubmitProps) => (
  <StyledSubmit type="submit" style={props.style}>
    {props.children}
  </StyledSubmit>
);
