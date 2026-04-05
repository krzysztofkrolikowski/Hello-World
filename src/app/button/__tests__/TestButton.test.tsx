import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TestButton } from "../components/TestButton";

describe("TestButton", () => {
  const defaultProps = {
    label: "Click me",
  };

  it("renders the button with label", () => {
    render(<TestButton {...defaultProps} />);

    expect(screen.getByTestId("test-button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as a button element", () => {
    render(<TestButton {...defaultProps} />);

    const button = screen.getByTestId("test-button");
    expect(button.tagName).toBe("BUTTON");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<TestButton {...defaultProps} onClick={handleClick} />);

    fireEvent.click(screen.getByTestId("test-button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<TestButton {...defaultProps} disabled />);

    const button = screen.getByTestId("test-button");
    expect(button).toBeDisabled();
  });

  it("renders with correct class name", () => {
    render(<TestButton {...defaultProps} />);

    const button = screen.getByTestId("test-button");
    expect(button).toHaveClass("test-button");
  });
});
