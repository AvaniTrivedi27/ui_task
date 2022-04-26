var mongoose = require('mongoose');

var prodcutSchema = mongoose.Schema({
    name:String,
    price:Number
})

module.exports = mongoose.model("prodcut",prodcutSchema)
