import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ListControl } from "./ListControl";

test("Renders the ListControl", () => {
  render(<ListControl items={["Test 1", " Test 2", "Test 3"]} />);

  expect(screen.getByText("Test 1")).toBeDefined;
});
