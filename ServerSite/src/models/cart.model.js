const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    productImage :{type: 'string',required: true},
    productName :{type: 'string',required: true},
    price:{type:Number},
    strikeprice:{type:String},
    rating:{type:String}   ,
    userId:{type:String}
,
    Name: {type: 'string',required: true}
});


const cartmodel = mongoose.model('Cart',cartSchema);

module.exports = {cartmodel}