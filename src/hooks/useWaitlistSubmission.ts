import { useState } from "react";

interface UseWaitlistSubmissionReturn {
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  errorMessage: string;
  submitEmail: (email: string) => Promise<boolean>;
  resetStatus: () => void;
}

export const useWaitlistSubmission = (): UseWaitlistSubmissionReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitEmail = async (email: string): Promise<boolean> => {
    // Reset previous state
    setSubmitStatus("idle");
    setErrorMessage("");

    // Validation
    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      setSubmitStatus("error");
      return false;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setSubmitStatus("error");
      return false;
    }

    setIsSubmitting(true);

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      const response = await fetch(`${backendUrl}/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to join waitlist");
      }

      setSubmitStatus("success");
      return true;
    } catch (error: unknown) {
      setSubmitStatus("error");
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setErrorMessage(errorMessage);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus("idle");
    setErrorMessage("");
  };

  return {
    isSubmitting,
    submitStatus,
    errorMessage,
    submitEmail,
    resetStatus,
  };
};
