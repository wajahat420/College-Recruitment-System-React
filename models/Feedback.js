const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({

    email : {
        type : String,
        required : true
    },
    fulfillingCriteria : {
        type : String,
        required : true
    },
    webExperience : {
        type : String,
        required : true
    },
    requirementFulfill : {
        type : String,
        required : true
    },
    searchingFor : {
        type : String,
        required : true
    },
    comments : {
        type : String,
    },
})

module.exports = Item = mongoose.model("Feedback",UserSchema)