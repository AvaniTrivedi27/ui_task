var express = require('express');
var router = express.Router();
var Product = require('./Models/Products')


router.post("/products",async(req,res)=>{
    
    const iproduct = new Product({
        name:req.body.name,
        price:req.body.rating
    })

    console.log(iproduct)
    await iproduct.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


module.exports =router