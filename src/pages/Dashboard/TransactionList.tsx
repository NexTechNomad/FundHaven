import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { DataTable } from "@/components/table";

export type Transaction = {
  id: string;
  type: "up" | "down";
  description: string;
  category: string;
  card: string;
  date: string;
  amount: string;
  isNegative: boolean;
};

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  const columns = [
    {
      header: "Description",
      key: "description",
      render: (transaction: Transaction) => (
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-600`}
          >
            {transaction.type === "up" ? (
              <ArrowUpRight className="w-4 h-4" />
            ) : (
              <ArrowDownLeft className="w-4 h-4" />
            )}
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-900">
            {transaction.description}
          </span>
        </div>
      ),
    },
    { header: "Transaction ID", key: "id" },
    { header: "Type", key: "category" },
    { header: "Card", key: "card" },
    { header: "Date", key: "date" },
    {
      header: "Amount",
      key: "amount",
      render: (transaction: Transaction) => (
        <span
          className={transaction.isNegative ? "text-red-500" : "text-green-500"}
        >
          {transaction.amount}
        </span>
      ),
    },
    {
      header: "Receipt",
      key: "receipt",
      render: () => (
        <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors border border-blue-200 hover:border-blue-300 px-2 lg:px-3 py-1 rounded-lg">
          Download
        </button>
      ),
    },
  ];

  return (
    <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          Recent Transactions
        </h2>
      </div>

      {/* Mobile Transaction Cards */}
      <div className="block sm:hidden">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="p-4 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">
                  {transaction.type === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownLeft className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    {transaction.category}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-medium text-sm ${
                    transaction.isNegative ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {transaction.amount}
                </p>
                <p className="text-xs text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                {transaction.id} • {transaction.card}
              </span>
              <button className="text-blue-500 hover:text-blue-700 font-medium border border-blue-200 hover:border-blue-300 px-2 py-1 rounded">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <DataTable data={transactions} columns={columns} />
      </div>
    </div>
  );
};

export default TransactionList;
