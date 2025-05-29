import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqData: FAQItem[] = [
    {
      question: "How does FundHaven's escrow service work?",
      answer:
        "FundHaven acts as a trusted third party that holds funds securely until both buyer and seller fulfill their obligations. When a transaction is initiated, the buyer deposits funds into our secure escrow account. We hold these funds until the seller delivers the agreed goods or services and the buyer confirms satisfaction. Only then are the funds released to the seller, ensuring protection for both parties.",
    },
    {
      question: "What fees does FundHaven charge?",
      answer:
        "Our fee structure is transparent with no hidden costs. We charge a small percentage of the transaction value (typically 2-3%) which is split between buyer and seller. This covers our secure escrow service, dispute resolution, and 24/7 customer support. Detailed fee information is always displayed before confirming any transaction.",
    },
    {
      question: "What happens if there's a dispute?",
      answer:
        "Our experienced dispute resolution team mediates conflicts fairly and efficiently. We review all transaction evidence, communications, and documentation provided by both parties. Most disputes are resolved within 5-7 business days. Our goal is always to find a fair solution that protects both buyer and seller interests.",
    },
    {
      question: "How do I get started with FundHaven?",
      answer:
        "Getting started is simple: 1) Create your free account with basic verification, 2) Choose your transaction type and enter details, 3) Invite the other party to join the transaction, 4) Fund the escrow when both parties agree, 5) Complete your transaction safely. Our mobile-friendly platform makes it easy to manage everything from your phone.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our secure escrow services. Can't
            find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>

                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-main-light rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you 24/7. Get in touch and we'll
              respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-main-blue text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
