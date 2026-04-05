import React from "react";
import { TestButton } from "./components/TestButton";
import { TestButtonSkeleton } from "./components/TestButtonSkeleton";

export interface ButtonPageProps {
  isLoading?: boolean;
}

const ButtonPage: React.FC<ButtonPageProps> = ({ isLoading = false }) => {
  if (isLoading) {
    return (
      <main className="button-page" data-testid="button-page">
        <h1 className="button-page__heading">Button</h1>
        <TestButtonSkeleton />
      </main>
    );
  }

  return (
    <main className="button-page" data-testid="button-page">
      <h1 className="button-page__heading">Button</h1>
      <TestButton label="Click me" />
    </main>
  );
};

export default ButtonPage;
