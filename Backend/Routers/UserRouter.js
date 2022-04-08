const express= require('express')
const { append } = require('express/lib/response')
const UserRouter=express.Router()
const User = require('../Schemas/UserSchema')

UserRouter.use(express.json())

UserRouter.get('/getallusers',(req,res)=>{
    User.find({'isadmin':false})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })

})

UserRouter.post('/adduser',(req,res)=>{
    const newuser= new User ({'firstname':req.body.firstname ,'lastname':req.body.lastname,
    'email':req.body.email,'password':req.body.password,'isadmin':false,'watchlist':[] , 'booksbought':[]})
    newuser.save()
    .then((result)=>{
        res.send('User Added Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

})

UserRouter.delete('/deleteuser',(req,res)=>{
    User.findByIdAndDelete({"_id":req.body._id})
    .then((result)=>{
       res.send('User Deleted Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

})
UserRouter.put('/updateuserprofile',(req,res)=>{
    User.findByIdAndUpdate({"_id":req.body._id},{'firstname':req.body.firstname ,'lastname':req.body.lastname,
    'email':req.body.email,'password':req.body.password})
    .then((result)=>{
        res.send('User Updated Successfully')
    })
    .catch((err)=>{
        console.log(err)
    })

})
UserRouter.post('/addtowatchlist',(req,res)=>{
    User.findById(req.body._id)
    .then((resultuser)=>{
       arrayofbooks= resultuser.watchlist;
       arrayofbooks.append(req.body.book)
       User.findbyIdAndUpdate({'watchlist':arrayofbooks})
       .then((result)=>{
           console.log('Book Added to WatchList Successfully')
       })
       .catch((err)=>{
           console.log(err)
       })
    })
    .catch((err)=>{
        console.log(err)
    })
})

UserRouter.post('/addtomybooks',(req,res)=>{
    User.findById(req.body._id)
    .then((resultuser)=>{
       arrayofbooks= resultuser.booksbought;
       arrayofbooks.append(req.body.book)
       User.findbyIdAndUpdate({'booksbought':arrayofbooks})
       .then((result)=>{
           console.log('Book Added to BoughtList Successfully')
       })
       .catch((err)=>{
           console.log(err)
       })
    })
    .catch((err)=>{
        console.log(err)
    })
})
module.exports=UserRouter