import React from "react";

export interface TestCardProps {
  title: string;
  description: string;
}

export const TestCard: React.FC<TestCardProps> = ({ title, description }) => {
  return (
    <div className="test-card" data-testid="test-card">
      <h2 className="test-card__title">{title}</h2>
      <p className="test-card__description">{description}</p>
    </div>
  );
};
