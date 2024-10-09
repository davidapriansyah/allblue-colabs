const {User,Product,Order,Category,} = require('../models/index.js')

class Controller {
    static async adminHome (req, res) {
        try {
            
            res.render('homeAdmin')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderLogAdmin (req, res) {
        try {
            
            res.render('logAdmin')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleLogAdmin (req, res) {
        try {
            
            res.redirect('/')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }


    static async category (req, res) {
        try {
            

         res.render('categoryList')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async user (req, res) {
        try {
            
         res.render('userProfile')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderEditUser (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleEditUser (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async deleteUser (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async product (req, res) {
        try {
            
            res.render('listProduct')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderAddProduct (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleAddProduct (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderEditProduct (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleEditProduct (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async deleteProduct (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async order (req, res) {
        try {
            
            res.render('order')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = Controller