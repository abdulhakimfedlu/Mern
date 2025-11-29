const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

router.get('/', getCategories);
router.post('/', upload.single('image'), createCategory);
router.put('/:id', upload.single('image'), updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
