const express = require('express');
const router = express.Router();
const Controller = require('../controllers/controller.js');

// Customer routes
router.get('/', Controller.landingPage);
router.get('/profile', Controller.profileDetail);
router.get('/chart', Controller.cartDetail);
router.get('/buyProduct', Controller.buyProduct);
router.get('/payment', Controller.payment);
router.get('/catalog', Controller.getCatalog);

module.exports = router;
