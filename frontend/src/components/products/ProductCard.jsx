import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductCard = ({ product, onDelete }) => {

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="product-card bg-white rounded-xl shadow-md overflow-hidden border border-secondary-default hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        {product.image ? (
          <img
            src={product.image ? `http://localhost:5000${product.image}` : '/images/placeholder-product.jpg'}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-full bg-primary-light flex items-center justify-center">
            <span className="text-primary-dark">No Image</span>
          </div>
        )}
        <div className="absolute top-2 right-2 flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            product.availability === 'in-stock' 
              ? 'bg-green-100 text-green-800' 
              : product.availability === 'out-of-stock' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-yellow-100 text-yellow-800'
          }`}>
            {product.availability === 'in-stock' ? 'In Stock' : 
             product.availability === 'out-of-stock' ? 'Out of Stock' : 
             product.availability === 'pre-order' ? 'Pre-Order' : 'Discontinued'}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-primary-dark truncate">
            {product.name}
          </h3>
          <span className="text-accent-dark font-bold">
            ${parseFloat(product.price).toFixed(2)}
          </span>
        </div>
        
        <p className="text-sm text-primary-light mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-primary-light">
            {product.stockQuantity} in stock
          </span>
          <span className="text-xs bg-accent-light text-primary-dark px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <div className="mt-4 flex justify-between space-x-2">
          <Link
            to={`/products/edit/${product.id}`}
            className="flex-1 flex items-center justify-center bg-primary-dark text-white px-3 py-2 rounded-lg hover:bg-primary-default transition-colors duration-200 text-sm"
          >
            <FaEdit className="mr-2" /> Edit
          </Link>
          <button
            onClick={() => onDelete(product.id)}
            className="flex-1 flex items-center justify-center bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
          >
            <FaTrash className="mr-2" /> Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;