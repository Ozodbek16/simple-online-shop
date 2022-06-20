const express = require('express')
const router = express.Router()
const Product = require('../model/scheme')

router.get('/', async (req, res) => {
    const products = await Product.find()
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

module.exports = router