import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ProductForm} from '../components/products/ProductForm';
import api from '../services/api';

const AddProduct = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('category', formData.category);
      data.append('stockQuantity', formData.stockQuantity);
      data.append('availability', formData.availability);
      data.append('price', formData.price);
      
      if (formData.image) {
        data.append('image', formData.image);
      }

      await api.post('/products', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      navigate('/products', { 
        state: { 
          success: 'Product added successfully!' 
        },
        replace: true
      });
    } catch (err) {
      console.error('Full error:', err);
      setError(err.response?.data?.message || 
              'Failed to add product. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20">
      <h1 className="text-3xl text-center  font-bold text-gray-800 mb-8">Add New Product</h1>
      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      <ProductForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
};

export default AddProduct;