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


    //STATIC ASYNC KHUSUS LOGIN ATAU LANDING PAGE USER
    static async landingPage (req, res) {
        try {
            
            res.render('homepage')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async renderLogUser (req, res) {
        try {
            

            res.render('logUser')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async handleLogUser (req, res) {
        try {
            
            res.render('/')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async renderRegUser (req, res) {
        try {
            
            res.render('registerUser')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async handleRegUser (req, res) {
        try {
            
            res.redirect('/loginUser')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async getCatalog (req, res) {
        try {
            
            res.render('catalog')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async profileDetail (req, res) {
        try {
            
            res.render('profil')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async cartDetail (req, res) {
        try {
            
            res.render('order')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async buyProduct (req, res) {
        try {
            
            res.render('order')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async payment (req, res) {
        try {
            
            res.render('order')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = Controller