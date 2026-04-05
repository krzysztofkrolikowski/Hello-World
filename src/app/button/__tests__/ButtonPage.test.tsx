import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonPage from "../page";

describe("ButtonPage", () => {
  it("renders the page heading", () => {
    render(<ButtonPage />);

    expect(screen.getByTestId("button-page")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("renders TestButton when not loading", () => {
    render(<ButtonPage />);

    expect(screen.getByTestId("test-button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders skeleton when loading", () => {
    render(<ButtonPage isLoading />);

    expect(screen.getByTestId("test-button-skeleton")).toBeInTheDocument();
    expect(screen.queryByTestId("test-button")).not.toBeInTheDocument();
  });

  it("renders heading in both loading and non-loading states", () => {
    const { rerender } = render(<ButtonPage />);
    expect(screen.getByText("Button")).toBeInTheDocument();

    rerender(<ButtonPage isLoading />);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
