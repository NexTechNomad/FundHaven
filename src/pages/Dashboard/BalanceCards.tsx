import { Eye, EyeOff, CreditCard, Grid } from "lucide-react";

interface BalanceCardsProps {
  showWalletBalance: boolean;
  showFundHavenBalance: boolean;
  showPendingOrder: boolean;
  setShowWalletBalance: (show: boolean) => void;
  setShowFundHavenBalance: (show: boolean) => void;
  setShowPendingOrder: (show: boolean) => void;
}

const BalanceCards = ({
  showWalletBalance,
  showFundHavenBalance,
  showPendingOrder,
  setShowWalletBalance,
  setShowFundHavenBalance,
  setShowPendingOrder,
}: BalanceCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
      {/* Wallet Balance - Dark Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-black text-white relative overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
              <CreditCard className="w-6 h-6 text-main-blue" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold">
              Wallet Balance
            </h3>
          </div>
          <button
            onClick={() => setShowWalletBalance(!showWalletBalance)}
            className="text-white/60 hover:text-white transition-colors"
          >
            {showWalletBalance ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="mb-2">
          <p className="text-white/60 text-sm tracking-wide mb-2">
            Total Balance
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {showWalletBalance ? (
              <span>
                <span className="text-lg sm:text-xl lg:text-2xl align-top">
                  ₦
                </span>
                3,140
                <span className="text-xl sm:text-2xl lg:text-3xl text-white/80">
                  .74
                </span>
              </span>
            ) : (
              "****"
            )}
          </p>
        </div>
      </div>

      {/* FundHaven Balance */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 relative hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
              <CreditCard className="w-6 h-6 text-main-blue" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              FundHaven Balance
            </h3>
          </div>
          <button
            onClick={() => setShowFundHavenBalance(!showFundHavenBalance)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showFundHavenBalance ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="mb-2">
          <p className="text-gray-500 text-sm tracking-wide mb-2">
            Total Balance
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            {showFundHavenBalance ? (
              <span>
                <span className="text-lg sm:text-xl lg:text-2xl align-top">
                  ₦
                </span>
                140
                <span className="text-xl sm:text-2xl lg:text-3xl text-gray-500">
                  .74
                </span>
              </span>
            ) : (
              "****"
            )}
          </p>
        </div>
      </div>

      {/* Pending Order */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 relative md:col-span-2 xl:col-span-1 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
              <Grid className="w-6 h-6 text-main-blue" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Pending Order
            </h3>
          </div>
          <button
            onClick={() => setShowPendingOrder(!showPendingOrder)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPendingOrder ? (
              <Eye className="w-5 h-5" />
            ) : (
              <EyeOff className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="mb-2">
          <p className="text-gray-500 text-sm tracking-wide mb-2">
            Total Order
          </p>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            {showPendingOrder ? "0" : "****"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCards;
