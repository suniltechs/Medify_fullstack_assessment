import { motion } from 'framer-motion';
import { FaCheck, FaChartBar, FaClock, FaUsersCog } from 'react-icons/fa';

const BenefitsSection = () => {


  const benefits = [
    {
      icon: <FaClock className="text-2xl text-accent-light" />,
      title: "Save Time",
      items: [
        "Reduce manual data entry",
        "Automate repetitive tasks",
        "Quick access to all product info"
      ]
    },
    {
      icon: <FaChartBar className="text-2xl text-accent-light" />,
      title: "Gain Insights",
      items: [
        "Real-time performance metrics",
        "Identify top-selling products",
        "Track inventory levels"
      ]
    },
    {
      icon: <FaUsersCog className="text-2xl text-accent-light" />,
      title: "Collaborate Easily",
      items: [
        "Share product data with teams",
        "Role-based access control",
        "Real-time updates"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white benefits-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Key <span className="text-accent-light">Benefits</span>
          </h2>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Discover how our platform can transform your product management workflow.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-item bg-secondary-default p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center mb-6 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4 text-center">
                {benefit.title}
              </h3>
              <ul className="space-y-3">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="text-accent-light mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;