const express = require('express')
const router = express.Router()
const adminRoute = require('./admin.js')
const customerRoute = require('./customer.js')
const Controller = require('../controllers/controller.js')
// router.get('/', (req,res) => {
//     res.redirect('/incubators')
// })
router.get('/loginAdmin', Controller.renderLogAdmin)
router.post('/loginAdmin', Controller.handleLogAdmin)
// router.get('/loginUser', Controller.renderLogUser)
// router.post('/loginUser', Controller.handleLogUser)

router.use('/admin', adminRoute)
router.use('/customer', customerRoute)

module.exports = router