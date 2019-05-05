var Questions = require('../models/Questions');
var Topics = require('../models/topics')
var routerr = require('express').Router();

routerr.get('/Addquestion', function (req, res) {
    console.log('=========================Inside Backend - AddQuestion module =========================');
    console.log("Object received ", req.query);
    var date = new Date().toISOString();
    var new_question = new Questions({
        count: 0,
        question: req.query.question,
        user_id: req.query.user_id,
        owner_status: "Active",
        topics: req.query.topics,
        followers: req.query.user_id,
        answers: [],
        date_time: date
    })

    new_question.save(function (err, result) {
        if (err) {
            res.writeHead(400, {
                'Content-type': 'application/json'
            });
            res.end('Error in adding question');
        }
        else {
            console.log("Result",result);
            var topics = req.query.topics
            topics.forEach(topic => {
                console.log("topic",topic)
                console.log("topic sel",topic)
                Topics.findOneAndUpdate({topic_name:topic},{$push:{questions:{question_id:result._id}}},{upsert:true},function(err,result){

                if(err){
                    console.log(err)
                }
                else{
                    console.log("topics added successfully")
                }
            });
        })
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            res.end(JSON.stringify(result));
        }
    })

})

module.exports = routerr
