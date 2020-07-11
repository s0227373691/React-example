const express = require('express');
const router = express.Router();

const Product = require('../../modules/product');


router.get('/', (req, res) => {
    Product.find()
        .then(data => res.json(data))
        .catch(err => {
            console.log(err.message);
            res.status(400).send('Server error')
        })
})

module.exports = router;