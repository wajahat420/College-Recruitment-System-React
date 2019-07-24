const express = require("express")
const router = express.Router()
// const gravatar = require("gravatar")
// const bcrypt = require("bcryptjs")
// load User Model
const User = require("../../models/Users")

router.use("/test",(req,res) => 
    res.json({
    msg : "user works"
})) 


// register user

router.post("/register",(req,res)=>{
    console.log("req.body.email",req.body.email)
    User.findOne({email : req.body.email })
        .then(user => {
            if(user){
                // console.log("user",user)
                return res.status(400).json({email : "email already exists"})
            }else{

                let newUser = new User({
                    name : req.body.name,
                    email : req.body.email,
                    // avatar,
                    password : req.body.password    
                })
                // console.log("newUser",newUser)

                newUser.save()
                    .then(user => console.log("successfully uploaded data"))
                    .catch(err => console.log(err))

                
            }
        })
})

router.post("/login",(req,res) => {
    email  = req.body.email
    password = req.body.password

    User.findOne({email : email})
        .then( user => {
            if(!user){
                return res.status(404).json({email : "user not found"})
            }
            if(password == user.password){
                res.status(400).json({msg: "Successfully Login" })
            }
            else{
                return res.status(404).json({password : "password incorrect"})

            }
        })
})

module.exports = router