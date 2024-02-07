const {productmodel} = require('../models/product.model');

const getProduct = async(req,res)=>{
    try {
        let data = await productmodel.find();
        res.status(200).json({data})

    } catch (error) {
        res.send(error)
    }
}



module.exports={
    getProduct
}


