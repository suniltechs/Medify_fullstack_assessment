const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.controller');

// CRUD Routes
router.post('/', upload.single('image'), createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.put('/:id', upload.single('image'), updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;