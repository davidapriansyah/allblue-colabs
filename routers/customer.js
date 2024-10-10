const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller.js')

router.get('/', Controller.landingPage)
router.get('/profile', Controller.profileDetail)
router.get('/cart', Controller.cartDetail)
router.get('/buyProduct', Controller.buyProduct)
router.get('/payment', Controller.payment)


module.exports = router