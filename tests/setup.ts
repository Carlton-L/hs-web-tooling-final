import { afterEach, afterAll, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
import { HttpResponse, delay, http } from "msw";

const insult = {
  number: "123",
  language: "en",
  insult:
    "You're a failed abortion whose birth certificate is an apology from the condom factory.",
  created: "2018-10-24 06:52:02",
  shown: "2688",
  createdby: "someone",
  active: "1",
  comment: "Sourced from some website",
};

export const restHandlers = [
  http.get("https://evilinsult.com/generate_insult.php", async () => {
    await delay(400);
    return HttpResponse.json(insult);
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

afterEach(() => {
  cleanup();
});
