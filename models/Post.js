const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    
    postId : {
        type : Number,
        required : true  
    },
    name : {
        type : String,
        required : true
    },
    text : {
        type : String,
    },
    img : {
        type : String,
    },
    likes : {
        type : Object,
        required : true
    },
    Date : {
        type : String,
        default : Date.now 
    }
    
})

module.exports = boughtItems = mongoose.model("Posts",UserSchema)