const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { getFoodItems, createFoodItem, updateFoodItem, deleteFoodItem } = require('../controllers/foodItemController');

router.get('/', getFoodItems);
router.post('/', upload.single('image'), createFoodItem);
router.put('/:id', upload.single('image'), updateFoodItem);
router.delete('/:id', deleteFoodItem);

module.exports = router;
