import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import FeaturesSection from '../components/sections/FeaturesSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PricingSection from '../components/sections/PricingSection';
import FAQSection from '../components/sections/FAQSection';

const Home = () => {
  return (
    <div className="overflow-hidden pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center rounded-xl overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary-dark/80 to-primary-dark/60"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-accent-light/70 rounded-full mb-6 border border-accent-light/10"
            >
              <span className="text-sm font-medium text-white tracking-wider">
                PRODUCT MANAGEMENT REIMAGINED
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your <span className="text-accent-light">Product</span> Workflow
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10"
            >
              The all-in-one platform that empowers teams to manage products effortlessly with AI-powered insights and seamless collaboration.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/products">
                <Button 
                  variant="primary" 
                  size="large"
                  className="group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    Explore Products →
                  </span>
                </Button>
              </Link>
              <Link to="/products/add">
                <Button 
                  variant="outline" 
                  size="large"
                  className="bg-white/10 text-accent-light hover:bg-white/20 backdrop-blur-sm border-white/20"
                >
                  Add New Product
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-10 h-16 border-4 border-white/30 rounded-full flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <FeaturesSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Home;