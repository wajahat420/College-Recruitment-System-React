const mongoose = require("mongoose")
const Schema = mongoose.Schema

var ImageSchema = new Schema({
    email : {
      type : String,
      require : true,
    },
    cgpa : {
      type : String,
      require : true,
    },
    img : {
      type : String,
      require : true,
    },
    cv : {
      type : String,
      require : true,
    },
    marksheet : {
      type : String,
      require : true,
    },
    date : {
      type : Date,
      default : Date.now 
    }
  });


var Image = mongoose.model('Students_Data', ImageSchema);

module.exports = Image;