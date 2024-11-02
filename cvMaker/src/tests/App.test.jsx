import { describe, it, expect } from "vitest";

describe("something is true or false", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

// import { render, screen } from "@testing-library/react";
// import Application from "../src/main";

// describe("App", () => {
//   it("renders headline", () => {
//     render(<Application />);

//     screen.debug();

//     // check if App components renders headline
//   });
// });
