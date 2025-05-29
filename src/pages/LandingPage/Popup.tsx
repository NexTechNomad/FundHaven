import { X, CheckCircle } from "lucide-react";
import socialProofOne from "@/assets/images/1.jpg";
import socialProofTwo from "@/assets/images/2.jpg";
import socialProofThree from "@/assets/images/3.jpg";
import socialProofFour from "@/assets/images/4.jpg";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup = ({ isOpen, onClose }: PopupProps) => {
  const {
    count: waitlistCount,
    isLoading: isLoadingCount,
    error,
  } = useWaitlistCount(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-in fade-in zoom-in duration-300 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Success icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Main content */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            You Have Been Added To Our Waitlist!
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Thanks for securing your spot! We'll notify you the moment our
            Africa-first escrow service launches—mobile, secure, and built for
            you.
          </p>

          {/* User avatars */}
          <div className="flex justify-center items-center space-x-2 py-4">
            <div className="flex -space-x-2">
              <img
                src={socialProofOne}
                alt="User 1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src={socialProofTwo}
                alt="User 2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src={socialProofThree}
                alt="User 3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src={socialProofFour}
                alt="User 4"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>

          {/* Counter */}
          <p className="text-gray-700 font-medium">
            <span className="italic">you are not alone,</span>{" "}
            <span className="font-bold text-gray-900">
              {isLoadingCount
                ? "Loading count..."
                : error
                ? "1,500 people joined"
                : waitlistCount !== null
                ? `${waitlistCount.toLocaleString()} people joined`
                : "1,500 people joined"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
