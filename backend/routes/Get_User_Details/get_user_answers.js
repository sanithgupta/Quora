var Answers = require('../../models/Answers');
var Questions = require('../../models/Questions');
var routerr = require('express').Router();

routerr.post('/get_user_answers', function (req, res) {
    console.log('=========================Inside Backend - Get User Answers module =========================');
    console.log("Get user Answers", req.body);
    var user_answers = []

    Answers.find({ user_id: req.body.user_id }, function (err, answer_result) {

        answer_result.filter((answer,idx) => {
            console.log('here')
            console.log(answer.question_id)
            Questions.find({ _id: answer.question_id }, function (err, question_result) {
                console.log('---------------------------------------------------------------------------')
                console.log(question_result)
                if (err) {
                    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                    console.log(err)
                    res.writeHead(400, {
                        'Content-type': 'application/json'
                    });
                    res.end('Error in Getting user Answers');
                }
                else if(question_result) {
                    console.log('hereeeeeeeeeeeeeeeeeeeeeeeeeee')
                    user_answers.push({ 'answer_details': answer, 'question_details': question_result })
                    console.log('here -----------', user_answers)
                    if(idx == answer_result.length-1){
                        res.writeHead(200, {
                            'Content-type': 'application/json'
                        });
                        res.end(JSON.stringify(user_answers));
                    }
                }
            })
        })

    })
 
})
module.exports = routerr

