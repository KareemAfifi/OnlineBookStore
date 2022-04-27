const mongoose= require('mongoose')
const express= require('express');
const ImageSchema = require('./ImageSchema');
const Schema= mongoose.Schema

const BookSchema = new Schema({
    bookname:{
        type:String
    },
    bookimage:{
       type: String
    },
    authorname:{
        type:String
    },
    bookdescription:{
        type:String
    },
    isbn:{
        type:String
    },
    category:{
        type:String
    },
    language:{
        type:String
    },
    rating:{
        type:Number
    },
    numberofrating:{
        type:Number
    }
    


});
const Book= mongoose.model('Book',BookSchema);
module.exports=Book;