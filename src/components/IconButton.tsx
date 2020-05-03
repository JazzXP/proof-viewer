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
`;

export const IconButton = (props: IconButtonProps) => {
  return (
    <StyledButton onClick={props.onClick}>
      <FontAwesomeIcon
        icon={props.icon}
        color={theme.button.foreground(props)}
        style={{ paddingRight: "5px" }}
      />
      {props.children}
    </StyledButton>
  );
};
