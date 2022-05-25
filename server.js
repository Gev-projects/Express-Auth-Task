const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({extended: false}));
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/mongoose-db",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
  }).then(()=>{
    let server = app.listen(8080, function () {
        let host = server.address().address
        let port = server.address().port
        console.log("server is running on port "+ port)
    })
})

module.exports = app;
require("./Routes/Auth.js");

