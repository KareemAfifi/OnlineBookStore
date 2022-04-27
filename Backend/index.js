//___________Middleware___________
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer=require('multer')
const GridFsStorage=require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const methodOverride=require('method-override')
require('dotenv').config()
const User = require('./Schemas/UserSchema')

//___________Routers___________

const UserRouter  =require('./Routers/UserRouter')
const AdminRouter = require('./Routers/AdminRouter')
var bodyparser= require('body-parser')

//___________App___________
const app = express()
app.use(cors())
app.use(express.json())
//___________ENV___________
const mongoURI =process.env.MONGOURL ;
const PORT = 8000

//___________Connection to MongoDB___________
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`listening on port http://localhost:${PORT}/`)
            
        })
        console.log("MongoDB is now connected")

    })
    .catch(err => console.log(err));


app.post('/',(req,res)=>{
    console.log('In Back')
    console.log(req.body.email)
    console.log(req.body.password)
    var emailentered = {
        "email": req.body.email
    }
    //  console.log(req.body.email)
    User.findOne(emailentered).exec()
    .then((result)=>{
        if(result.password==req.body.password)
            res.send(result)
        else
            res.send({success:false})
    })
    .catch((err)=>{
        res.send({success:false})
    })

})
    

app.use('/user',UserRouter)
app.use('/admin',AdminRouter)

