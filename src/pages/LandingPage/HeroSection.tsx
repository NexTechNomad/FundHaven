import { Sparkle, ArrowRight } from "lucide-react";
import heroGridPattern from "@/assets/images/hero-grid.png";
import blockImage from "@/assets/images/block.png";
import socialProofOne from "@/assets/images/1.jpg";
import socialProofTwo from "@/assets/images/2.jpg";
import socialProofThree from "@/assets/images/3.jpg";
import socialProofFour from "@/assets/images/4.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Grid Pattern with Gradient Mask */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-[65%] h-full"
          style={{
            backgroundImage: `url(${heroGridPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "intersect",
            filter: "blur(0px)",
            zIndex: 0,
          }}
        ></div>
        {/* Subtle bottom blur overlay */}
        <div
          className="absolute w-[65%] h-full"
          style={{
            backgroundImage: `url(${heroGridPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.4,
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent 0%, transparent 80%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent), linear-gradient(to bottom, transparent 0%, transparent 80%, black 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "intersect",
            filter: "blur(2px)",
            zIndex: 1,
          }}
        ></div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-100 rounded-full opacity-20 blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 z-10">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <Sparkle className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm text-gray-700 font-medium">
              Secure Deals, Trusted Results
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="inline-block mr-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative align-top">
                <img
                  src={blockImage}
                  alt="Digital Block Background"
                  className="object-contain shadow-lg"
                />
                <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-5xl md:text-7xl tracking-wide drop-shadow-lg">
                  Digital
                </span>
              </span>
              <span className="inline-block mt-3 align-top">
                Escrow, Built for Africa
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Protecting buyers and sellers across Africa with seamless mobile
            money integration and transparent transaction flow. Whether you're a
            freelancer, importer, or small business, our platform ensures safe,
            simple, and mobile-first escrow transactions—powering trust in every
            deal.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex -space-x-2">
              <img
                src={socialProofOne}
                alt="User testimonial"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform object-cover"
              />
              <img
                src={socialProofTwo}
                alt="User testimonial"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform object-cover"
              />
              <img
                src={socialProofThree}
                alt="User testimonial"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform object-cover"
              />
              <img
                src={socialProofFour}
                alt="User testimonial"
                className="w-10 h-10 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform object-cover"
              />
            </div>
            <p className="text-sm text-gray-700 font-medium italic">
              We are trusted by Fortune 500 Companies
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-main-dark text-white px-8 py-4 rounded-sm text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get started now
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-black px-6 py-4 text-lg font-medium transition-colors group">
              How It Works
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
