import React from "react";
import { render, screen } from "@testing-library/react";
import TestPage from "../page";

describe("TestPage", () => {
  it("renders the page heading", () => {
    render(<TestPage />);

    expect(screen.getByTestId("test-page")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders TestCard when not loading", () => {
    render(<TestPage />);

    expect(screen.getByTestId("test-card")).toBeInTheDocument();
    expect(screen.getByText("Test Page")).toBeInTheDocument();
    expect(screen.getByText("This is a test page created for TST-2.")).toBeInTheDocument();
  });

  it("renders skeleton when loading", () => {
    render(<TestPage isLoading />);

    expect(screen.getByTestId("test-card-skeleton")).toBeInTheDocument();
    expect(screen.queryByTestId("test-card")).not.toBeInTheDocument();
  });

  it("renders heading in both loading and non-loading states", () => {
    const { rerender } = render(<TestPage />);
    expect(screen.getByText("Test")).toBeInTheDocument();

    rerender(<TestPage isLoading />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
