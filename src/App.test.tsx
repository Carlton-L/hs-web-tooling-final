import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("App renders a loader when the fetch button is pressed", async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByTestId("fetch-button"));
  expect(screen.getByTestId("loading-card"));
});

test("App renders a card containing test after fetching a result from the API", async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByTestId("fetch-button"));
  await new Promise((r) => setTimeout(r, 500));
  expect(screen.getByTestId("insult-card"));
});
