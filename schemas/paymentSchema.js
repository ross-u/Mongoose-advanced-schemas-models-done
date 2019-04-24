const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

// CREATE A SCHEMA
const paymentSchema = new Schema({
  date:{ type: Date, default: Date.now },
  amount:{ type: Number, required: true, default: 0 }
});

// EXPORT
module.exports = paymentSchema;