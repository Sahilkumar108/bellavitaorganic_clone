const express = require("express");
const connection = require("./configs/db");
const { allRoutes } = require("./routes/allRoutes");
const cors=require("cors");


const app = express();
app.use(cors(),express.json());
require("dotenv").config();
const port = process.env.PORT;

app.use("/", allRoutes );


app.listen(port,async(req,res)=>{
    try {
        await connection;
        console.log(`connected`);
        console.log(`listening to the port : ${port}`);

    } catch (error) {
        console.log(`Error : ${error}`)
    }
})