import blockRegistration from "@/assets/images/registration.png";
import blockFund from "@/assets/images/fund.png";
import blockUnlock from "@/assets/images/unlock.png";
import { Lock, Zap, Smartphone, Eye, MapPin, CheckCircle } from "lucide-react";

const HowAndWhyUs = () => {
  const howItWorksSteps = [
    {
      title: "Registration",
      description:
        "Create your secure FundHaven account in minutes. Verify your identity and connect your preferred payment methods to start transacting safely.",
      image: blockRegistration,
    },
    {
      title: "Fund Escrow",
      description:
        "Deposit funds into our secure escrow system. Your money is safely held until both parties fulfill their agreement terms and conditions.",
      image: blockFund,
    },
    {
      title: "Release Funds",
      description:
        "Once the transaction is completed and verified, funds are automatically released to the recipient. Fast, secure, and transparent.",
      image: blockUnlock,
    },
  ];

  return (
    <div className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* How Escrow Works Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How FundHaven Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Powering Africa's Digital Economy—One Trusted Transaction At A Time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 cursor-pointer">
            {howItWorksSteps.map((step, index) => {
              return (
                <div key={index} className="relative h-full">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-10 h-10 mb-6 text-left">
                      <img
                        src={step.image}
                        alt={`${step.title} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-left flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Trusted escrow, built for Africa's digital economy. We secure
              transactions between buyers and sellers with mobile-first
              simplicity, fraud protection, and seamless mobile money
              integration—empowering businesses and individuals to trade with
              confidence across the continent.
            </p>
          </div>

          {/* Sleek Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Primary Feature - Secure */}
            <div className="cursor-pointer lg:col-span-2 lg:row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-500 group">
              <div className="flex flex-col justify-center items-start h-full">
                <div className="w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Lock className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Secure
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Funds held in escrow until both parties are satisfied,
                  minimizing fraud risk. Advanced encryption and multi-layer
                  security protocols protect every transaction.
                </p>
              </div>
            </div>

            {/* Lightning Fast */}
            <div className="cursor-pointer lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-500 group">
              <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quick setup, instant notifications, and smooth payout processes.
              </p>
            </div>

            {/* Mobile-Ready */}
            <div className="cursor-pointer bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-500 group">
              <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Smartphone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Mobile-Ready
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless integration with mobile money & easy-to-use on any
                device.
              </p>
            </div>

            {/* Transparent */}
            <div className="cursor-pointer bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-500 group">
              <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Eye className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Transparent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear transaction tracking with no hidden fees.
              </p>
            </div>

            {/* Built for Africa - Full Width */}
            <div className="cursor-pointer md:col-span-2 lg:col-span-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-sm border border-yellow-100 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Built for Africa
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed max-w-2xl">
                    Designed for local payment habits & cross-border
                    transactions. Supporting multiple African currencies and
                    payment methods.
                  </p>
                </div>
                <div className="hidden lg:block ml-8">
                  <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-yellow-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowAndWhyUs;
