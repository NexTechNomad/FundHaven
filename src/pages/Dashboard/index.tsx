import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/sidebar";
import Header from "./Header";
import WelcomeSection from "./WelcomeSection";
import BalanceCards from "./BalanceCards";
import TransactionList, { Transaction } from "./TransactionList";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showWalletBalance, setShowWalletBalance] = useState(true);
  const [showFundHavenBalance, setShowFundHavenBalance] = useState(true);
  const [showPendingOrder, setShowPendingOrder] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const transactions: Transaction[] = [
    {
      id: "#12548796",
      type: "up",
      description: "Spotify Subscription",
      category: "Shopping",
      card: "1234 ****",
      date: "28 Jan, 12.30 AM",
      amount: "-₦2,500",
      isNegative: true,
    },
    {
      id: "#12548796",
      type: "down",
      description: "Freepik Sales",
      category: "Transfer",
      card: "1234 ****",
      date: "25 Jan, 10.40 PM",
      amount: "+₦750",
      isNegative: false,
    },
    {
      id: "#12548796",
      type: "up",
      description: "Mobile Service",
      category: "Service",
      card: "1234 ****",
      date: "20 Jan, 10.40 PM",
      amount: "-₦150",
      isNegative: true,
    },
    {
      id: "#12548796",
      type: "up",
      description: "Wilson",
      category: "Transfer",
      card: "1234 ****",
      date: "15 Jan, 03.29 PM",
      amount: "-₦1050",
      isNegative: true,
    },
    {
      id: "#12548796",
      type: "down",
      description: "Emily",
      category: "Transfer",
      card: "1234 ****",
      date: "14 Jan, 10.40 PM",
      amount: "+₦840",
      isNegative: false,
    },
  ];

  return (
    <div className="flex min-h-screen bg-main-light">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 lg:ml-[100px] xl:ml-[110px] transition-all duration-300 min-w-0">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mb-4 p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <WelcomeSection />
          <BalanceCards
            showWalletBalance={showWalletBalance}
            showFundHavenBalance={showFundHavenBalance}
            showPendingOrder={showPendingOrder}
            setShowWalletBalance={setShowWalletBalance}
            setShowFundHavenBalance={setShowFundHavenBalance}
            setShowPendingOrder={setShowPendingOrder}
          />
          <TransactionList transactions={transactions} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
