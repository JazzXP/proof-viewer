import React, { MouseEvent, EventHandler, ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../Theme';

export interface ButtonProps {
  style?: any;
  children?: ReactNode;
  onClick: EventHandler<MouseEvent>;
  disabled?: boolean;
}

const StyledButton = styled.button`
  border-radius: 3px;
  border-width: 1px;
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
  &:disabled {
    background: ${theme.button.disabled?.background ?? theme.button.background};
    color: ${theme.button.disabled?.foreground ?? theme.button.foreground};
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};
