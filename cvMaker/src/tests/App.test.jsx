import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Application } from "./cvMaker/src/main";

describe("something is true or false", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("Application Component", () => {
  test("Toggle switch changes state message correctly", () => {
    // Render the Application component
    render(<Application />);

    // Find the toggle switch or button (update the selector based on your toggle element)
    const toggleSwitch = screen.getByRole("button", { name: /toggle/i });

    // Find the state message display (update the selector as needed)
    const stateMessage = screen.getByText(/Example is not shown/i);

    // Verify initial state
    expect(stateMessage).toBeInTheDocument();

    // Click the toggle switch
    fireEvent.click(toggleSwitch);

    // Check if the state message changes after toggle
    expect(screen.getByText(/Example is shown/i)).toBeInTheDocument();

    // Click the toggle switch again
    fireEvent.click(toggleSwitch);

    // Check if the state message changes back
    expect(screen.getByText(/Example is not shown/i)).toBeInTheDocument();
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
