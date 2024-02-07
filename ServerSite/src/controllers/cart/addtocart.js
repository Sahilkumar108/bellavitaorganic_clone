const { cartmodel } = require("../../models/cart.model");



const addcartdata = async(req,res)=>{
    try {
        const payload = req.body;
        const exist = await cartmodel.findOne({
            userID : payload.userID,
            title : payload.title,
        });
        if(!exist){
            delete payload['_id'];
            const updatecart = new cartmodel(payload);
            try {
                await updatecart.save();
                console.log("Data saved successfully");
                res.status(200).json({ msg: "CartData added successfully", status: true });
              } catch (saveError) {
                console.error("Error saving data:", saveError);
                res.status(500).json({ msg: "Error saving data", error: saveError, status: false });
              }
        }
        else{
            res.status(400).json({ msg: "Item Already In The CartList", status: false });

        }

        
    } catch (error) {
        console.error("Something went wrong:", err);
        res.status(500).json({ msg: "Something went wrong", error: err, status: false });
    }
}



module.exports = {
    addcartdata
}