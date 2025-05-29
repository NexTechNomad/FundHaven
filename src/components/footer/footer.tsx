import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-main-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">FundHaven</h2>
          </div>

          {/* Info Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Why choose us?
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact us
            </h3>
            <div className="text-gray-400">
              <p className="mb-2">support@fundhaven.com</p>
              <p>+234 (0) 123 456 7890</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-1">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}
            </p>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
