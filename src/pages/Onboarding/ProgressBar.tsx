import React from "react";

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "How It Works" },
    { number: 2, label: "Features" },
    { number: 3, label: "Verification" },
    { number: 4, label: "Username" },
  ];

  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex flex-col items-center">
            <div
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mb-1 sm:mb-2 text-sm sm:text-base ${
                currentStep >= step.number
                  ? "bg-main-dark text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step.number}
            </div>
            <span
              className={`text-xs sm:text-sm whitespace-nowrap ${
                currentStep >= step.number
                  ? "text-main-dark font-medium"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-[2px] w-8 sm:w-16 mt-4 ${
                currentStep > step.number ? "bg-main-dark" : "bg-gray-200"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
