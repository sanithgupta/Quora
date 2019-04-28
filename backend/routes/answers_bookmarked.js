var Users = require('../models/Users');
var routerr = require('express').Router();

routerr.post('/answers_bookmarked', function (req, res) {
console.log('=========================Inside Backend - Answers Bookmarked module =========================');
console.log("Object received ", req);

Users.findOneAndUpdate({_id:req.body.user_id},{$push:{answers_bookmarked:req.body.answer_id}},function(err,result){
    if(err){
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in Bookmarking Answers');
    }
    else{
        console.log(result);
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end('Bookmarking Answers Successful');
    }
})

})

module.exports=routerr
