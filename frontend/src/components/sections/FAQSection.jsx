import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get started with ProductHub?",
      answer: "Getting started is easy! Simply sign up for an account, choose your plan, and you can start adding your products immediately. We offer a 14-day free trial so you can explore all features."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can change your plan at any time from your account settings. Your billing will be prorated based on the changes you make."
    },
    {
      question: "Is my data secure with ProductHub?",
      answer: "Absolutely. We use industry-standard encryption for all data in transit and at rest. Regular backups and strict access controls ensure your information is always protected."
    },
    {
      question: "Do you offer integrations with other tools?",
      answer: "Yes, we offer integrations with popular e-commerce platforms, accounting software, and CRM systems. Our API also allows for custom integrations with your existing systems."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support for all plans, with priority response times for Professional and Enterprise plans. Enterprise customers also get 24/7 phone support."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 rounded-xl bg-gradient-to-b from-primary-light/10 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-light text-sm font-semibold mb-3 tracking-wider">
            NEED HELP?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-primary-light/80 max-w-2xl mx-auto">
            Find quick answers to common questions about our platform
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left rounded-xl transition-all duration-200 ${
                  activeIndex === index 
                    ? 'bg-accent-light/10 border border-accent-light/20' 
                    : 'bg-white hover:bg-gray-50 border border-gray-100'
                }`}
              >
                <h3 className="text-lg font-semibold text-primary-dark pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <FiChevronDown className="w-6 h-6 text-accent-light" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white/80 border border-t-0 border-gray-100 rounded-b-xl">
                      <p className="text-primary-light/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-primary-light mb-6">
            Still have questions?
          </p>
          <button className="px-6 py-3 bg-accent-light hover:bg-accent-DEFAULT text-white rounded-lg font-medium transition-colors duration-200">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;