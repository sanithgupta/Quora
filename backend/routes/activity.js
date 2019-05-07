var Questions = require('../models/Questions');
var Topics = require('../models/topics')
var routerr = require('express').Router();
const mongoClient = require('mongodb').MongoClient;
routerr.post('/activity', function (req, res) {
const query = "mongodb://Admin:Admin@cluster0273-shard-00-00-5jsyb.mongodb.net:27017,cluster0273-shard-00-01-5jsyb.mongodb.net:27017,cluster0273-shard-00-02-5jsyb.mongodb.net:27017/quoraDB?ssl=true&replicaSet=Cluster0273-shard-0&authSource=admin&retryWrites=true"
    mongoClient.connect(query,async(err, client) => {
if(err){
    console.log("error connecting mongo client")
}
else{
    var results = null
    if(req.body.activityoption=="None"){
    console.log("mongo client succesfully connected")
    const db = client.db('quoraDB');
    await db.collection('activity').find({user_id:req.body.user_id})
    .toArray()
    .then((result) => {
       
            console.log("fetched activity")
            results = result
            console.log(result)
            // res.end(JSON.stringify(result))
    })
    client.close();

}
else{
    console.log("mongo client succesfully connected")
    const db = client.db('quoraDB');
    await db.collection('activity').find({user_id:req.body.user_id,type:req.body.activityoption})
    .toArray()
    .then((result) => {
       
            console.log("fetched activity")
            results = result
            console.log(result)
            // res.end(JSON.stringify(result))
    })
    client.close();

}
if(req.body.dateoption=="NewestFirst"){
    results = results.reverse();
}
console.log("results after sort",results)

res.end(JSON.stringify(results))


}
    
})
    })

module.exports = routerr
