import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Accinzia offer?",
      answer:
        "Accinzia offers comprehensive business services including company registration, compliance, IP protection, tax planning, GST registration, startup certification, and digital solutions. We cater to businesses of all sizes, from startups to established enterprises.",
    },
    {
      question: "How long does it take to register a company?",
      answer:
        "Company registration typically takes 7–15 business days, depending on the type of business structure and document verification.",
    },
    {
      question: "What is the cost of trademark registration?",
      answer:
        "Trademark registration costs vary based on the number of classes. Typically, a single class ranges from ₹4,500 to ₹9,000.",
    },
    {
      question: "Do you provide GST compliance services?",
      answer:
        "Yes, we provide complete GST compliance services including registration, monthly filings, and annual returns.",
    },
    {
      question: "What is Startup India Certification?",
      answer:
        "Startup India Certification provides tax benefits and funding opportunities. We assist with the complete certification process.",
    },
    {
      question: "Can you help with trademark renewal?",
      answer:
        "Yes, we manage the entire trademark renewal process and provide timely reminders before expiration.",
    },
    {
      question: "What documents are required for company registration?",
      answer:
        "PAN, Aadhaar, address proof, bank statements, and landlord NOC. Requirements vary by company type.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment options for startups and growing businesses.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="reveal relative w-full py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
                  bg-white/5 backdrop-blur-lg
                  border border-white/10
                  rounded-xl overflow-hidden
                  hover:border-purple-400/40
                  transition-colors
                "
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {faq.question}
                  </h3>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="
                      w-8 h-8 rounded-full
                      bg-gradient-to-r from-purple-400 to-pink-400
                      flex items-center justify-center
                      text-white font-bold
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-2 border-t border-white/10">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="
            mt-16
            bg-gradient-to-r from-purple-600/20 to-pink-600/20
            border border-purple-500/30
            rounded-xl p-8 text-center
            backdrop-blur-lg
          "
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Can’t find the answer you’re looking for? Our team is happy to help.
          </p>
          <button className="
            bg-purple-600 hover:bg-purple-700
            text-white font-bold py-3 px-8
            rounded-lg
            transition-all duration-300
            hover:shadow-lg hover:shadow-purple-500/40
          ">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
