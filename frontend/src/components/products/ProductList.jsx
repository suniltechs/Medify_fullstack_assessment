import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Input } from '../ui/Input';
import { FaSearch } from 'react-icons/fa';

const ProductList = ({ products, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    let filtered = products;
    
    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category === selectedCategory
      );
    }
    
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  // Get unique categories for filter
  const categories = ['all', ...new Set(products.map(product => product.category))];

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-primary-dark mb-2">
          Product Catalog
        </h1>
        <p className="text-primary-light">
          Manage your products with ease
        </p>
      </motion.div>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Input
              name="productSearch"
              id="productSearch"
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<FaSearch className="text-primary-light" />}
              aria-label="Search products"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-dark rounded-lg focus:ring-2 focus:ring-accent-light focus:border-transparent"
              aria-label="Filter by category"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-12 text-center"
        >
          <h3 className="text-xl font-semibold text-primary-dark mb-2">
            No products found
          </h3>
          <p className="text-primary-light mb-4">
            {searchTerm || selectedCategory !== 'all' 
              ? 'Try adjusting your search or filter criteria' 
              : 'You have no products yet. Add your first product to get started.'}
          </p>
          <a 
            href="/products/add" 
            className="inline-block bg-accent-light hover:bg-accent-DEFAULT text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Add New Product
          </a>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-grid-item"
              whileHover={{ y: -5 }}
            >
              <ProductCard 
                product={{
                  ...product,
                  image: product.image ? `http://localhost:5000${product.image}` : null
                }} 
                onDelete={onDelete} 
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;