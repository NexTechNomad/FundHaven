import React from "react";

interface StepFourProps {
  username: string;
  setUsername: (username: string) => void;
  onFinish: () => void;
}

const StepFour: React.FC<StepFourProps> = ({
  username,
  setUsername,
  onFinish,
}) => {
  return (
    <>
      {/* Step 4: Username */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-main-dark mb-3">
          Tell us about yourself
        </h1>
        <p className="text-lg text-gray-600">
          Choose a unique username for your account
        </p>
      </div>

      {/* Username Form */}
      <div className="space-y-8 max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-dark focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
          />
        </div>

        <button
          onClick={onFinish}
          className={`w-full py-3.5 rounded-lg transition-all duration-200 font-medium ${
            username
              ? "bg-main-dark hover:bg-opacity-90 text-white"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!username}
        >
          Complete Setup
        </button>
      </div>
    </>
  );
};

export default StepFour;
