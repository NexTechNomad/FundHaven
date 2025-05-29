import blockImage from "@/assets/images/about.png";

const About = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Enhanced Image */}
          <div className="relative group">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-main-light to-gray-100 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>

            {/* Main image container */}
            <div className="relative bg-white p-3 rounded-2xl shadow-xl transform group-hover:-translate-y-2 transition-all duration-300">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={blockImage}
                  alt="Team collaboration and innovation"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-8 right-8 grid grid-cols-3 gap-2 opacity-60">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-main-blue rounded-full"
                ></div>
              ))}
            </div>
          </div>

          {/* Right side - Enhanced Content */}
          <div className="space-y-8">
            {/* Section label */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-0.5 bg-main-blue"></div>
              <span className="text-sm font-medium text-main-blue uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Building Trust in
              <span className="text-main-blue"> Digital Commerce</span>
            </h2>

            {/* Content */}
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                We're revolutionizing digital transactions across Africa by
                providing secure, transparent, and mobile-first escrow services.
                Our platform bridges the trust gap in online commerce,
                empowering freelancers, importers, and small businesses to
                transact with confidence.
              </p>

              <div className="bg-main-light p-6">
                <p className="italic text-gray-700 relative">
                  <span className="text-4xl text-main-blue absolute -top-2 -left-1">
                    "
                  </span>
                  <span className="ml-6">
                    Our mission is to democratize secure digital payments across
                    Africa, ensuring every transaction is protected by
                    cutting-edge technology and transparent processes that build
                    lasting trust between buyers and sellers.
                  </span>
                  <span className="text-4xl text-main-blue">"</span>
                </p>
              </div>

              {/* Key features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Secure Transactions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-main-blue rounded-full"></div>
                  <span className="text-gray-700">Mobile Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-700">Transparent Process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
