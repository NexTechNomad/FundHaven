import { useState, useEffect } from "react";

interface UseWaitlistCountReturn {
  count: number | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useWaitlistCount = (
  shouldFetch: boolean = true
): UseWaitlistCountReturn => {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWaitlistCount = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const baseUrl =
        import.meta.env.VITE_BACKEND_URL;

      const response = await fetch(`${baseUrl}/api/waitlist/count`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success && typeof data.count === "number") {
        setCount(data.count);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Error fetching waitlist count:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch count");
      setCount(1500);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchWaitlistCount();
    }
  }, [shouldFetch]);

  return {
    count,
    isLoading,
    error,
    refetch: fetchWaitlistCount,
  };
};
