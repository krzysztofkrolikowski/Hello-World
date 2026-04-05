import React from "react";
import { render, screen } from "@testing-library/react";
import { TestCardSkeleton } from "../components/TestCardSkeleton";

describe("TestCardSkeleton", () => {
  it("renders the skeleton component", () => {
    render(<TestCardSkeleton />);

    expect(screen.getByTestId("test-card-skeleton")).toBeInTheDocument();
  });

  it("renders with skeleton modifier class", () => {
    render(<TestCardSkeleton />);

    const skeleton = screen.getByTestId("test-card-skeleton");
    expect(skeleton).toHaveClass("test-card--skeleton");
  });

  it("contains skeleton pulse elements", () => {
    render(<TestCardSkeleton />);

    const skeleton = screen.getByTestId("test-card-skeleton");
    const pulseElements = skeleton.querySelectorAll(".skeleton-pulse");
    expect(pulseElements).toHaveLength(2);
  });
});
