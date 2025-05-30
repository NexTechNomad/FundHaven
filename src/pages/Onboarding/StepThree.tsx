import React, { useState, useCallback } from "react";

interface StepThreeProps {
  nin: string;
  setNin: (nin: string) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  onContinue: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({
  nin,
  setNin,
  phoneNumber,
  setPhoneNumber,
  onContinue,
}) => {
  const [errors, setErrors] = useState({
    nin: "",
    phoneNumber: "",
  });

  const validateNIN = useCallback((value: string) => {
    if (!value) return "NIN is required";
    if (!/^\d{11}$/.test(value)) return "NIN must be 11 digits";
    return "";
  }, []);

  const validatePhoneNumber = useCallback((value: string) => {
    if (!value) return "Phone number is required";
    if (!/^\d{10}$/.test(value)) return "Phone number must be 10 digits";
    return "";
  }, []);

  const handleNINChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);
    setNin(value);
    setErrors((prev) => ({ ...prev, nin: validateNIN(value) }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(value);
    setErrors((prev) => ({ ...prev, phoneNumber: validatePhoneNumber(value) }));
  };

  const handleSubmit = () => {
    const ninError = validateNIN(nin);
    const phoneError = validatePhoneNumber(phoneNumber);

    if (ninError || phoneError) {
      setErrors({ nin: ninError, phoneNumber: phoneError });
      return;
    }

    onContinue();
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-3">Verify your identity</h1>
        <p className="text-gray-600 text-sm">
          Please provide your NIN and phone number for account verification.
          This information helps us maintain the security of your account.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="nin"
            className="block text-sm font-medium text-gray-700"
          >
            National Identification Number (NIN)
          </label>
          <input
            id="nin"
            type="text"
            placeholder="Enter your 11-digit NIN"
            value={nin}
            onChange={handleNINChange}
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.nin
                ? "border-red-300 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
          />
          {errors.nin && (
            <p className="text-red-500 text-sm mt-1">{errors.nin}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <div className="flex space-x-2">
            <div className="w-24 p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-600 text-sm text-center">
              NG +234
            </div>
            <div className="flex-1">
              <input
                id="phone"
                type="tel"
                placeholder="Enter 10-digit number"
                value={phoneNumber}
                onChange={handlePhoneChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.phoneNumber
                    ? "border-red-300 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className={`w-full py-3.5 rounded-lg transition-colors font-medium ${
            nin && phoneNumber
              ? "bg-main-dark hover:bg-opacity-90 text-white"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!nin || !phoneNumber}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepThree;
