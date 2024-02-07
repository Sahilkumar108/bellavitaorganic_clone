const mongoose = require('mongoose');
const productschema = mongoose.Schema({
    productImage :{type: 'string',required: true},
    productName :{type: 'string',required: true},
    price:{type:Number},
    strikeprice:{type:String},
    rating:{type:String}    
})

const productmodel = mongoose.model('Product', productschema);

module.exports ={
    productmodel
}