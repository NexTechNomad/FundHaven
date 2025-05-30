import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo.png";
import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [nin, setNin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleStepOneContinue = () => {
    setCurrentStep(2);
  };

  const handleStepTwoContinue = () => {
    if (selectedOption) {
      setCurrentStep(3);
    }
  };

  const handleVerificationContinue = () => {
    if (nin && phoneNumber) {
      setCurrentStep(4);
    }
  };

  const handleFinish = () => {
    if (username) {
      navigate("");
    }
  };

  return (
    <div className="min-h-screen bg-main-light flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <div className="absolute p-8 top-4 left-4">
        <img src={logo} alt="FundHaven Logo" className="h-10" />
      </div>

      {/* Main Content Container with Progress Bar */}
      <div className="w-full max-w-3xl relative">
        {/* Progress Bar positioned on top */}
        <div className="absolute -top-6 left-0 right-0 z-10 bg-white rounded-t-md shadow-sm pt-4 px-8">
          <ProgressBar currentStep={currentStep} />
        </div>

        {/* Content Card */}
        <div className="w-full bg-white rounded-md shadow-sm p-8 mt-8">
          {/* Steps Container */}
          <div className="w-full">
            {currentStep === 1 && (
              <StepOne onContinue={handleStepOneContinue} />
            )}

            {currentStep === 2 && (
              <StepTwo
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onContinue={handleStepTwoContinue}
              />
            )}

            {currentStep === 3 && (
              <StepThree
                nin={nin}
                setNin={setNin}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                onContinue={handleVerificationContinue}
              />
            )}

            {currentStep === 4 && (
              <StepFour
                username={username}
                setUsername={setUsername}
                onFinish={handleFinish}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
