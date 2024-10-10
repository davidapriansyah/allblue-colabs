const express = require('express') 
const router = express.Router()
const Controller = require('../controllers/controller.js')
const multer  = require('multer')
const path = require('path')


// Setup storage untuk multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads'); // folder tempat menyimpan file
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // memberi nama file unik
    },
  });
  
  const upload = multer({ storage: storage });
  


// // Define a route for file uploads
// app.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send('No file uploaded.');
//   }
//   res.send(`File uploaded successfully: ${req.file.filename}`);
// });


router.get('/', Controller.adminHome)
router.get('/categories', Controller.category)
router.get('/users', Controller.user)
router.get('/users/edit/:id', Controller.renderEditUser)
router.post('/users/edit/:id', Controller.handleEditUser)
router.get('/users/delete/:id', Controller.deleteUser)
router.get('/products/', Controller.product)
router.get('/products/add', Controller.renderAddProduct)
router.post('/products/add', upload.single('imageUrl'), Controller.handleAddProduct)
router.get('/products/edit/:id', Controller.renderEditProduct)
router.post('/products/edit/:id',upload.single('imageUrl'), Controller.handleEditProduct)
router.get('/products/delete/:id', Controller.deleteProduct)
router.get('/orders', Controller.order)

module.exports = router