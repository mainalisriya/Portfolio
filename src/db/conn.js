const mongoose = require("mongoose");
// var db = require("./db/conn");

//creating database
mongoose.connect("mongodb://localhost:27017/sriyamainali",{
    // useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlPraser:true,
    // { useNewUrlParser: true },
    
}).then(()=>{
    console.log("connection sucessful");

}).catch((error)=>{
    console.log(error);
})
