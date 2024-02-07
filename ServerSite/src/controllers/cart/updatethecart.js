const { cartmodel } = require("../../models/cart.model");


const updatecartdata = async(req,res)=>{
    try {
        const {id,type,userID}= req.body;
        let data = await cartmodel.findOne({_id:id,userID:userID});
        console.log(data);
        const updateData = await cartmodel.updateOne({_id:id,userID:userID},{$set:{"qty":data.qty+type}});
        res.status(200).json({msg:"Updated Successfully",updatedData,status:true})

        
    } catch (error) {
        res.status(400).json({ msg: "Something went wrong", error: err });

    }
}


module.exports={
    updatecartdata
}

