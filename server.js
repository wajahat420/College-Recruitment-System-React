const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

// const cloudinary = require("cloudinary").v2
// cloudinary.config({ 
//     cloud_name: 'deaz1bojg', 
//     api_key: '645723722777177', 
//     api_secret: 'XRGgePHQU2pAdluBm1nDxjCQ3_c' 
// });


const index = require("./Routes/index")

const app = express()
const mongoURI = "mongodb://localhost/College-Recruitment-System"

// app.use(methodOverride('_method'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));




mongoose.connect(mongoURI,{ useNewUrlParser: true })
.then( () => console.log("successfully connected to mongoDB") )
.catch( (err) => console.log("err",err) )

app.use("/",index)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`))