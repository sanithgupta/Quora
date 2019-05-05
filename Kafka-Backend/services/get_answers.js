var Answers = require('../models/Answers');
var Questions = require('../models/Questions');

function handle_request(message, callback) {

    console.log('=========================Inside  Kafka Backend - Get Answers =========================');
    Answers.find({question_id:message.question_id},function(err,Answer_result){
        Questions.find({_id:message.question_id},function(err,Question_result){
        if(err){
            console.log('Error fetching data for Get Answers')
            callback(err, null);
        }
        else{
            result = {'question_details':Question_result,'answer_details':Answer_result}
            console.log("Get Answers : ", JSON.stringify(result));
            callback(null, result);
        }
    })
    })


}

exports.handle_request = handle_request;