import React from "react";
import { Proofs } from "../pages";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect } from "@storybook/addons";
import { setImageList } from "../state/UserData-actions";

export default {
  title: "Pages",
  component: Proofs,
};

export const ProofsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setImageList(["logo512.png", "logo192.png"]));
  }, [dispatch]);

  return (
    <ThemeProvider theme={{ mode: "dark" }}>
      <Proofs />
    </ThemeProvider>
  );
};
