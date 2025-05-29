import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-main-light lg:bg-main-light/80 lg:backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              FundHaven
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors">
              Login
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-6 space-y-6 bg-white h-full">
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left text-gray-900 hover:text-gray-600 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2 text-sm font-medium transition-colors"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </button>
            </div>
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <button className="block w-full text-left text-gray-600 hover:text-gray-900 py-2 text-sm font-medium transition-colors">
                Login
              </button>
              <button className="block w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>

        {/* Overlay with backdrop blur */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
