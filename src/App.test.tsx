import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("Should render Form div", () => {
  const selection = screen.getByRole("form");
  expect(selection).toBeInTheDocument();
});
