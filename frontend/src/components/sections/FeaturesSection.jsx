import { motion } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaSync, FaUsers } from 'react-icons/fa';

const FeaturesSection = () => {

  const features = [
    {
      icon: <FaChartLine className="text-3xl text-accent-light" />,
      title: "Advanced Analytics",
      description: "Get detailed insights into your product performance with our powerful analytics dashboard."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-accent-light" />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security and regular backups."
    },
    {
      icon: <FaSync className="text-3xl text-accent-light" />,
      title: "Real-time Sync",
      description: "All changes sync across devices instantly, ensuring you always have the latest data."
    },
    {
      icon: <FaUsers className="text-3xl text-accent-light" />,
      title: "Team Collaboration",
      description: "Invite team members and manage permissions for seamless collaboration."
    }
  ];

  return (
    <section className="py-16 bg-secondary-default features-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Powerful <span className="text-accent-light">Features</span>
          </h2>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Everything you need to manage your products efficiently and effectively.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="feature-item bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;