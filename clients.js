const mongoose = require('mongoose');
const data = require('./data.js');
const dbName = 'iron-bank';

const Client = require('./models/ClientModel.js');


// CREATE AN INSTANCE OF CONNECTION TO DATABASE - `example-mongoose` 
mongoose.connect(`mongodb://localhost/${dbName}`)
  .then(() => console.log(`Connected to Mongo Database -> ${dbName}`))
  .catch((err) => console.error(`Error connecting to Mongo Database - ${dbName}`, err));





// INSERTING DOCUMENTS - `Model.create`
// https://mongoosejs.com/docs/api.html#model_Model.create

let client1 = {
  name: "Lidia Campos",
  age: 60,
  accountActive: true,
  balance: 31218.56,
  payments: []
}

Client.create( client1 , (err, result) => {
    if (err) console.log(err);
    else console.log('Document inserted', result);
  }
);





// RETRIEVE A SINGLE DOCUMENT - `Model.findById`
//https://mongoosejs.com/docs/api.html#model_Model.findById

Client.findById('5cc0cc295543162c7451b79b')
  .then( (result) => console.log(result))
  .catch( (err) => console.log(err));






//  INSERT MULTIPLE DOCUMENTS - `Model.insertMany`
//  https://mongoosejs.com/docs/api.html#model_Model.insertMany

Client.insertMany(data)
  .then( (result) => console.log(result))
  .catch(err=> console.log(err))





//  RETRIEVE DOCUMENTS  - `Model.find`
//  https://mongoosejs.com/docs/api.html#model_Model.find

Client.find()
  .then((result) => {
    let total = 0;
    result.forEach((client) => total += client.balance);

    console.log(`TOTAL: ${(total).toFixed(2)} USD`);
  })
  .catch(err => console.log(err));





// UPDATE ONE DOCUMENT  - Model.findOneAndUpdate
// https://mongoosejs.com/docs/api.html#query_Query-findOneAndUpdate

const multiplePayments = [{amount: 650}, {amount: 550}, {amount: 450}];

Client.findOneAndUpdate({ name: 'Carol Whitney' }, { $set: { payments:  multiplePayments } })
  .then((result) => console.log('Field payments successfuly updated', result))
  .catch(err => console.log(err));






// DELETE ONE DOCUMENT -  Model.deleteOne
//https://mongoosejs.com/docs/api.html#model_Model.deleteOne

Client.deleteOne({ name:'Maddox Leon'})
   .then( (result) => console.log('Success deleting document', result))
   .catch(err => console.log(err));