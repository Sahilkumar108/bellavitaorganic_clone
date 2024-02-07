const { cartmodel } = require("../../models/cart.model");


const  getcartdata = async(req, res)=>{
    try {
        const {UserID} = await req.body;
        const cartData = await cartmodel.find({UserID});
        res.status(200).json({ cartData });



    } catch (err) {
        res.status(400).json({ msg: "Something went wrong", error: err });

    }
};

module.exports = {
    getcartdata
}