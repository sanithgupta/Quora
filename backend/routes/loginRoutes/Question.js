var Questions = require('../../models/Questions');
var routerr = require('express').Router();

routerr.post('/Addquestion', function (req, res) {
console.log('=========================Inside Backend - AddQuestion module =========================');
console.log("Object received ", req);
var date = new Date().toISOString();
var newquestion=new Questions({
count:0,
question:req.body.question,
user_id:req.body.user_id,
owner_status:"Active",
topics:req.body.topics,
followers:req.body.user_id,
answers:[],
date_time:date
})
newquestion.save(function(err,result){
    if(err){res.send(err).status(400);}
    else{
        console.log(result);
        res.sendStatus(200).end(result);
    }
})

})

module.exports=routerr
