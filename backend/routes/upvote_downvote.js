var Answers = require('../models/Answers');
var routerr = require('express').Router();


routerr.post('/upvote', function (req, res) {
console.log('=========================Inside Backend - upvote downvote module =========================');
console.log("Answerid  received ", req.body.answerId);
console.log("user id upvoting ",req.body.user_id);
Answers.findOne({_id:req.body.answerId},function(err,answer){
    var x=0;
    console.log(answer);
if(err){res.json("Error while fetching answer details").status(400)}
else{
    console.log("answer retreived", answer.user_id_upvoted);
    if(answer.user_id_upvoted.length>0){
        answer.user_id_upvoted.forEach(user_id => {
            if(user_id==req.body.user_id){
                x=x+1;
             }
        });
    
    }
        if(x==0){
            answer.user_id_upvoted.push(req.body.user_id);
            Answers.findOneAndUpdate({_id:req.body.answerId},{
                user_id_upvoted:answer.user_id_upvoted,
                upvotes:answer.user_id_upvoted.length
            },function(err,question){
                if(err){res.status(400)}
                else{res.json("upvote done").status(200);}
            })
            // res.json(answer).status(200);
        }
        
        else{
            answer.user_id_upvoted.splice(answer.user_id_upvoted.indexOf(req.body.user_id),1);
            Answers.findOneAndUpdate({_id:req.body.answerId},{
                user_id_upvoted:answer.user_id_upvoted,
                upvotes:answer.user_id_upvoted.length
            },function(err,question){
                if(err){res.status(400)}
                else{res.json("downvote done").status(200);}
            })
            // res.json(answer).status(200);
        }
    }
})
})

routerr.post('/downvote', function (req, res) {

    console.log('=========================Inside Backend - upvote downvote module =========================');
    console.log("Answerid  received ", req.body.answerId);
    console.log("user id upvoting ",req.body.user_id);
    Answers.findOne({_id:req.body.answerId},function(err,answer){
        var x=0;
        console.log(answer);
    if(err){res.json("Error while fetching answer details").status(400)}
    else{
        console.log("answer retreived", answer.user_id_upvoted);
        if(answer.user_id_upvoted.length>0){
            answer.user_id_upvoted.forEach(user_id => {
                if(user_id==req.body.user_id){
                    x=x+1;
                 }
            });
        
        }
            if(x!=0){
                answer.user_id_upvoted.splice(answer.user_id_upvoted.indexOf(req.body.user_id),1);
                Answers.findOneAndUpdate({_id:req.body.answerId},{
                    user_id_upvoted:answer.user_id_upvoted,
                    upvotes:answer.user_id_upvoted.length
                },function(err,question){
                    if(err){res.status(400)}
                    else{res.json("downvote done").status(200);}
                })
                // res.json(answer).status(200);
            }
            
            // else{
            //     answer.user_id_upvoted.splice(answer.user_id_upvoted.indexOf(req.body.user_id),1);
            //     Answers.findOneAndUpdate({_id:req.body.answerId},{
            //         user_id_upvoted:answer.user_id_upvoted,
            //         upvotes:answer.user_id_upvoted.length
            //     },function(err,question){
            //         if(err){res.status(400)}
            //         else{res.json("downvote done").status(200);}
            //     })
            //     // res.json(answer).status(200);
            // }
        }
    })

})

module.exports=routerr
