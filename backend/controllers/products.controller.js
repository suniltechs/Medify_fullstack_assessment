const Product = require('../models/product.model');
const { Op } = require('sequelize');
const path = require('path');

// Helper function for error handling
const handleError = (res, error, context) => {
  console.error(`Error in ${context}:`, error);
  res.status(500).json({ 
    success: false,
    message: `Error ${context}`,
    error: process.env.NODE_ENV === 'development' ? error.message : undefined
  });
};

// Create Product
exports.createProduct = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Add this line
    console.log('Request file:', req.file); // Add this line
    
    const { name, description, category, stockQuantity, availability, price } = req.body;
    
    // Validate input
    if (!name?.trim() || !description?.trim() || !category || 
        stockQuantity === undefined || !availability || price === undefined) {
      console.log('Validation failed - missing fields'); // Add this
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required',
        missingFields: {
          name: !name?.trim(),
          description: !description?.trim(),
          category: !category,
          stockQuantity: stockQuantity === undefined,
          availability: !availability,
          price: price === undefined
        }
      });
    }

    // Handle image path
    let imagePath = null;
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
    }

    const product = await Product.create({ 
      name: name.trim(),
      description: description.trim(),
      category,
      stockQuantity,
      availability,
      price,
      image: imagePath
    });
    
    res.status(201).json({
      success: true,
      data: product
    });
    
  } catch (error) {
    handleError(res, error, 'creating product');
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const { search } = req.query;
    let where = {};
    
    if (search?.trim()) {
      where = {
        [Op.or]: [
          { name: { [Op.like]: `%${search.trim()}%` } },
          { description: { [Op.like]: `%${search.trim()}%` } },
          { category: { [Op.like]: `%${search.trim()}%` } }
        ]
      };
    }
    
    const products = await Product.findAll({ 
      where,
      order: [['created_at', 'DESC']]
    });
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
    
  } catch (error) {
    handleError(res, error, 'fetching products');
  }
};

// Get Single Product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    
    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      data: product
    });
    
  } catch (error) {
    handleError(res, error, 'fetching product');
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, category, stockQuantity, availability, price } = req.body;
    const image = req.file ? req.file.path : undefined;
    
    // Validate input
    if (!name?.trim() || !description?.trim() || !category || 
        stockQuantity === undefined || !availability || price === undefined) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
      });
    }

    const updateData = { 
      name: name.trim(),
      description: description.trim(),
      category,
      stockQuantity,
      availability,
      price
    };
    
    if (image) {
      updateData.image = image;
    }

    const [updated] = await Product.update(
      updateData,
      { where: { id: req.params.id } }
    );
    
    if (!updated) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }
    
    const updatedProduct = await Product.findByPk(req.params.id);
    res.status(200).json({
      success: true,
      data: updatedProduct
    });
    
  } catch (error) {
    handleError(res, error, 'updating product');
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    
    if (!deleted) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }
    
    res.status(204).end();
    
  } catch (error) {
    handleError(res, error, 'deleting product');
  }
};