const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carName: String,
  manufacturingYear: Number,
  price: Number
});

module.exports = mongoose.model('Car', carSchema);

