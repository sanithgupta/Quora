var Questions = require('../models/Questions');
var routerr = require('express').Router();

routerr.post('/followquestion', function (req, res) {
console.log('=========================Inside Backend - followquestion module =========================');

console.log("received userid",req.body.user_id);
console.log("received questionid",req.body.questionid);

Questions.findOne({_id:req.body.questionid},async function(err,question){
    console.log(question);
    if(err){res.json("Error").status(200);}
    else{
        var temp  = 0
        await question.followers.forEach(follower => {
            if(follower==req.body.user_id){
                temp =1
            }
        });
        console.log("temp",temp)
        if(temp==0){

        question.followers.push(req.body.user_id)
        Questions.findOneAndUpdate({_id:req.body.questionid},{
            followers:question.followers,
            count:question.followers.length
        },function(err,question){
            if(err){res.status(400)}
            else{res.json("follower udpated").status(200);}
        })
    }
    else{
        question.followers.splice(question.followers.indexOf(req.body.user_id))
        Questions.findOneAndUpdate({_id:req.body.questionid},{
            followers:question.followers,
            count:question.followers.length
        },function(err,question){
            if(err){res.status(400)}
            else{
                res.sendStatus(201).end();
            }
        })
    }
    }
})
})

module.exports=routerr

