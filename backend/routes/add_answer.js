var Answers = require('../models/Answers');
var Questions = require('../models/Questions')
var Users = require('../models/Users')
var routerr = require('express').Router();
const mongoClient = require('mongodb').MongoClient;
routerr.post('/add_answer', async function (req, res) {
console.log('=========================Inside Backend - Add Answer module =========================');
console.log("Object received ", req);

await Answers.find({user_id:req.body.user_id},async function(err,results){
if(err){
    console.log(err)
}
else{
    if(results.length>0){
        await Answers.deleteOne({user_id:req.body.user_id},function(err,result){
if(err){
    console.log(err)
}
        })
    }
}
})
var date = new Date().toISOString();
var new_answer=new Answers({
question_id:req.body.question_id,

answer:req.body.answer,
user_id:req.body.user_id,
user_name:req.body.user_name,
profile_credential:req.body.profile_credential,
owner_status:"Active",
is_anonymous: req.body.is_anonymous,
date_time:date
})

var notification_content = {};
var followers = []
new_answer.save(function(err,result){
    if(err){
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in adding Answer');
    }
    else if(result){
        Questions.findOne({_id:req.body.question_id},function(err,question){
        if(err){
            console.log('Error in finding Question for Add Answer route')
        }
        else if(question){
            notification_content = {'question':question.question,'question_id':req.body.question_id,'answered_by':req.body.user_id,'answered_by_name':req.body.user_name,'flag':true}
            followers = question.followers
        }
        followers.filter(follower=>{
            Users.findOneAndUpdate({_id:follower},{$push: {notification_list:{notification_content}}},{upsert:true},function(err,notification_update){
                if(err){
                    console.log(err)
                }
                else if(notification_update){
                    console.log('updated')
                }
            })
        })
        })
        console.log(result);

        const query = "mongodb://Admin:Admin@cluster0273-shard-00-00-5jsyb.mongodb.net:27017,cluster0273-shard-00-01-5jsyb.mongodb.net:27017,cluster0273-shard-00-02-5jsyb.mongodb.net:27017/quoraDB?ssl=true&replicaSet=Cluster0273-shard-0&authSource=admin&retryWrites=true"
    mongoClient.connect(query,async(err, client) => {
if(err){
    console.log("error connecting mongo client")
}
else{
    console.log("mongo client succesfully connected")
    const db = client.db('quoraDB');
    await db.collection('activity').insertOne({user_id:req.body.user_id,type:"QuestionsAnswered",date_time:date,question:req.body.question,question_id:req.body.question_id,answer:req.body.answer,answer_id:result._id})
    .toArray()
    .then((result) => {
       
            console.log("fetched activity")
            console.log(result)
            res.end(JSON.stringify(result))
    })
    client.close();
}
    
})



        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(JSON.stringify(result));
    }
})

})

module.exports=routerr
