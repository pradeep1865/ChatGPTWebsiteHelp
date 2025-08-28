const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  description: String,
  imageUrl: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
