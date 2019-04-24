const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Schema constructor

// IMPORT THE SCHEMA TO USE IT AS A NESTED TYPE
const paymentSchema = require('../schemas/paymentSchema');

// CREATE THE SCHEMA
const clientSchema = new Schema({
  name:{ type: String, required: true, unique: true },
  age: { type: String, required: true },
  accountActive:{ type: Boolean, default: true },
  balance: { type: Number, required: true },
  payments:{ type: [paymentSchema], required: true },
});


// CREATE THE MODEL
const Client = mongoose.model('Client', clientSchema);


// EXPORT THE MODEL
module.exports = Client;



/*  SEPARATING SCHEMAS AND MODELS:

`clientSchema` can be created as a separate `js` file and 
then imported to the `ClientModel` same as we did with the `paymentSchema`.
 */