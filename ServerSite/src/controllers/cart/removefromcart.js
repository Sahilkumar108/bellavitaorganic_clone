const { cartmodel } = require("../../models/cart.model");



const removecartdata = async(req,res)=>{
    try{
    const {id}= req.params;
    const {userID} = req.body;
    await cartmodel.deleteOne({_id:id,userID:userID});
    res.status(200).json({ msg: "Item reomoved from cart",status:true });

    }
    catch(err){
        res.status(400).json({ msg: "Something went wrong", error: err });

    }
}

module.exports ={
    removecartdata
}