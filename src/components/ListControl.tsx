import React from "react";
import styled from "styled-components";
import theme from "../Theme";

export interface ListControlProps {
  items: string[];
}

const StyledList = styled.select`
  width: 100%;
  height: 100%;
  background: ${theme.button.background};
  color: ${theme.button.foreground};
`;

export const ListControl = (props: ListControlProps) => (
  <StyledList size={2} multiple={true}>
    {props.items.map((item) => {
      return <option key={item}>{item}</option>;
    })}
  </StyledList>
);
