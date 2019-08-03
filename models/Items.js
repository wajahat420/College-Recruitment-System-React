const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({

    postId : {
        type : String,
        required : true
    },
    likeClick : {
        type : String,
        required : true
    }
})

module.exports = Item = mongoose.model("items",UserSchema)