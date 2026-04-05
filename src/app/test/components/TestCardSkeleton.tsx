import React from "react";

export const TestCardSkeleton: React.FC = () => {
  return (
    <div className="test-card test-card--skeleton" data-testid="test-card-skeleton">
      <div className="test-card__title skeleton-pulse" style={{ width: "60%", height: "1.5rem" }} />
      <div className="test-card__description skeleton-pulse" style={{ width: "100%", height: "1rem" }} />
    </div>
  );
};
