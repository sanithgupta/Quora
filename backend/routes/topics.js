// var Answers = require('../models/Answers');
var topics = require('../models/topics');
var routerr = require('express').Router();
const fetch = require("node-fetch");
const redis = require('redis');

routerr.post('/topics', function (req, res) {
console.log('=========================Inside Backend - Get Answers module =========================');
console.log("Object received ", req.body);

topic_new={
    topic: req.body.topics,
    users:req.body.users
}

topics.create(topic_new,function(err,results){

    if(err){console.log("error received");
    res.json(results).status(400)}

    else{
        console.log("printing rwsults after saving",results)
        res.json(results).status(200)}
    }
)

// var result = {}
// Answers.find({question_id:req.body.question_id},function(err,Answer_result){
//     Questions.find({_id:req.body.question_id},function(err,Question_result){
//     if(err){
//         res.writeHead(400, {
//             'Content-type': 'application/json'
//         });
//         res.end('Error in getting Answers');
//     }
//     else{
//         result = {'question_details':Question_result,'answer_details':Answer_result}
//         console.log(result);
//         res.writeHead(200, {
//             'Content-type': 'application/json'
//         });
//         res.end(JSON.stringify(result));
//     }
// })
// })

})

module.exports=routerr
 