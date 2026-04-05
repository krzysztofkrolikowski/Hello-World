import React from "react";

export const TestButtonSkeleton: React.FC = () => {
  return (
    <div
      className="test-button test-button--skeleton skeleton-pulse"
      data-testid="test-button-skeleton"
      style={{ width: "120px", height: "2.5rem" }}
    />
  );
};
