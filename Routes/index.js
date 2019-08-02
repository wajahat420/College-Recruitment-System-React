const express = require("express")
const router = express.Router()
// const gravatar = require("gravatar")
// const bcrypt = require("bcryptjs")
// load User Model
const User = require("../models/Users")
const confirmBuying = require("../models/confirmBuying")
const UploadImagesData = require("../models/UploadImagesData")
// const fs = require("fs")

const cloudinary = require("cloudinary").v2
cloudinary.config({ 
    cloud_name: 'deaz1bojg', 
    api_key: '645723722777177', 
    api_secret: 'XRGgePHQU2pAdluBm1nDxjCQ3_c' 
});


router.use("/studentDataUpload",(req,res)=>{
    console.log("studentDataUpload req")
    cloudinary.uploader.upload(
        "data:text/plain;base64,ZGVtbw=="
        ,{
            // tags: 'basic_sample',
            public_id : "123456",
            resource_type : "auto"  ,
            folder : "College_Recruitment/Student's_Data/"
             
        },
         function (err, result){
            console.log("result",result)
            console.log("err",err)
      
    })
})

router.post("/signup",(req,res)=>{
 
    User.findOne({email : req.body.email })
        .then(user => {
            if(user){
                res.send(false)
                console.log("signup failed user exists...")
            }else{
                res.send(true)

                let newUser = new User({
                    firstName : req.body.first_name,
                    lastName : req.body.last_name,
                    as : req.body.as,
                    email : req.body.email,
                    password : req.body.password  
                })

                newUser.save()
                    .then(user => console.log("successfully signup data"))
                    .catch(err => console.log(err))                
            }
        })
})

router.post("/login",(req,res) => {
    // console.log("req.body",req.body)
    // res.status(500).json({error : "error"})
    email  = req.body.email
    password = req.body.password
 
    User.findOne({email : email})

        .then( user => {
            console.log("user",user.email,user.password)
            console.log("entered",email,password)
            if(user && password == user.password){
                res.json({
                    valid : true,
                    user
                })
                console.log("successful Signin")
            }
            else{
                res.json({
                    valid : false
                })
            }
        })
})
router.get("/fetchStudentsFromDB",(req,res)=>{
        const arr = []
        User.find().cursor().eachAsync(async (model) => {
            if(model.as === "student"){arr.push(model)}
            console.log('model', model);
         })
         .then(() => {
            res.send(arr)
         })
        //  console.log("end")
})


router.post("/upload",(req,res)=> {
    // console.log("in req")
    // base64
    var newImgData;
    cloudinary.uploader.upload(req.body.imageURL,{ tags: 'basic_sample' }, function (err, result){
        console.log("result",result.public_id)
        console.log("err",err)
            newImgData = new UploadImagesData({
            imageID : result.public_id,
            name : req.body.name,
            price : req.body.price,
            stock : req.body.stock,
            category : req.body.category,
            adminEntry : req.body.adminEntry
        })
    })
    .then(response=> {
        newImgData.save()
        .then(response=> {
            res.send(true)
            console.log("successfully send to mongoDB")
        } )
        .catch(err=> {
            res.send(false)
            console.log("err in sending",err)
    })
    })
    .catch(err => res.send(err))
    
    // section


    
  
})
router.get("/getImages",(req,res)=>{
    console.log("worksssssssssssssss")
    
    cloudinary.api.resources((error,result) => {
        const arr = []
        UploadImagesData.find().cursor().eachAsync(async (model) => {
            arr.push(model)
            console.log('images', model);
         })
         .then(response=> {
            res.json({
                images : result.resources,
                imagesData : arr
            } )
         })
    })
})
// router.get("/getImagesData",(req,res)=> {
//     const arr = []
//     UploadImagesData.find().cursor().eachAsync(async (model) => {
//         console.log('images', model.nameOfItem);
//      });
// })


module.exports = router