var Users = require('../models/Users');
var routerr = require('express').Router();

routerr.post('/deleteUser', function (req, res) {
console.log('=========================Inside Backend - deleteUser module =========================');
console.log("userid  received ", req.body.user_id);

Users.remove({_id:req.body.user_id},function(err,results){

    if(err){
        res.json("error while deleting").status(400)
    }
    else{
        res.json("Document deleted Successfully").status(200);
    }
})
})
module.exports=routerr
