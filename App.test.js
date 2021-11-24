import { render, act, fireEvent } from "@testing-library/react-native";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./App";

const server = setupServer(
  // Describe the requests to mock.
  rest.get("https://hello.world/", (req, res, ctx) => {
    console.log("Endpoint Hit");
    return res(
      ctx.json({
        title: "Lord of the Rings",
        author: "J. R. R. Tolkien",
      })
    );
  })
);
beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen({
    onUnhandledRequest(req) {
      console.error(
        "Found an unhandled server request while testing",
        req.method,
        req.url.href
      );
    },
  });
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});
test("renders a book data", () => {
  // Render components, perform requests, API communication is covered.
});

it("Intercepts the api call successfully", async () => {
  const { getByText, debug, findByText } = render(<App />);

  const button = getByText("Press Me");
  fireEvent.press(button);

  debug();

  await findByText(
    JSON.stringify({
      title: "Lord of the Rings",
      author: "J. R. R. Tolkien",
    })
  );
});
