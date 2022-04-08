const mongoose= require('mongoose')
const express= require('express')
const Schema= mongoose.Schema
const Book = require('../Schemas/BookSchema').schema
const userSchema = new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    isadmin:{
        type:Boolean
    },
    watchlist:{
        type:[Book]
    },
    booksbought:{
        type:[Book]
    }



});
const User= mongoose.model('User',userSchema)
module.exports=User