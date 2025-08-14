import { useState } from 'react';
import { FileUpload } from '../ui/FileUpload';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';

export const ProductForm = ({ onSubmit, isSubmitting, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    description: '',
    category: '',
    stockQuantity: 0,
    availability: 'in-stock',
    price: 0,
    image: null
  });
  
  const [preview, setPreview] = useState(initialData?.image || null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file
      });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Input
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <Input
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        
        <div className="md:col-span-2">
          <Input
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            multiline
            rows={3}
          />
        </div>
        
        <Input
          label="Stock Quantity"
          name="stockQuantity"
          type="number"
          value={formData.stockQuantity}
          onChange={handleChange}
          required
          min={0}
        />
        
        <Select
          label="Availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          options={[
            { value: 'in-stock', label: 'In Stock' },
            { value: 'out-of-stock', label: 'Out of Stock' },
            { value: 'pre-order', label: 'Pre-Order' },
            { value: 'discontinued', label: 'Discontinued' }
          ]}
          required
        />
        
        <Input
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
          min={0}
          step="0.01"
        />
      </div>
      
      <div className="mb-8">
      <FileUpload 
        onChange={handleFileChange} 
        preview={preview || (initialData?.image ? `http://localhost:5000${initialData.image}` : null)}
      />
      </div>
      
      <div className="flex justify-end">
        <Button 
          type="submit" 
          variant="primary" 
          size="large"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Product'}
        </Button>
      </div>
    </form>
  );
};