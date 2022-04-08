var mongoose = require('mongoose');
const express= require('express');
const Schema= mongoose.Schema
var ImageSchema = new Schema({
    img:
    {
        data: {type:Buffer},
        contentType: {type:String}
    }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = new mongoose.model('ImageSchema', ImageSchema);