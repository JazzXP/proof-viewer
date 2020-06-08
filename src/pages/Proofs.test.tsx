import React from "react";

import { render, fireEvent, screen } from "../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Proofs } from "./Proofs";

test("Renders the Proofs", () => {
  render(<Proofs />, {
    initialState: {
      proofs: ["logo512.png", "logo192.png"],
      shortList: [],
      favourites: [],
    },
  });

  expect(screen.getAllByText("Shortlist").length).toEqual(2); // 2nd due to heading
  expect(screen.getAllByText("Favourite").length).toEqual(1);
  expect(screen.getAllByText("Favourites").length).toEqual(1);
  expect(screen.getByText("logo512.png")).toBeDefined();
});

test("Proofs page adds to shortlist when shortlist button clicked", () => {
  render(<Proofs />, {
    initialState: {
      proofs: ["logo512.png", "logo192.png"],
      shortlist: [],
      favourites: [],
    },
  });

  fireEvent.click(screen.getAllByText("Shortlist")[0]);

  expect(screen.getAllByText("logo512.png").length).toBeGreaterThanOrEqual(2);
});

test("Proofs page adds to favourites when favourite button clicked", () => {
  render(<Proofs />, {
    initialState: {
      proofs: ["logo512.png", "logo192.png"],
      shortlist: [],
      favourites: [],
    },
  });

  fireEvent.click(screen.getAllByText("Favourite")[0]);

  expect(screen.getAllByText("logo512.png").length).toBeGreaterThanOrEqual(2);
});
