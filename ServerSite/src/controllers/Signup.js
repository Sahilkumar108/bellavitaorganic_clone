const {usermodel}= require('../models/user.model');
const bcrypt = require('bcrypt');


const Signup =  async(req,res)=>{
    const {email,Name,password} = req.body;
    try {
        const user = await usermodel.findOne({email}); 
        if (user) {
            res.send(`user already exist `)
        } else {
            bcrypt.hash(password, 5,async(err, hash)=>{
                console.log(hash);
                if (err) {
                    res.send(`There was an error while hashing your password`)
                } else {
                    const new_user = new usermodel({email,Name,password:hash});
                    await new_user.save();
                    res.send(`New account has been created successfully`);
                }
            })
        }
    } catch (error) {
        res.send(`error in registering the user and the error message is ${error}`);
    }
} 

module.exports ={
    Signup
}