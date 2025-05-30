import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "@/assets/images/login.png";

const OTPPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle OTP verification logic here
    navigate("/dashboard");
  };

  return (
    <div className="h-screen bg-main-light flex overflow-hidden">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img src={loginImage} alt="Login" className="w-full cover" />
      </div>

      {/* Right side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              OTP Verification Code
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Please check your email and enter the OTP code.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4">
              {otp.map((digit, index) => (
                <div key={index} className="w-14 h-14 relative">
                  <input
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full h-full text-center text-2xl font-bold border-2 border-gray-300 rounded-full focus:outline-none focus:border-main-blue focus:ring-1 focus:ring-main-blue"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-1/2 mx-auto flex justify-center py-4 px-4 border border-transparent rounded-sm text-sm font-medium text-white bg-main-dark hover:bg-main-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-dark"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
