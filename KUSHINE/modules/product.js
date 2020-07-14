const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {
  timestamps: true,
})

module.exports = Product = mongoose.model('product', ProductSchema);