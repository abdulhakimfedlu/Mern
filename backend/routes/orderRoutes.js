const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const { getOrders, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');

router.route('/').get(getOrders).post(upload.single('paymentScreenshot'), createOrder);
router.route('/:id').put(updateOrder).delete(deleteOrder);

module.exports = router;
