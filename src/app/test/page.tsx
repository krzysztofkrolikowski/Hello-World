import React from "react";
import { TestCard } from "./components/TestCard";
import { TestCardSkeleton } from "./components/TestCardSkeleton";

export interface TestPageProps {
  isLoading?: boolean;
}

const TestPage: React.FC<TestPageProps> = ({ isLoading = false }) => {
  if (isLoading) {
    return (
      <main className="test-page" data-testid="test-page">
        <h1 className="test-page__heading">Test</h1>
        <TestCardSkeleton />
      </main>
    );
  }

  return (
    <main className="test-page" data-testid="test-page">
      <h1 className="test-page__heading">Test</h1>
      <TestCard
        title="Test Page"
        description="This is a test page created for TST-2."
      />
    </main>
  );
};

export default TestPage;
