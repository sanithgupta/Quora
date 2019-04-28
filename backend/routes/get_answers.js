var Answers = require('../models/Answers');
var routerr = require('express').Router();

routerr.post('/get_answers', function (req, res) {
console.log('=========================Inside Backend - Get Answers module =========================');
console.log("Object received ", req);

Answers.find({question_id:req.body.question_id},function(err,result){
    if(err){
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in getting Answers');
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
