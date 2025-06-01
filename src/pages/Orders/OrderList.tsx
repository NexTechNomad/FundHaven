import { useState } from "react";
import { DataTable } from "@/components/table";

interface Order {
  userId: string;
  orderId: string;
  refCode: string;
  total: string;
  status: "pending" | "success";
}

const OrderList = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "active" | "pending" | "completed"
  >("all");

  const orders: Order[] = [
    {
      userId: "Dindi",
      orderId: "450903",
      refCode: "708844",
      total: "₦40,000",
      status: "pending",
    },
    {
      userId: "Dindi",
      orderId: "450903",
      refCode: "708844",
      total: "₦40,000",
      status: "success",
    },
  ];

  const filteredOrders = orders.filter((order) => {
    switch (activeTab) {
      case "pending":
        return order.status === "pending";
      case "active":
        return order.status === "success";
      case "completed":
        return order.status === "success";
      default:
        return true; // 'all' tab shows everything
    }
  });

  const columns = [
    { header: "User ID", key: "userId" },
    { header: "Order ID", key: "orderId" },
    { header: "Ref Code", key: "refCode" },
    { header: "Total", key: "total" },
    {
      header: "Order Status",
      key: "status",
      render: (order: Order) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            order.status === "success"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {order.status}
        </span>
      ),
    },
    {
      header: "Action",
      key: "action",
      render: () => (
        <button className="text-blue-600 hover:text-blue-800">View</button>
      ),
    },
  ];

  return (
    <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden">
      <div className="border-b border-gray-100">
        <div className="flex gap-6 px-6 pt-6">
          <TabButton
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            count={orders.length}
          >
            All
          </TabButton>
          <TabButton
            active={activeTab === "active"}
            onClick={() => setActiveTab("active")}
            count={orders.filter((order) => order.status === "success").length}
          >
            Active
          </TabButton>
          <TabButton
            active={activeTab === "pending"}
            onClick={() => setActiveTab("pending")}
            count={orders.filter((order) => order.status === "pending").length}
          >
            Pending
          </TabButton>
          <TabButton
            active={activeTab === "completed"}
            onClick={() => setActiveTab("completed")}
            count={orders.filter((order) => order.status === "success").length}
          >
            Completed
          </TabButton>
        </div>
      </div>
      <DataTable data={filteredOrders} columns={columns} />
    </div>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count: number;
}

const TabButton = ({ active, onClick, children, count }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`pb-4 text-sm font-medium ${
      active
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {children}({count})
  </button>
);

export default OrderList;
