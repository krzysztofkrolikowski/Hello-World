import React from "react";

export interface TestButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const TestButton: React.FC<TestButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      className="test-button"
      data-testid="test-button"
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  );
};
