import { Plus, ArrowUp, ArrowDown } from "lucide-react";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
          Welcome
        </h2>
        <p className="text-gray-600">Williams Wuraola,</p>
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3">
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-main-blue border border-blue-200 rounded-lg transition-colors text-sm hover:border-blue-300">
          <Plus className="w-4 h-4" />
          Create Order
        </button>

        <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-main-blue border border-blue-200 rounded-lg transition-colors text-sm hover:border-blue-300">
          <ArrowUp className="w-4 h-4" />
          Fund Wallet
        </button>

        <button className="flex items-center justify-center gap-2 px-4 py-2.5 text-main-blue border border-blue-200 rounded-lg transition-colors text-sm hover:border-blue-300">
          <ArrowDown className="w-4 h-4" />
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
