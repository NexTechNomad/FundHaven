import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/Auth/Login";
import SignupPage from "@/pages/Auth/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
