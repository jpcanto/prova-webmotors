import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("Should render pagination div", () => {
  const selection = screen.getByRole("pagination");
  expect(selection).toBeInTheDocument();
});

test("Should render vehicles on page 1", () => {
  const selection = screen.getByRole("page-1");
  expect(selection).toBeInTheDocument();
});

test("Should render vehicles on page 2 when click on pagination 2", () => {
  const selection = screen.getByRole("page-1");
  expect(selection).toBeInTheDocument();

  const pageButton = screen.getByRole("button-2");
  userEvent.click(pageButton, { button: 0 });
  expect(screen.getByRole("page-2")).toBeInTheDocument();
});
