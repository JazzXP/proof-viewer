import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FavShortImageOverlay } from "./FavShortImageOverlay";

test("Renders the FavShortImageOverlay", () => {
  render(
    <FavShortImageOverlay
      imageUrl="logo512.png"
      onClickFav={() => {}}
      onClickShortlist={() => {}}
    />
  );

  expect(screen.getByText("Shortlist")).toBeDefined;
  expect(screen.getByText("Favourite")).toBeDefined;
});

test("FavShortImageOverlay calls favourite function when clicked", () => {
  const action = jest.fn();
  const notCalledAction = jest.fn();
  render(
    <FavShortImageOverlay
      imageUrl="logo512.png"
      onClickFav={() => {
        action();
      }}
      onClickShortlist={() => {
        notCalledAction();
      }}
    />
  );
  fireEvent.click(screen.getByText("Favourite"));
  expect(action).toBeCalledTimes(1);
  expect(notCalledAction).toBeCalledTimes(0);
});

test("FavShortImageOverlay calls shortlist function when clicked", () => {
  const action = jest.fn();
  const notCalledAction = jest.fn();
  render(
    <FavShortImageOverlay
      imageUrl="logo512.png"
      onClickFav={() => {
        notCalledAction();
      }}
      onClickShortlist={() => {
        action();
      }}
    />
  );
  fireEvent.click(screen.getByText("Shortlist"));
  expect(action).toBeCalledTimes(1);
  expect(notCalledAction).toBeCalledTimes(0);
});
