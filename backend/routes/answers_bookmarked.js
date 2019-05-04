var Users = require('../models/Users');
var routerr = require('express').Router();

routerr.post('/answers_bookmarked', function (req, res) {
console.log('=========================Inside Backend - Answers Bookmarked module =========================');
// console.log("Object received ", req);
    
if(req.body.bookmark_check=="Bookmark"){
            Users.findOneAndUpdate({_id:req.body.user_id},{$push:{answers_bookmarked:{"answer_id":req.body.answer_id}}},function(err,result){
                if(err){
                    res.writeHead(400, {
                        'Content-type': 'application/json'
                    });
                    res.end('Error in Bookmarking Answers');
                }
                else{
                    // console.log(result);
                    res.writeHead(200, {
                        'Content-type': 'application/json'
                    });
                    res.end('UnBookmarked Answers Successful');
                }
            })
        }
        else{
            Users.findOneAndUpdate({_id:req.body.user_id},{
                $pull:{
                    answers_bookmarked:{
                        "answer_id":req.body.answer_id
                    }
                }
                },{upsert:true},function(err,result){
                if(err){
                    res.writeHead(400, {
                        'Content-type': 'application/json'
                    });
                    res.end('Error in Bookmarking Answers');
                }
                else{
                    // console.log(result);
                    res.writeHead(200, {
                        'Content-type': 'application/json'
                    });
                    res.end('UnBookmarked Answers Successful');
                }
            })

        }

})
routerr.post('/get_answers_bookmarked', function (req, res) {
    console.log('=========================Inside Backend - Answers Bookmarked module =========================');
    // console.log("Object received ", req);
    
    Users.find({_id:req.body.user_id},{_id:0,answers_bookmarked:1},function(err,result){
        if(err){
            res.writeHead(400, {
                'Content-type': 'application/json'
            });
            res.end('Error in Bookmarking Answers');
        }
        else{
            console.log(result);
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            if(result.length>0){
            res.end(JSON.stringify(result[0].answers_bookmarked));
            console.log("answers bookmarked",result[0].answers_bookmarked)
        }
    }
    })
    
    })


module.exports=routerr
