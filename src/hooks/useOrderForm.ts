import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormData } from "@/pages/Orders/CreateOrderForm/orderTypes.ts";

const initialFormData: FormData = {
  title: "",
  amount: "",
  paymentMethod: "",
  role: "buyer",
  counterpartyContact: "",
  deliveryDate: "",
  deliveryType: "digital",
  notes: "",
  agreeToTerms: false,
};

export const useOrderForm = () => {
  const navigate = useNavigate();
  const [showSummary, setShowSummary] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSummary(true);
  };

  const handleConfirm = () => {
    // Here we'll add the API call later
    console.log("Order confirmed:", formData);
    setShowSummary(false);
    setShowSuccess(true);
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGoBack = () => setShowSummary(false);

  const handleViewOrderDetails = () => {
    setShowSuccess(false);
    navigate("/orders");
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    navigate("/orders");
  };

  return {
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
  };
};
