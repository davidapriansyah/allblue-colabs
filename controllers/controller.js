const { User, Profile, Product, Order, Category } = require('../models/index.js')

class Controller {
    static async adminHome(req, res) {
        try {

            res.render('homeAdmin')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderLogAdmin(req, res) {
        try {

            res.render('logAdmin')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleLogAdmin(req, res) {
        try {

            res.redirect('/')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }


    static async category(req, res) {
        try {
            const dataCategories = await Category.findAll({})
            // res.send(dataCategories)
            res.render('categoryList', { dataCategories })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async user(req, res) {
        try {

            const dataUserProfile = await User.findAll({
                order: [['id', 'ASC']],
                include: {
                    model: Profile,
                    attributes: ['id', 'phoneNumber', 'shippingAddress', 'UserId']
                }
            })
            // console.log(dataUserProfile)
            // res.send(dataUserProfile)   

            res.render('userProfile', { dataUserProfile })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderEditUser(req, res) {
        try {
            // res.send('edit user')
            const { id } = req.params
            // const dataUserProfile = await User.findOne({
            //     where:{id:id},
            //     include: {
            //         model: Profile,
            //         attributes:{
            //             exclude:['createdAt', 'updatedAt']
            //         }
            //     },

            // })
            // res.send(dataUserProfile)
            // res.render('editUser.ejs',{dataUserProfile, id})

            //reset password jadi 123456
            await User.update(
                { password: '123456' },
                { where: { id: id } }
            )

            console.log('Sukses reset password')
            res.redirect('/admin/users')

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleEditUser(req, res) {
        try {
            // res.send('handle edit user')
            // res.send(req.body)
            // const {id} = req.params
            // const {password} = req.body

            // await User.update(
            //     {password: password}, 
            //     {where:{id:id}}
            // )

            // console.log('Sukses reset password')
            // res.redirect('/admin/users')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async deleteUser(req, res) {
        try {
            const { id } = req.params
            // console.log(req.params, '<<< req.params')

            await Profile.destroy({
                where: {
                    UserId: id
                }
            })

            await User.destroy({
                where: { id: id }
            })

            console.log('Sukses delete')
            res.redirect('/admin/users')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async product(req, res) {
        try {
            // res.send('product')
            const dataProducts = await Product.findAll({
                attributes: {
                    exclude: ['ProductId']
                },
                order: [['id', 'ASC']],
                include: {
                    model: Category,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            })
            // res.send(dataProducts)
            res.render('listProduct', { dataProducts })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderAddProduct(req, res) {
        try {
            // res.send('add product')
            let errors = ''
            if (req.query.errors) {
                errors = req.query.errors.split(',')
            }
            // console.log(errors, '<<< errors')

            const dataCategories = await Category.findAll({

            })
            // res.send(dataCategories)
            res.render('addProduct', { dataCategories, errors })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleAddProduct(req, res) {
        try {
            // res.send(req.body)
            const { name, CategoryId, price, stock, imageUrl } = req.body
            // console.log(req.body, '<<< req.body')
            // const { imageUrl } = req.file
            // console.log(req.file, '<<<<reg file')

            await Product.create({
                name,
                CategoryId,
                price,
                stock,
                imageUrl
            }, { returning: false })

            res.redirect('/admin/products')
        } catch (error) {
            // console.log(error, '<<<<<<<< error')
            if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
                // console.log(error.errors, '<<< error.errors')
                // res.send(error.errors)
                const errMessages = error.errors.map(el => el.message)
                console.log(errMessages, '<<< errMessages')
                res.redirect(`/admin/products/add?errors=${errMessages}`)
            } else {

                res.send(error.message)
            }
        }
    }
    static async renderEditProduct(req, res) {
        try {
            // res.send('edit product')
            const { id } = req.params
            // res.send(req.params)
            const dataProduct = await Product.findOne({
                attributes: {
                    exclude: ['ProductId']
                },
                where: {
                    id: id
                },
                include: {
                    model: Category
                }
            })

            const dataCategory = await Category.findAll()

            // res.send(dataProduct)
            res.render('editProduct', { dataProduct, id, dataCategory })

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleEditProduct(req, res) {
        try {
            // res.send(req.body)
            const { id } = req.params
            const { name, CategoryId, price, stock, imageUrl } = req.body

            await Product.update(
                {
                    name,
                    CategoryId,
                    price,
                    stock,
                    imageUrl,
                },
                {
                    where: { id: id }
                }
            )
            console.log('Sukses Update')
            res.redirect('/admin/products/')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async deleteProduct(req, res) {
        try {
            // res.send('delete Product')
            const { id } = req.params

            await Product.destroy({
                where: {
                    id: id
                }
            })
            console.log('Sukses Delete Product')
            res.redirect('/admin/products')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async order(req, res) {
        try {


            // const dataOrders = await User.findAll({
            //     include: {
            //         model: Order,
            //         include: {
            //             model: Product,
            //             attributes: { exclude: ['ProductId'] },
            //         }
            //     },

            // })

            const dataOrders = await Order.findAll({
                include: {
                    model: User,
                    include: {
                        model: Product,
                        attributes: { exclude: ['ProductId'] },
                    }
                },

            })
            
            // const data = await Order.findAll({
            //     include: [User, Product]
            //   })


            res.send(dataOrders)
            // res.render('order')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = Controller