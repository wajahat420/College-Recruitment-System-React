const mongoose = require("mongoose")
const Schema = mongoose.Schema

var ImageSchema = new Schema({
    fileName : {
      type : String,
      required : true
    },
    dataURL : {
      type : String,
      require : true,
    },
    date : {
      type : Date,
      default : Date.now 
    }
  });


var Image = mongoose.model('images', ImageSchema);

module.exports = Image;