var Answers = require('../models/Answers');
var routerr = require('express').Router();

routerr.post('/add_answer', function (req, res) {
console.log('=========================Inside Backend - Add Answer module =========================');
console.log("Object received ", req);
var date = new Date().toISOString();
var new_answer=new Answers({
question_id:req.body.question_id,
answer:req.body.answer,
user_id:req.body.user_id,
user_name:req.body.user_name,
profile_credential:req.body.profile_credential,
owner_status:"Active",
is_anonymous: req.body.is_anonymous,
date_time:date
})
new_answer.save(function(err,result){
    if(err){
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in adding Answer');
    }
    else{
        console.log(result);
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(JSON.stringify(result));
    }
})

})

module.exports=routerr
