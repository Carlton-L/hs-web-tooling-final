import { afterEach, afterAll, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { setupServer } from "msw/node";
import { HttpResponse, delay, http } from "msw";

const insult =
  "You're a failed abortion whose birth certificate is an apology from the condom factory.";

export const restHandlers = [
  http.get("https://insult.mattbas.org/api/insult", async () => {
    await delay(400);
    return HttpResponse.text(insult);
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
