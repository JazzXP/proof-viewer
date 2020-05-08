import React from "react";
import { CreateAccount } from "../pages/CreateAccount";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";

addDecorator(StoryRouter());

export default {
  title: "Pages",
  component: CreateAccount,
};

export const CreateAccountPage = () => (
  <ThemeProvider theme={{ mode: "dark" }}>
    <CreateAccount error="Account for this email address exists" />
  </ThemeProvider>
);
