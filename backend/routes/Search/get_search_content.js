var Answers = require('../../models/Answers');
var Questions = require('../../models/Questions');
var topics = require('../../models/topics');
var Users = require('../../models/Users');
var routerr = require('express').Router();


routerr.post('/get_search_content', function (req, res) {
console.log('=========================Inside Backend - Get Search Content module =========================');
console.log("Object received ", req.body);
search_value = req.body.search_value.toString()
search_value = search_value.toLowerCase()
console.log('search Value',search_value)
var question_result = []
var answer_result = []
var topic_result = []
var user_result = []
var consolidated_result = {}
  
    Questions.find({  } ,function(err,result){
    if(err){
        console.log(err)
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in Search content Module');
    }
    else{
        console.log(result);
        
        result.filter(new_question =>{
            var this_question = new_question.question.toLowerCase()
            // console.log('aaaaaaaaaaaaaaaaaaa',this_question)
            // console.log(this_question.indexOf(search_value))
            if(this_question.indexOf(search_value)>-1 && new_question.owner_status == 'Active'){
                question_result.push(new_question)
                // console.log('-------------here',question_result)
            }
        })
        // res.writeHead(200, {
        //     'Content-type': 'application/json'
        // });
        // res.end(JSON.stringify(question_result));
    }
})

Answers.find({  } ,function(err,result){
    if(err){
        console.log(err)
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in Search content Answers Module');
    }
    else{
        console.log(result);
        
        result.filter(new_answer =>{
            var this_answer = new_answer.answer.toLowerCase()
            // console.log('aaaaaaaaaaaaaaaaaaa',this_question)
            // console.log(this_question.indexOf(search_value))
            if(this_answer.indexOf(search_value)>-1 && new_answer.owner_status == 'Active'){
                answer_result.push(new_answer)
                console.log('-------------here',answer_result)
            }
        })
        // res.writeHead(200, {
        //     'Content-type': 'application/json'
        // });
        // res.end(JSON.stringify(answer_result));
    }
})

Users.find({  } ,function(err,result){
    if(err){
        console.log(err)
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in Search content Answers Module');
    }
    else{
        console.log('User result',result);
        if(result.length>0){
        result.filter(new_user =>{
            var this_user = new_user.first_name.toLowerCase()
            // console.log('aaaaaaaaaaaaaaaaaaa',this_question)
            // console.log(this_question.indexOf(search_value))
            if(this_user.indexOf(search_value)>-1 && new_user.status == 'Active'){
                user_result.push(new_user)
                console.log('-------------here',user_result)
            }
        })
    }
        // res.writeHead(200, {
        //     'Content-type': 'application/json'
        // });
        // res.end(JSON.stringify(answer_result));
    }
})


topics.find({  } ,function(err,result){
    if(err){
        console.log(err)
        res.writeHead(400, {
            'Content-type': 'application/json'
        });
        res.end('Error in Search content Answers Module');
    }
    else{
        console.log(result);
        
        result.filter(topic =>{
            var this_topic = topic.topic_name.toLowerCase()
            // console.log('aaaaaaaaaaaaaaaaaaa',this_question)
            // console.log(this_question.indexOf(search_value))
            console.log(topic.topic_name)
            if(this_topic.indexOf(search_value)>-1){
                topic_result.push(topic)
                console.log('-------------here',topic_result)
            }
        })
        consolidated_result = {'questions':question_result,'answers':answer_result,'topics':topic_result,'users':user_result}

        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(JSON.stringify(consolidated_result));
    }
})




})


module.exports=routerr
