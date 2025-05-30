import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "@/assets/images/login.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reset password logic here
  };

  return (
    <div className="h-screen bg-main-light flex overflow-hidden">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img src={loginImage} alt="Login" className="w-full cover" />
      </div>

      {/* Right side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Sign Up Link */}
          <div className="text-center lg:text-right mb-16">
            <span className="text-sm text-gray-600">Remembered Password? </span>
            <button
              onClick={() => navigate("/auth/login")}
              className="text-sm font-medium text-main-blue hover:text-main-blue-500"
            >
              Sign In
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Forgot Password
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Input your email address to reset your password.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-4 mt-1 block w-full px-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-sm text-sm font-medium text-white bg-main-dark hover:bg-main-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-dark"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
