import React from "react";
import { render, screen } from "@testing-library/react";
import { TestButtonSkeleton } from "../components/TestButtonSkeleton";

describe("TestButtonSkeleton", () => {
  it("renders the skeleton component", () => {
    render(<TestButtonSkeleton />);

    expect(screen.getByTestId("test-button-skeleton")).toBeInTheDocument();
  });

  it("renders with skeleton modifier class", () => {
    render(<TestButtonSkeleton />);

    const skeleton = screen.getByTestId("test-button-skeleton");
    expect(skeleton).toHaveClass("test-button--skeleton");
  });

  it("contains skeleton pulse class", () => {
    render(<TestButtonSkeleton />);

    const skeleton = screen.getByTestId("test-button-skeleton");
    expect(skeleton).toHaveClass("skeleton-pulse");
  });
});
