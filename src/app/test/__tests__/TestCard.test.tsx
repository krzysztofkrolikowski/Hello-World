import React from "react";
import { render, screen } from "@testing-library/react";
import { TestCard } from "../components/TestCard";

describe("TestCard", () => {
  const defaultProps = {
    title: "Test Title",
    description: "Test Description",
  };

  it("renders the card with title and description", () => {
    render(<TestCard {...defaultProps} />);

    expect(screen.getByTestId("test-card")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders the title in an h2 element", () => {
    render(<TestCard {...defaultProps} />);

    const title = screen.getByText("Test Title");
    expect(title.tagName).toBe("H2");
  });

  it("renders with correct class names", () => {
    render(<TestCard {...defaultProps} />);

    const card = screen.getByTestId("test-card");
    expect(card).toHaveClass("test-card");
  });
});
