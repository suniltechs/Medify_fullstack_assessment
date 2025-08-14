import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {ProductForm} from '../components/products/ProductForm';
import api from '../services/api';
import { Loader } from '../components/ui/Loader';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct({
          ...response.data,
          image: response.data.image ? `http://localhost:5000${response.data.image}` : null
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      await api.put(`/products/${id}`, formData);
      navigate('/products');
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="py-20">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-8">Edit Product</h1>
      {product.image && (
        <div className="mb-6 ml-60 items-center">
          <p className="text-sm font-medium text-gray-700 mb-2">Current Image:</p>
          <img
            src={product.image}
            alt="Current product"
            className="w-full max-w-xs h-auto object-contain rounded-lg border border-gray-200"
          />
        </div>
      )}
      <ProductForm 
        initialData={product} 
        onSubmit={handleSubmit} 
        isSubmitting={isSubmitting} 
      />
    </div>
  );
};

export default EditProduct;