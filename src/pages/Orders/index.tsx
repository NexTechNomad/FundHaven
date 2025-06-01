import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import OrderStats from "./OrderStats";
import OrderOverview from "./OrderOverview";
import OrderList from "./OrderList";

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            title="Orders"
          />
          <OrderStats />
          <OrderOverview />
          <OrderList />
        </div>
      </main>
    </div>
  );
};

export default Orders;
