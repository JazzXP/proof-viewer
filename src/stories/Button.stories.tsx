import React from "react";
import { action } from "@storybook/addon-actions";
import { IconButton as Button } from "../components/IconButton";
import { ThemeProvider } from "styled-components";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Controls",
  component: Button,
};

export const IconButton = () => (
  <ThemeProvider theme={{ mode: "dark" }}>
    <Button icon={faCoffee} onClick={action("clicked")}>
      Hello Button
    </Button>
  </ThemeProvider>
);
