import React from "react";

interface StepTwoProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  onContinue: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({
  selectedOption,
  setSelectedOption,
  onContinue,
}) => {
  return (
    <>
      {/* Step 2: Tell us about yourself */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold mb-4">
          Tell us a bit about yourself
        </h1>
        <p className="text-gray-600">
          FundHaven is here to help you make secure and safe transaction
        </p>
      </div>

      {/* Form Section */}
      <div className="space-y-8">
        <div>
          <div>
            <h4 className="text-lg mb-6">
              What are you using FundHaven for today?
            </h4>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="purpose"
                  value="secure_purchase"
                  checked={selectedOption === "secure_purchase"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">
                  To secure a product purchase
                </span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="purpose"
                  value="receive_payments"
                  checked={selectedOption === "receive_payments"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">To receive payments</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="purpose"
                  value="freelance_escrow"
                  checked={selectedOption === "freelance_escrow"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="text-gray-700">To freelance with escrow</span>
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={onContinue}
          className={`w-full py-3.5 rounded-md transition-colors ${
            selectedOption
              ? "bg-main-dark hover:bg-gray-900 text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedOption}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default StepTwo;
