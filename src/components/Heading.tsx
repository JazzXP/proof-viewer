import React, { CSSProperties } from "react";
import styled from "styled-components";
import theme from "../Theme";

export interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  style?: CSSProperties;
  children?: React.ReactNode;
}

const headings = {
  h1: styled.h1`
    color: ${theme.heading.foreground};
    font-family: ${theme.heading.font};
  `,
  h2: styled.h2`
    color: ${theme.heading.foreground};
    font-family: ${theme.heading.font};
  `,
  h3: styled.h3`
    color: ${theme.heading.foreground};
    font-family: ${theme.heading.font};
  `,
  h4: styled.h4`
    color: ${theme.heading.foreground};
    font-family: ${theme.heading.font};
  `,
  h5: styled.h5`
    color: ${theme.heading.foreground};
    font-family: ${theme.heading.font};
  `,
};

export const Heading = (props: HeadingProps) => {
  const H = headings[props.type];
  return <H style={props.style}>{props.children}</H>;
};
