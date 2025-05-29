import { useState } from "react";
import { Mail, AlertCircle } from "lucide-react";
import Popup from "./Popup";
import { useWaitlistSubmission } from "@/hooks/useWaitlistSubmission";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const { isSubmitting, submitStatus, errorMessage, submitEmail, resetStatus } =
    useWaitlistSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await submitEmail(email);

    if (success) {
      // Show popup and clear email
      setShowPopup(true);
      setEmail("");
      resetStatus();
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (submitStatus === "error") {
      resetStatus();
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Secure your spot!
          </h2>

          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join our early access list and be among the first to experience
            effortless, mobile-money escrow designed specifically for African
            buyers and sellers. Secure your transactions, prevent fraud, and
            trade with confidence - all from your phone. Sign up now to get
            notified when we launch!
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  className={`w-full pl-12 pr-4 py-4 text-lg border-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    submitStatus === "error"
                      ? "border-red-300 bg-red-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  disabled={isSubmitting}
                />
              </div>

              {submitStatus === "error" && errorMessage && (
                <div className="flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !email.trim()}
                className={`w-full py-4 px-8 text-lg font-semibold rounded-2xl transition-all duration-200 transform ${
                  isSubmitting || !email.trim()
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95"
                } focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>Joining...</span>
                  </div>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Early access guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <Popup isOpen={showPopup} onClose={handleClosePopup} />
    </>
  );
};

export default Waitlist;
