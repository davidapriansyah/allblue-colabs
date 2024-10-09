const express = require('express')
const router = express.Router()
const adminRoute = require('./admin.js')
const customerRoute = require('./customer.js')


// router.get('/', (req,res) => {
//     res.redirect('/incubators')
// })

router.use('/admin', adminRoute)
router.use('/customer', customerRoute)

module.exports = router