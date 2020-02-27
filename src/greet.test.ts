import { greet } from "./greet";

it("should correctly format message", () => {
  expect(greet("Test")).toEqual("Hello, Test!");
});
