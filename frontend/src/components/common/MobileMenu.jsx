import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaBoxes, FaPlusCircle } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { path: '/', label: 'Home', icon: <FaHome className="mr-3" /> },
    { path: '/products', label: 'Products', icon: <FaBoxes className="mr-3" /> },
    { path: '/products/add', label: 'Add Product', icon: <FaPlusCircle className="mr-3" /> }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.3, ease: 'easeInOut' }
          }}
          exit={{
            opacity: 0,
            height: 0,
            transition: { duration: 0.2, ease: 'easeInOut' }
          }}
          className="md:hidden bg-primary-dark shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center px-4 py-3 text-white hover:bg-primary-light/20 rounded-lg transition-colors duration-200"
                  onClick={onClose}
                  aria-label={item.label}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;