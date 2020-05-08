import React from "react";
import { Login } from "../pages/Login";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";

addDecorator(StoryRouter());

export default {
  title: "Pages",
  component: Login,
};

export const LoginPage = () => (
  <ThemeProvider theme={{ mode: "dark" }}>
    <Login error="Invalid username and/or password" />
  </ThemeProvider>
);
