const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
// const fs = require("fs")

// const cloudinary = require("cloudinary").v2
// cloudinary.config({ 
//     cloud_name: 'deaz1bojg', 
//     api_key: '645723722777177', 
//     api_secret: 'XRGgePHQU2pAdluBm1nDxjCQ3_c' 
// });


// const index = require("./Routes/index")
// app.use("/",index)


const app = express()
const mongoURI = "mongodb://localhost/College-Recruitment-Sysytems"

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())



mongoose.connect(mongoURI,{ useNewUrlParser: true })
.then( () => console.log("successfully connected to mongoDB") )
.catch( (err) => console.log("err",err) )



app.get("/", (req,res) =>{
    res.send("working server");

})  
app.get("/getImages",(req,res)=> {
  cloudinary.api.resources((error,result) => {
    res.send( result.resources)
  })
})


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`))