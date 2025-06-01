import React from "react";
import { FormData } from "./orderTypes";
import { AlertCircle } from "lucide-react";

interface TransactionSummaryProps {
  formData: FormData;
  onGoBack: () => void;
  onConfirm: () => void;
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({
  formData,
  onGoBack,
  onConfirm,
}) => (
  <div className="space-y-6">
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Title</span>
        <span className="text-blue-600">{formData.title}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-600">Amount</span>
        <span className="text-gray-900">N{formData.amount}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-600">Payment Method</span>
        <span className="text-blue-600">{formData.paymentMethod}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-600">Your Role</span>
        <span className="text-blue-600 capitalize">{formData.role}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-600">Counterparty</span>
        <span className="text-blue-600">{formData.counterpartyContact}</span>
      </div>

      {formData.notes && (
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Note</span>
          <span className="text-blue-600">{formData.notes}</span>
        </div>
      )}
    </div>

    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <h3 className="text-lg font-medium">Delivery Details</h3>
      <div className="flex justify-between items-center">
        <span className="text-gray-600">Delivery Type</span>
        <span className="text-blue-600 capitalize">
          {formData.deliveryType}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-600">Expected Delivery Date</span>
        <span className="text-blue-600">{formData.deliveryDate}</span>
      </div>
    </div>

    <div className="space-y-4 bg-yellow-50 p-4 rounded-lg">
      <div className="flex items-start space-x-3">
        <div className="shrink-0 text-yellow-400">
          <AlertCircle size={20} />
        </div>
        <div className="text-sm text-yellow-700">
          <h4 className="font-medium">Important Notice</h4>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Funds will be held securely in FundHaven.</li>
            <li>Only released after buyer confirms delivery.</li>
            <li>Disputes can be resolved within 24 hours</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex items-center space-x-3 pt-4">
      <button
        onClick={onGoBack}
        className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Go Back and Edit
      </button>
      <button
        onClick={onConfirm}
        className="flex-1 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Finish
      </button>
    </div>
  </div>
);

export default TransactionSummary;
