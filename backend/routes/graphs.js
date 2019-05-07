var Answers = require('../models/Answers');
var routerr = require('express').Router();

routerr.post('/topupvotes',function(req,res){
    console.log("Inside backend topupvotes")
    console.log("req body",req.body);
 Answers.find({user_id:req.body.user_id}).sort({ "Answers.user_id_upvoted.length": 1 }).then(topvoteans=>{
console.log(topvoteans);
    res.json(topvoteans).status(200);
})})

routerr.post('/answerviews',function(req,res){
console.log("Inside answerviews ",req.body);
Answers.find({user_id:req.body.user_id},function(err,results){
    if(err){console.log("error in first query inside answerviews backend")}
    else{
        console.log(results);
        res.json(results).status(200);
    }})})


// Answers.find().sort( { age: -1 } )


//     console.log("Inside topupvotes");
// Answers.find({}, function(err,results){
// if(err){res.status(400).json(err);}
// else{
//     console.log("Inside top answers results backend");
//     console.log(results);
//     results.sort(user_id_upvoted)
//     res.json(results).status(200);

// }
// })
// })

module.exports =routerr;