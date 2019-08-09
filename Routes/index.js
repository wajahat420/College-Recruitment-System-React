const express = require("express")
const router = express.Router()
// const gravatar = require("gravatar")
// const bcrypt = require("bcryptjs")
// load User Model
const User = require("../models/Users")
const Post = require("../models/Post")
const uploadStudentData = require("../models/UploadImagesData")
// const fs = require("fs")

const cloudinary = require("cloudinary").v2
cloudinary.config({ 
    cloud_name: 'deaz1bojg', 
    api_key: '645723722777177', 
    api_secret: 'XRGgePHQU2pAdluBm1nDxjCQ3_c' 
});



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
            // console.log('model', model);
         })
         .then(() => {
            res.send(arr)
         })
        //  console.log("end")
})
router.use("/studentDataUpload",(req,res)=>{

    // uploadStudentDaata
    console.log("studentDataUpload req")
    
})
router.post("/uploadPost",(req,res)=>{
    let post = new Post({
        postId : parseInt((Math.random() * 1000) + (Math.random() * 1000)),
        name : req.body.fullName,
        text : req.body.text,
        img : req.body.imageURL,
        likes : []
    })
    post.save()
    .then(()=>{
        console.log("Successfully uploaded post");
        res.send(true)
    })
    
    .catch(()=>console.log("Error in saving"))
})
router.get("/fetchAllPosts",(req,res)=>{
    const arr = []
    Post.find().cursor().eachAsync(async (post) => {
        arr.push(post)
     })
     .then(() => {
        res.send(arr)
     })
})
router.post("/LikeClicked",(req,res)=>{
    const email = req.body.email
    const postId = req.body.postId

    // console.log("email,postId",email,postId)
    Post.findOneAndUpdate({$and : [{likes : {$nin : [email]}},{postId}]},
        {$push :{likes : email}},{new:true},
        (err,result)=>{
            if(result !== null){
                console.log("result",result.likes)
            }else{
                Post.updateOne({postId},{$pull : {likes : {$in : [email]}}})
                .then(res => console.log("deleted",res))
                // console.log("already liked this post")
            }
        }
    )
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