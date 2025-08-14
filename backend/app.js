const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products.routes');
const path = require('path');
const multer = require('multer');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/products', productRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error('Error stack:', err.stack); // More detailed error logging
  
  // Handle multer errors specifically
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: 'File upload error',
      error: err.message
    });
  }
  
  res.status(500).json({ 
    success: false,
    message: err.message || 'Something broke!',
    error: process.env.NODE_ENV === 'development' ? {
      message: err.message,
      stack: err.stack,
      fullError: err
    } : undefined
  });
});

module.exports = app;