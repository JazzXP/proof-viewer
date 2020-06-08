import React from "react";
import { action } from "@storybook/addon-actions";
import { ListControlWithButtons } from "../components";
import { ThemeProvider } from "styled-components";

export default {
  title: "Controls",
  component: ListControlWithButtons,
};

const items = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
  "item 9",
  "item 10",
];

export const ListWithButtons = () => (
  <ThemeProvider theme={{ mode: "dark" }}>
    <div style={{ height: "200px", width: "100px" }}>
      <ListControlWithButtons
        items={items}
        onRemove={(item?: string) => {
          action(`Remove Item: ${item}`);
        }}
        onGoTo={(item?: string) => {
          action(`Go To Item: ${item}`);
        }}
      />
    </div>
  </ThemeProvider>
);
