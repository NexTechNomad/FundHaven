import Modal from "@/components/modal";
import TransactionSummary from "./TransactionSummary";
import SuccessModal from "./SuccessModal";
import FormField from "@/components/forms";
import { useOrderForm } from "@/hooks/useOrderForm";

const CreateOrderForm = () => {
  const {
    formData,
    showSummary,
    showSuccess,
    handleSubmit,
    handleConfirm,
    updateFormData,
    handleGoBack,
    handleViewOrderDetails,
    handleCloseSuccess,
    setShowSummary,
  } = useOrderForm();

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            label="Transaction Title"
            placeholder="E.g Website for client"
            value={formData.title}
            onChange={(value) => updateFormData("title", value)}
          />

          <FormField
            label="Amount"
            placeholder="E.g ₦250,000"
            value={formData.amount}
            onChange={(value) => updateFormData("amount", value)}
          />

          <FormField
            label="Payment Method"
            placeholder="Paystack"
            value={formData.paymentMethod}
            onChange={(value) => updateFormData("paymentMethod", value)}
          />

          <FormField
            label="You are the:"
            type="select"
            value={formData.role}
            onChange={(value) => updateFormData("role", value)}
            options={[
              { value: "buyer", label: "Buyer" },
              { value: "seller", label: "Seller" },
            ]}
          />

          <FormField
            label="Counterparty Email or Phone"
            placeholder="E.g seller@gmail.com"
            value={formData.counterpartyContact}
            onChange={(value) => updateFormData("counterpartyContact", value)}
          />

          <FormField
            label="Expected Delivery Date"
            type="date"
            value={formData.deliveryDate}
            onChange={(value) => updateFormData("deliveryDate", value)}
          />

          <FormField
            label="Delivery Type"
            type="select"
            value={formData.deliveryType}
            onChange={(value) => updateFormData("deliveryType", value)}
            options={[
              { value: "digital", label: "Digital" },
              { value: "physical", label: "Physical" },
            ]}
          />

          <FormField
            label="Transactional Notes (optional)"
            type="textarea"
            placeholder="Add any extra details or expectation"
            value={formData.notes}
            onChange={(value) => updateFormData("notes", value)}
            rows={4}
          />

          <FormField
            type="checkbox"
            label=""
            value={formData.agreeToTerms}
            onChange={(value) => updateFormData("agreeToTerms", value)}
            checkboxLabel="I agree to Fundhaven terms and condition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mt-6"
        >
          Create Order
        </button>
      </form>

      <Modal
        isOpen={showSummary}
        onClose={() => setShowSummary(false)}
        title="Transaction Summary"
      >
        <TransactionSummary
          formData={formData}
          onGoBack={handleGoBack}
          onConfirm={handleConfirm}
        />
      </Modal>

      <Modal isOpen={showSuccess} onClose={handleCloseSuccess} title="">
        <SuccessModal
          counterpartyContact={formData.counterpartyContact}
          onViewOrderDetails={handleViewOrderDetails}
        />
      </Modal>
    </>
  );
};

export default CreateOrderForm;
