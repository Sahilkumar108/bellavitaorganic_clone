const { usermodel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');




const Login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const registereduser = await usermodel.findOne({email});
        if (registereduser) {
            bcrypt.compare(password, registereduser.password, function(err, result) {
                // result == true
                if (result) {
                    const token = jwt.sign({ userId: registereduser._id },             process.env.SECRET
                        );
                    res.status(200).json({
                        msg: "Login successful",
                        status: true,
                        token,
                        user: {  email: email },
                      });

                    // res.send("Login succesfull" token)


                } else {
                    res
                    .status(400)
                    .json({ msg: "INCORRECT CREDENTIALS", status: false });
                }
            });      
          } else {
            res.status(400).json({ msg: "USER NOT REGISTERED", status: false });
        }
        
    } catch (error) {
        // console.log(`error while login: ${error}`)S
        res
        .status(400)
        .json({ msg: "USER LOGIN FAILED", error: err, status: false });    }
}

module.exports ={
    Login
}

