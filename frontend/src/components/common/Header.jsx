import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaShoppingBag, FaUser, FaSearch } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-dark shadow-lg py-2' : 'bg-primary-dark py-4'}`}>
      <div className="container mx-auto px-4 header-content">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <FaShoppingBag className="text-accent-light text-2xl" />
            <Link to="/" className="text-2xl font-bold text-white">
              Product<span className="text-accent-light">Hub</span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative text-white hover:text-accent-light transition-colors duration-200 ${location.pathname === '/' ? 'font-semibold' : ''}`}
            >
              Home
              {location.pathname === '/' && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-accent-light"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
            <Link
              to="/products"
              className={`relative text-white hover:text-accent-light transition-colors duration-200 ${location.pathname === '/products' ? 'font-semibold' : ''}`}
            >
              Products
              {location.pathname === '/products' && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-accent-light"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
            <Link
              to="/products/add"
              className="bg-accent-light hover:bg-accent-DEFAULT text-primary-dark px-4 py-2 rounded-md font-medium transition-colors duration-200 flex items-center"
            >
              Add Product
            </Link>
            <button className="text-white hover:text-accent-light transition-colors duration-200">
              <FaUser className="text-xl" />
            </button>
          </nav>

          <button
            className="md:hidden text-2xl text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} currentPath={location.pathname} />
    </header>
  );
};

export default Header;