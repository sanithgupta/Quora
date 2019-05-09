// var Answers = require('../models/Answers');
var topics = require('../models/topics');
var routerr = require('express').Router();
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
                            // console.log('resultout',resultout[0].topic_icon)
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

routerr.post('/topics',function(req,res){
    console.log("Inside backend topupvotes")
    console.log("req body",req.body);
    // Model.findByIdAndUpdate(id, { $set: { name: 'jason borne' }}, options, callback)
    Users.findByIdAndUpdate(req.body.user_id,{$push:{topics:req.body.intrests}},{'new':true},function(err,results){
        if(err){
            console.log("error",err)
            res.json(err).status(400);
        }
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
 