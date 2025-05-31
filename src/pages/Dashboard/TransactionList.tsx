import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

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
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.type === "up"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
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
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm font-medium text-blue-600">
                Description
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm font-medium text-blue-600">
                Transaction ID
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm font-medium text-blue-600">
                Type
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm font-medium text-blue-600">
                Card
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm font-medium text-blue-600">
                Date
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm font-medium text-blue-600">
                Amount
              </th>
              <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm font-medium text-blue-600">
                Receipt
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 lg:px-6 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.type === "up"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
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
                </td>
                <td className="px-4 lg:px-6 py-3 text-xs sm:text-sm text-gray-600">
                  {transaction.id}
                </td>
                <td className="px-4 lg:px-6 py-3 text-xs sm:text-sm text-gray-600">
                  {transaction.category}
                </td>
                <td className="px-4 lg:px-6 py-3 text-xs sm:text-sm text-gray-600">
                  {transaction.card}
                </td>
                <td className="px-4 lg:px-6 py-3 text-xs sm:text-sm text-gray-600">
                  {transaction.date}
                </td>
                <td
                  className={`px-4 lg:px-6 py-3 text-xs sm:text-sm font-medium ${
                    transaction.isNegative ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {transaction.amount}
                </td>
                <td className="px-4 lg:px-6 py-3">
                  <button className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors border border-blue-200 hover:border-blue-300 px-2 lg:px-3 py-1 rounded-lg">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
