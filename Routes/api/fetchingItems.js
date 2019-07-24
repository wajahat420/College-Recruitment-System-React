const express = require("express")
const router = express.Router()

const Item = require("../../models/Items")
const db = "mongodb://localhost/dataa"


router.get("/fetchingItems", (req,res) => {
    const arr = []
    Item.find().cursor().eachAsync(async (model) => {
        
        console.log('do work with model: ', model.nameOfItem);
     });
     
})


module.exports = router