var Questions = require('../models/Questions');
var Topics = require('../models/topics')
var routerr = require('express').Router();

routerr.post('/Addquestion', function (req, res) {
    console.log('=========================Inside Backend - AddQuestion module =========================');
    console.log("Object received ", req);
    var date = new Date().toISOString();
    var new_question = new Questions({
        count: 0,
        question: req.body.question,
        user_id: req.body.user_id,
        owner_status: "Active",
        topics: req.body.topics,
        followers: req.body.user_id,
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
            // var topics = req.body.topics
            // topics.forEach(topic => {
            //     Topics.findOneAndUpdate({topic_name:topic},{$push:{questions:{question_id:result.}}},{upsert:true},function(err,result){

            // });
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            res.end(JSON.stringify(result));
        }
    })

})

module.exports = routerr
