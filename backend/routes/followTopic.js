var Questions = require('../models/Questions');
var Topics = require('../models/topics')
var routerr = require('express').Router();
const mongoClient = require('mongodb').MongoClient;
routerr.post('/followTopic', function (req, res) {
    var date = new Date().toISOString();

    console.log("inside follow topic")
    Topics.findOneAndUpdate({topic_name:req.body.topic_name},{$push:{followers:{user_id:req.body.user_id}}},{upsert:true},function(err,result){

        if(err){
            console.log(err)
        }
        else{


            const query = "mongodb://Admin:Admin@cluster0273-shard-00-00-5jsyb.mongodb.net:27017,cluster0273-shard-00-01-5jsyb.mongodb.net:27017,cluster0273-shard-00-02-5jsyb.mongodb.net:27017/quoraDB?ssl=true&replicaSet=Cluster0273-shard-0&authSource=admin&retryWrites=true"
            mongoClient.connect(query,async(err, client) => {
        if(err){
            console.log("error connecting mongo client")
        }
        else{
            console.log("mongo client succesfully connected")
            console.log("mongo client succesfully connected")
    const db = client.db('quoraDB');
     db.collection('activity').insertOne({user_id:req.body.user_id,type:"TopicFollowed",date_time:date,topic_name:req.body.topic_name})
    .toArray()
    .then((result) => {
       
            console.log("fetched activity")
            console.log(result)
            // res.end(JSON.stringify(result))
    })
    client.close();
}
    
})
            console.log("topics followed successfully")
        }
    });
})

module.exports = routerr
