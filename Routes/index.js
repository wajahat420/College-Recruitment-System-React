const express = require("express")
const router = express.Router()

const User = require("../models/Users")
const Post = require("../models/Post")
const StudentData = require("../models/uploadStudentsData")
const Feedback = require("../models/Feedback")
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
    // res.status(500).json({error : "error"})
    email  = req.body.email
    password = req.body.password
    console.log("email",req.body.email)
 
    User.findOne({email : email})

        .then( user => {
            // console.log("user",user.email,user.password)
            // console.log("entered",email,password)
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
        .catch(err => console.log("error",err))
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
router.use("/uploadStudentData",(req,res)=>{

    let studentData = new StudentData({
        email : req.body.email,
        cgpa : req.body.cgpa,
        cv : req.body.cv,
        marksheet : req.body.marksheet,
        img : req.body.image
    })
    studentData.save()
    .then(()=>{
        res.send(true)
        console.log("uploaded successfully")
    })
    .catch((err)=>{
        console.log("error",err)
        res.send(false)
    })
    // uploadStudentDaata
    // console.log("studentDataUpload req")
    // console.log("data",req.body.email)
    
})
router.get("/getAllStudentsData",(req,res)=>{
    const arr = []
    StudentData.find().cursor().eachAsync(async (post) => {
        arr.push(post)
     })
     .then(() => {
        res.send(arr)
     })
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

router.post("/submitFeedback",(req,res)=>{
    let feedback = new Feedback({
        email : req.body.email,
        fulfillingCriteria : req.body.fulfillingCriteria  ,
        webExperience : req.body.webExperience,
        requirementFulfill  : req.body.requirementFulfill,
        searchingFor : req.body.searchingFor,
        comments  : req.body.comments  
    })
    feedback.save()
    .then(()=>{
        console.log("Submit Successfully",feedback)
        res.send(true)
    })
    .catch(()=>{
        console.log("Error in submission")
    })
})
router.get("/getAllFeedbacks",(req,res)=>{
    const arr = []
    Feedback.find().cursor().eachAsync(async (post) => {
        arr.push(post)
     })
     .then(() => {
        res.send(arr)
     })
})

module.exports = router