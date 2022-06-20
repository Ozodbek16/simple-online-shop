const express = require('express')
const router = express.Router()
const Product = require('../model/scheme')

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page'
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
        price: req.body.price,
        img: req.body.img,
    })
    await product.save()
    res.redirect('/')
})

module.exports = router