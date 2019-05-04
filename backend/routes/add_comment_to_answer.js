var Answers = require('../models/Answers');
var routerr = require('express').Router();

routerr.post('/add_comment_to_answer', function (req, res) {
console.log('=========================Inside Backend - Add comment module =========================');
console.log("Object received ", req);
var date = new Date().toISOString();

Answers.findOneAndUpdate({_id:req.body.answer_id},{$push:{comments:{user_id:req.body.user_id,user_name:req.body.user_name,comment:req.body.comment,date_time:date}}},function(err,result){
    if(err){
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in Adding comment');
    }
    else{
        console.log(result);
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end('Adding comment successful');
    }
})

})

module.exports=routerr
