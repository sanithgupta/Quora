var Answers = require('../models/Answers');
var Questions = require('../models/Questions');
var routerr = require('express').Router();
var kafka = require('../kafka/client');


routerr.post('/get_answers', function (req, res) {
console.log('=========================Inside Backend - Get Answers module =========================');
// console.log("Object received ", req);
Questions.findOne({_id:req.body.question_id,"views.user_id":req.body.user_id},{_id:0,views:1},function(err,result_que){
    console.log("result",result_que)
    if(!result_que){
Questions.findOneAndUpdate({_id:req.body.question_id},{$push:{views:{user_id:req.body.user_id}}},{upsert:true},function(err,result){
    if(err){
        console.log(err)
        // res.writeHead(400, {
        //     'Content-type': 'application/json'
        // });
        // res.end('Error in Adding views');
    }
    else{
        console.log("views count increased successfully");
        // res.writeHead(200, {
        //     'Content-type': 'application/json'
        // });
        // res.end('views count increased successfully');
    }
})
    }
})

Answers.find({question_id:req.body.question_id},function(err,ansres){
    if(err){
        console.log(err)
    }
    else{
        if(ansres.length>0){
            ansres.forEach(ans => {
                Answers.findOne({_id:ans._id,"views.user_id":req.body.user_id},{_id:0,views:1},function(err,result_que){
                    console.log("result",result_que)
                    if(!result_que){
                Answers.findOneAndUpdate({_id:ans._id},{$push:{views:{user_id:req.body.user_id}}},{upsert:true},function(err,result){
                    if(err){
                        console.log(err)
                        // res.writeHead(400, {
                        //     'Content-type': 'application/json'
                        // });
                        // res.end('Error in Adding views');
                    }
                    else{
                        console.log("views count for answers increased successfully");
                        // res.writeHead(200, {
                        //     'Content-type': 'application/json'
                        // });
                        // res.end('views count increased successfully');
                    }
                })
            }
        })
            });
        }
    }
})



    kafka.make_request("get_answers", req.body, function (err, result) {
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
