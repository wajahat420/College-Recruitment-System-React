const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const users = require("./Routes/api/users")
const profile = require("./Routes/api/profile")
const posts = require("./Routes/api/posts")
const insert = require("./Routes/api/insertItem")
const fetchingItems = require("./Routes/api/fetchingItems")

const app = express()


//BodyParser
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

// config
// const  db = require("./config/keys").mongoURI

mongoose.connect("mongodb://localhost/dataa",{ useNewUrlParser: true })
.then( () => console.log("successfully connected to mongoDB") )
.catch( (err) => console.log("err",err) )



app.get("/", (req,res) => res.send("hello"));

app.use("/",fetchingItems)
app.use("/api/insert",insert)
app.use("/api/users",users);
app.use("/api/posts",posts)
app.use("/api/profile",profile)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`))