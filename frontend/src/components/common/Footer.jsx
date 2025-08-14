import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-accent-light">Product</span>Hub
            </h3>
            <p className="text-secondary-dark mb-4">
              The ultimate solution for modern product management with advanced features and analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Products</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary-dark hover:text-accent-light transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-primary-light pt-8 text-center text-secondary-dark">
          <p>Developed By <a href="https://www.linkedin.com/in/sunil-sowrirajan-40548826b/"><span className='text-accent-light'>Sunil Sowrirajan</span></a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;