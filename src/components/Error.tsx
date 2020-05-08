import React from "react";
import styled from "styled-components";
import theme from "../Theme";

export interface Error {
  error: string;
}

const ErrorDiv = styled.div`
  color: ${theme.error.foreground};
  background: ${theme.error.background};
  border: 1px solid ${theme.error.foreground};
  text-align: center;
  margin: auto;
  padding: 16px;
`;

export const Error = (props: Error) => (
  <ErrorDiv>Error: {props.error}</ErrorDiv>
);
