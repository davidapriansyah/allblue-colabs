const {User, Profile, Product, Order, Category} = require('../models/index.js')
const bcrypt = require('bcryptjs')

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
           
        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }


    static async category (req, res) {
        try {
            const dataCategories = await Category.findAll({})
            // res.send(dataCategories)
            res.render('categoryList', {dataCategories})
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async user (req, res) {
        try {

            const dataUserProfile = await User.findAll({
                order: [['id', 'ASC']],
                include :{
                    model: Profile,
                    attributes: ['id', 'phoneNumber', 'shippingAddress', 'UserId']
                }
            })
            // console.log(dataUserProfile)
            // res.send(dataUserProfile)   

            res.render('userProfile', {dataUserProfile})
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderEditUser (req, res) {
        try {
            const { id } = req.params;
            const hashedPassword = await bcrypt.hash('123456', 10); // Hash password
    
            // Update password user
            await User.update(
                { password: hashedPassword },
                { where: { id: id } }
            );
    
            console.log('Sukses reset password');
            res.redirect('/admin/users');
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
    static async handleEditUser (req, res) {
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
    static async deleteUser (req, res) {
        try {
            const {id} = req.params
            // console.log(req.params, '<<< req.params')

            await Profile.destroy({
                where:{
                    UserId: id
                }
            })

            await User.destroy({
                where:{id:id}
            })

            console.log('Sukses delete')
            res.redirect('/admin/users')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async product (req, res) {
        try {
            // res.send('product')
            const dataProducts = await Product.findAll({
                attributes:{
                    exclude:['ProductId']
                },
                include:{
                    model:Category,
                    attributes:{
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            })
            // res.send(dataProducts)
            res.render('listProduct',{dataProducts})
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
                imageUrl: `/uploads/${req.file.filename}`,
            }, { returning: false })

            res.redirect('/admin/products')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async renderEditProduct (req, res) {
        try {
            // res.send('edit product')
            const {id} = req.params
            // res.send(req.params)
            const dataProduct = await Product.findOne({
                attributes:{
                    exclude:['ProductId']
                },
                where:{
                    id:id
                },
                include:{
                    model: Category
                }
            })

            const dataCategory = await Category.findAll()

            // res.send(dataProduct)
            res.render('editProduct',{dataProduct, id, dataCategory})

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async handleEditProduct (req, res) {
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
                    imageUrl: `/uploads/${req.file.filename}`,
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
    static async deleteProduct (req, res) {
        try {
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async order (req, res) {
        try {


            const dataOrders = await Order.findAll({
                include: [
                    {
                        model: User,
                        attributes: { exclude: ['password'] }, // Exclude sensitive data
                    },
                    {
                        model: Product,
                        attributes: { exclude: ['ProductId'] },
                    },
                ],
            });

            // res.send(dataOrders)
            res.render('order', {dataOrders})
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }


    //STATIC ASYNC KHUSUS LOGIN ATAU LANDING PAGE USER
    static async landingPage(req, res) {
        try {

            res.render('homepage')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async renderLogUser(req, res) {
        try {

  
    

    static async getCatalog (req, res) {
        try {
                // res.send('product')
                const dataProducts = await Product.findAll({
                    attributes:{
                        exclude:['ProductId']
                    },
                    include:{
                        model:Category,
                        attributes:{
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }
                })

            res.render( 'catalog', {dataProducts}) 
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }


    static async handleLogUser(req, res) {
        try {

            res.render('/')
    static async profileDetail (req, res) {
        try {
            
            res.render('profil')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }


    static async renderRegUser(req, res) {
        try {

            res.render('registerUser')
    static async cartDetail (req, res) {
        try {
            
            res.render('order')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }


    static async handleRegUser(req, res) {
        try {

            res.redirect('/loginUser')
    static async buyProduct (req, res) {
        try {
            
            res.render('order')

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }


    static async getCatalog(req, res) {
        try {

            res.render('catalog')

    static async payment (req, res) {
        try {
            
            res.render('order')

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }


    static async profileDetail(req, res) {
        try {

            res.render('profil')

    static async renderRegUser (req, res) {
        try {
            res.render('registerUser')

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    static async cartDetail(req, res) {
        try {

            res.render('order')

    static async handleRegUser (req, res) {
        try {
            const { name, password, email, phoneNumber, shippingAddress } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    
            const newUser = await User.create({
                name,
                password: hashedPassword,
                email
            });
    
            await Profile.create({
                phoneNumber,
                shippingAddress,
                UserId: newUser.id
            });
    
            res.redirect('/loginUser');

        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
    static async buyProduct(req, res) {
        try {

            res.render('order')

    static async renderLogUser (req, res) {
        try {
            const {error} = req.query
            res.render('logUser', {error})
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async payment(req, res) {
        try {

            res.render('order')

    static async handleLogUser (req, res) {
        try {
            res.redirect('/')

        } catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
 }
}
module.exports = Controller