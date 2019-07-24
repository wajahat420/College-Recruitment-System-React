const express = require("express")
const router = express.Router()

const Item = require("../../models/Items")


router.post("/insertItem", (req,res) => {
    // console.log("req.body.nameOfItem",req.body.nameOfItem)
    let newItem = new Item ({
        nameOfItem : req.body.nameOfItem,
        priceOfItem : req.body.priceOfItem
    })
    console.log("newItem",newItem)
    newItem.save()
    .then(res => console.log("successfully inserted"))
    .catch(err => console.log("error in insertion",err))
})
// router.get("/insertItem",(req,res) => res.json({
//     msg : "insert works"
// })) 

module.exports = router