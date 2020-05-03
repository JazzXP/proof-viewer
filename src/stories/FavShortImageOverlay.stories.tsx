import React from "react";
import { action } from "@storybook/addon-actions";
import { FavShortImageOverlay } from "../components/FavShortImageOverlay";
import { ThemeProvider } from "styled-components";

export default {
  title: "Image",
  component: FavShortImageOverlay,
};

export const FavouriteShortlistImageOverlay = () => (
  // Absolute positioning to pull out of the regular layout for sizing
  <div style={{ position: "absolute" }}>
    <ThemeProvider theme={{ mode: "dark" }}>
      <>
        <span>{(window as any).isMouse}</span>
        <FavShortImageOverlay
          imageUrl="logo512.png"
          onClickFav={action("Add to Favourites")}
          onClickShortlist={action("Add to shortlist")}
        />
      </>
    </ThemeProvider>
  </div>
);
