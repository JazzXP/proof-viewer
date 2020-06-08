import React, { forwardRef, Ref } from "react";
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

export const ListControl = forwardRef<HTMLSelectElement, ListControlProps>(
  (props, ref) => {
    return (
      <StyledList size={2} multiple={false} ref={ref}>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </StyledList>
    );
  }
);
