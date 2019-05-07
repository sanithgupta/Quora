var Users = require('../models/Users');
var routerr = require('express').Router();

routerr.post('/topics',function(req,res){
    console.log("Inside backend topupvotes")
    console.log("req body",req.body);
    // Model.findByIdAndUpdate(id, { $set: { name: 'jason borne' }}, options, callback)
    Users.findByIdAndUpdate(req.body.user_id,{$push:{topics:req.body.intrests}},{'new':true},function(err,results){
        if(err){console.log("error",err)}
        else{
            console.log("results after modyfying ",results);
            res.json(results).status(200);
        }
    })
// Users.findOne({_id:req.body.user_id},function(err,result){
//     if(err){console.log("error",err);}
//     else{
//         result.topics=req.body.intrests;
//     }
// })

})

module.exports=routerr