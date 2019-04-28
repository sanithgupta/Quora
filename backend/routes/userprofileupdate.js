var Users = require('../models/Users');
var routerr = require('express').Router();

routerr.post('/userProfileupdate', function (req, res) {
console.log('=========================Inside Backend - Userprofileupdate module =========================');
console.log("user details received  received ", req.body);

Users.findByIdAndUpdate(req.body.user_id,req.body,{new:true},function(err,user){
    if(err){res.json("error").status(400);}
    else{
        res.json(user).status(200);
    }
})
}),
//to display user
routerr.post('/displayUser', function (req, res) {
    console.log('=========================Inside Backend - Displayuser module =========================');
    console.log("user details received  received ", req.body);
    Users.findOne({_id:req.body.user_id},function(err,user){
        if(err){res.json("error").status(400);}
        else{
            res.json(user).status(200);
        }
    })
    })
module.exports=routerr

