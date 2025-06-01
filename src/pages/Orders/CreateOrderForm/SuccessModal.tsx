import React from "react";

interface SuccessModalProps {
  counterpartyContact: string;
  onViewOrderDetails: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  counterpartyContact,
  onViewOrderDetails,
}) => (
  <div className="flex flex-col items-center text-center space-y-4 py-4">
    <div className="text-3xl">🎉</div>
    <h2 className="text-2xl font-semibold">
      Congratulations On Creating Your Order
    </h2>
    <p className="text-gray-600">
      An Invitation Link Has Been Sent To {counterpartyContact}
    </p>
    <button
      onClick={onViewOrderDetails}
      className="w-full mt-4 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
    >
      View Order Details
    </button>
  </div>
);

export default SuccessModal;
