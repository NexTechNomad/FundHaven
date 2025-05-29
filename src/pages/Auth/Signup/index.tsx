import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImage from "@/assets/images/login.png";
import { Eye, EyeOff } from "lucide-react";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="h-screen bg-main-light flex overflow-hidden">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2">
        <img src={signupImage} alt="Signup" className="w-full cover" />
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Sign In Link */}
          <div className="text-center lg:text-right mb-4">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
            </span>
            <button
              onClick={() => navigate("/auth/login")}
              className="text-sm font-medium text-main-blue hover:text-main-blue-500"
            >
              Sign In
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="mt-2 text-sm text-gray-500">
              Please fill in your details to register
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="py-4 mt-1 block w-full px-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

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

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-4 mt-1 block w-full px-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="py-4 mt-1 block w-full px-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-sm text-sm font-medium text-white bg-main-dark hover:bg-main-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-dark"
              >
                Sign Up
              </button>
            </div>

            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-main-light text-gray-500">OR</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 w-full flex items-center justify-center gap-3 py-4 px-4 border border-gray-300 rounded-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                className="h-5 w-5"
              />
              Sign Up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
