const express = require('express')
const router = express.Router()
const Product = require('../model/scheme')
const Cart = require('../model/cart')

router.get('/', async (req, res) => {
    const products = await Product.find()

    // products.forEach(product => {
    //     if(product.name.toLowerCase() == req.query.search.toLowerCase()){
    //         return product
    //     }else{
    //         return false
    //     }
    // })

    res.render('home', {
        title: 'Home page',
        products,
    })
})

router.get('/product/add', (req, res) => {
    res.render('formAdd', {
        title: 'Add new product'
    })
})

router.post('/product/add', async (req, res) => {
    const product = await Product({
        name: req.body.name,
        price: +req.body.price,
        img: req.body.img,
    })
    await product.save()
    res.redirect('/')
})

router.get('/prduct/view/:id', async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.render('oneProduct', {
        title: product.name,
        product,
    })
})

// router.get('/product/buy/:id',async (req, res) => {
//     const product = await Product.findById(req.params.id)
//     await Cart.add(product)
//     res.redirect('/')
// })

router.get('/product/del/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

router.get('/product/update/:id', async (req, res) => {

    const product = await Product.findById(req.params.id)

    res.render('formUpdate', {
        title: product.name,
        product,
    })
})

router.get('/product/edit/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, {
        name: req.query.name,
        img: req.query.img,
        price: req.query.price,
    })
    res.redirect('/')
})


router.get('/api/products/data', async (req, res) => {
    res.send(await Product.find())
})

module.exports = router