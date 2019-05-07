var Users = require('../models/Users');
var routerr = require('express').Router();
<<<<<<< HEAD
var Users = require('../models/Users')
const fetch = require("node-fetch");
const redis = require('redis');

routerr.post('/get_topics', function (req, res) {
    console.log("inside topics")
    var topiclist= []
    Users.find({_id:req.body.user_id},{_id:0,topics:1},function(err,result){
        if(err){
            console.log(err)
        }
        else{
            console.log("results",result)
            if(result.length>0){
                arr = result[0].topics
                arr.forEach(async(topic,idx) => {
                   await  topics.find({topic_name:topic},function(err,resultout){
                        if(err){
                            console.log(err)
                        }
                        else{
                            console.log('resultout',resultout[0].topic_icon)
                            if(resultout.length>0){

                            
                            topiclist.push({topic_name:topic,topic_icon:resultout[0].topic_icon,topic_id:resultout[0]._id,})
                        }
                    }
                    })
                    if(idx==arr.length-1){
                        console.log("final",topiclist)
                        res.end(JSON.stringify(topiclist))
                    }
                });
               
            }
            else{
                console.log("no results found")
            }
        }
    })
})
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
=======

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
>>>>>>> 4a5f16274894038eca0dfb1ea21f0bb5584040e2
//     else{
//         result.topics=req.body.intrests;
//     }
// })

})

module.exports=routerr