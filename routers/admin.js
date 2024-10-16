const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller.js')

router.get('/', Controller.adminHome)
router.get('/categories', Controller.category)
router.get('/users', Controller.user)
router.get('/users/edit/:id', Controller.renderEditUser)
router.post('/users/edit/:id', Controller.handleEditUser)
router.get('/users/delete/:id', Controller.deleteUser)
router.get('/products/', Controller.product)
router.get('/products/add', Controller.renderAddProduct)
router.post('/products/add', Controller.handleAddProduct)
router.get('/products/edit/:id', Controller.renderEditProduct)
router.post('/products/edit/:id', Controller.handleEditProduct)
router.get('/products/delete/:id', Controller.deleteProduct)
router.get('/orders', Controller.order)

module.exports = router;
