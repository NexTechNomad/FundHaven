import React from "react";

interface StepOneProps {
  onContinue: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ onContinue }) => {
  return (
    <>
      {/* Step 1: How Our Escrow Works */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-main-dark-800 mb-4">
          How Our Escrow Works
        </h2>
        <p className="text-lg text-main-dark-600">
          Secure Deals, Trusted Results
        </p>
      </div>

      {/* Escrow Steps */}
      <div className="space-y-6 mb-10">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Deposit Funds</h3>
            <p className="text-gray-600">
              Buyer deposits funds into a secure escrow account.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Delivery</h3>
            <p className="text-gray-600">Seller delivers goods or services.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              Confirmation & Release
            </h3>
            <p className="text-gray-600">
              Buyer approves. Funds are released to the seller.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="w-full py-3.5 bg-main-dark hover:bg-opacity-90 text-white rounded-lg transition-colors font-medium"
      >
        Continue
      </button>
    </>
  );
};

export default StepOne;
