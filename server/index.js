console.log("hello world");

const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const setRouter = require("./routes/set.routes.js");
const app = express();
const PORT = config.get("serverPort");
const cors = require('cors');

app.use(express.json());
app.use("/api/set/", setRouter);
app.use(cors());

app.get("/", (request, response) => {
    response.send("Server Starting....")
})

const start = async () =>{
    try{
        mongoose.connect(config.get("dbUrl"));
        app.listen(PORT, () => {
            console.log("Server started on port: ", PORT)
        })
    }
    catch(event){
        console.log("error:", event)
    }
}

start();