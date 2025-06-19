const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
// const { isAuthenticated, isAdmin } = require('../middlewares/auth');

// Create new order
router.post('/', async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod } = req.body;

    // Validate items and calculate prices
    const orderItems = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.product);
        if (!product) {
          throw new Error(`Product not found: ${item.product}`);
        }
        if (product.stock < item.quantity) {
          throw new Error(`Insufficient stock for product: ${product.name}`);
        }
        return {
          product: item.product,
          quantity: item.quantity,
          price: product.price
        };
      })
    );

    // Create order
    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice: orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    });

    // Update product stock
    await Promise.all(
      orderItems.map(async (item) => {
        await Product.findByIdAndUpdate(item.product, {
          $inc: { stock: -item.quantity }
        });
      })
    );

    res.status(201).json({
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.post('/add', (req,res) => {
    console.log(req.body);

  new Model(req.body).save()

  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => {
    res.status(500).json({ message: 'Some error occurred' });
    console.log(err);
  });
})

// Get user orders
router.get('/my-orders', async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('items.product')
      .sort('-createdAt');
    
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single order
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.product');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if user owns the order or is admin
    if (order.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update order status (Admin only)
router.put('/:id/status', async (req, res) => {
  try {
    const { status, trackingNumber, estimatedDelivery } = req.body;
    
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status, trackingNumber, estimatedDelivery },
      { new: true, runValidators: true }
    ).populate('items.product');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({
      message: 'Order status updated successfully',
      order
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all orders (Admin only)
router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    let query = {};

    if (status) {
      query.status = status;
    }

    const orders = await Order.find(query)
      .populate('user', 'name email')
      .populate('items.product')
      .sort('-createdAt')
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Order.countDocuments(query);

    res.json({
      orders,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 