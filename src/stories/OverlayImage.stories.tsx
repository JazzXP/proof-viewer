import React from "react";
import { action } from "@storybook/addon-actions";
import { OverlayImage } from "../components/OverlayImage";
import { IconButton } from "../components/IconButton";
import { ThemeProvider } from "styled-components";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Controls",
  component: OverlayImage,
};

export const TwoButtonOverlay = () => (
  // Absolute positioning to pull out of the regular layout for sizing
  <div style={{ position: "absolute" }}>
    <ThemeProvider theme={{ mode: "dark" }}>
      <OverlayImage imageUrl="logo512.png">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <IconButton icon={faCoffee} onClick={action("clicked left")}>
            Left
          </IconButton>
          <IconButton icon={faCoffee} onClick={action("clicked right")}>
            Right
          </IconButton>
        </div>
      </OverlayImage>
    </ThemeProvider>
  </div>
);
