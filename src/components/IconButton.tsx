import React, { ReactChild, MouseEvent, EventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import styled from "styled-components";
import theme from "../Theme";

export interface IconButtonProps {
  icon: IconDefinition;
  style?: any;
  children?: ReactChild;
  onClick: EventHandler<MouseEvent>;
  disabled?: boolean;
}

enum buttonState {
  NORMAL,
  PRESSED,
  HOVER,
  FOCUS,
}

const StyledButton = styled.button`
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
  &:disabled {
    background: ${theme.button.disabled?.background ?? theme.button.background};
    color: ${theme.button.disabled?.foreground ?? theme.button.foreground};
  }
`;

export const IconButton = (props: IconButtonProps) => {
  return (
    <StyledButton onClick={props.onClick} disabled={props.disabled}>
      <FontAwesomeIcon
        icon={props.icon}
        color={theme.button.foreground(props)}
        style={{ paddingRight: props.children ? 5 : 0 }}
      />
      {props.children}
    </StyledButton>
  );
};
