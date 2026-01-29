import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Accinzia offer?",
      answer: "Accinzia offers comprehensive business services including company registration, compliance, IP protection, tax planning, GST registration, startup certification, and digital solutions. We cater to businesses of all sizes, from startups to established enterprises."
    },
    {
      question: "How long does it take to register a company?",
      answer: "Company registration typically takes 7-15 business days, depending on the type of business structure and document verification. Private Limited Companies usually take 10-15 days, while OPC and Partnership registrations may be faster."
    },
    {
      question: "What is the cost of trademark registration?",
      answer: "Trademark registration costs vary based on the number of classes and goods/services you want to protect. Typically, a single class registration ranges from ₹4,500 to ₹9,000. We provide customized quotes based on your specific requirements."
    },
    {
      question: "Do you provide GST compliance services?",
      answer: "Yes, we provide complete GST compliance services including registration, monthly/quarterly filings, annual returns, and amendment services. Our team ensures timely and accurate filing to keep your business compliant."
    },
    {
      question: "What is Startup India Certification and how can it help?",
      answer: "Startup India Certification is a government recognition that provides tax benefits and facilitates funding opportunities. We help you get certified and access the Startup India ecosystem for better growth opportunities."
    },
    {
      question: "Can you help with trademark renewal?",
      answer: "Absolutely! We provide trademark renewal services to ensure your intellectual property rights remain protected. We manage the entire renewal process and send timely reminders before expiration."
    },
    {
      question: "What documents are required for company registration?",
      answer: "For Private Limited Company, you'll typically need: PAN/Aadhar of directors, address proof, bank statements, and NoC from landlord. Exact requirements vary by company type. We guide you through the complete documentation process."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment options for our services. We understand that startups and growing businesses may need flexible arrangements. Please contact us to discuss payment plans that work for you."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services and business processes.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/10 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white text-left group-hover:text-purple-300 transition-colors">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index ? '−' : '+'}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-8 pb-6 pt-0 border-t border-white/10 animate-in fade-in duration-300">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 text-center backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
