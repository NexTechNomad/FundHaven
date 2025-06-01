import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/Auth/Login";
import ForgotPasswordPage from "@/pages/Auth/Login/ForgotPassword";
import OTPPage from "@/pages/Auth/Login/OTP";
import SignupPage from "@/pages/Auth/Signup";
import OnboardingPage from "@/pages/Onboarding";
import DashboardPage from "@/pages/Dashboard";
import OrdersPage from "@/pages/Orders/OrdersOverview";

function App() {
  return (
    <Router>
      <Routes>
        {/* AUTH ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/auth/otp" element={<OTPPage />} />

        {/* ONBOARDING ROUTES */}
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* DASHBOARD ROUTES */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* ORDERS ROUTES */}
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
