const express= require('express')
const { append } = require('express/lib/response')
const AdminRouter=express.Router()
const Book = require('../Schemas/BookSchema')
const ImageSchema = require('../Schemas/ImageSchema')
AdminRouter.use(express.json())
const multer=require('multer')
const GridFsStorage=require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const methodOverride=require('method-override')

//AdminRouter.use(  express.static(__dirname+"./Public/"))


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
          cb(null, 'images');
    },
    filename: function(req, file, cb) {
          cb(null, 'uuidv4() '+ '-' + Date.now() + path.extname (file.originalname));
}})

const fileFilter= (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
     if(allowedFileTypes.includes(file.mimetype)) {
          cb(null, true);
      } else {
          cb(null, false);
      }
}
const upload = multer({ dest:'uploads/' });


AdminRouter.get('/viewbooks',(req,res)=>{
    console.log('Viewing All Books')
    Book.find()
    .then((books)=>{
        res.send(books)
    })
    .catch((err)=>{
        console.log(err)
    })

})

AdminRouter.post('/addbook',upload.single('bookimage'),(req,res)=>{
    //console.log('Button Here')
    // var img = fs.readFileSync(req.file.path);
    // var encode_img = img.toString('base64');
    // var final_img = new ImageSchema({
    //     contentType:req.file.mimetype,
    //     image:new Buffer(encode_img,'base64')
    // });
    console.log(req.files.bookimage)
    const file =req.files.file
    file.mv(`${_dirname}/Client/public/uploads/${file.name}`, err => {
        if (err) {
         console.error(err);
          return res.status (500).send (err);
    
        }
    })
})

AdminRouter.delete('/deletebook',(req,res)=>{
    console.log('Book Will be dleeted')
    console.log(req.body._id)
    Book.findByIdAndDelete({"_id":req.body._id})
    .then((result)=>{
       res.send('Book Deleted Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

})
AdminRouter.put('/updatebookinfo',(req,res)=>{
    Book.findByIdAndUpdate({"_id":req.body._id},{"bookname":req.body.bookname,"bookimage":req.body.bookimage,"authorname":req.body.authorname,"isbn":req.body.isbn 
    ,"category":req.body.category,"language":req.body.language})
    .then((result)=>{
        res.send('Book Updated Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

})
AdminRouter.post('/addbookrating',(req,res)=>{
    Book.findById(req.body._id)
    .then((resultbook)=>{
       rating= resultbook.rating+req.body.rating;
       numberofrating= resultbook.numberofrating+1
       Book.findbyIdAndUpdate({"_id":req.body._id},{'rating':rating,'numberofrating':numberofrating})
       .then((result)=>{
           console.log('Book Rating Updated Successfully')
       })
       .catch((err)=>{
           console.log(err)
       })
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports=AdminRouter