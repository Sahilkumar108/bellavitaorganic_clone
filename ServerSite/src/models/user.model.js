const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        "Name": {type : "string",required: true},
        "email": {type : "string",required: true},
        "password": {type : "string",required: true}
    }
);

const usermodel = mongoose.model("user",userSchema);

module.exports = {
    usermodel: usermodel
}
