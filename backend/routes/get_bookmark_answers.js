var Users = require('../models/Users');
var Answers = require('../models/Answers')
var Questions = require('../models/Questions')
var routerr = require('express').Router();

routerr.post('/get_bookmark_answers_list', function (req, res) {
    var answer_list = []
    Users.find({_id:req.body.user_id},{_id:0,answers_bookmarked:1},async function(err,result){
        if(err){
            console.log(err)
        }
        else{
            if(result.length>0){
                arr = result[0].answers_bookmarked
                console.log(arr)
                await arr.forEach(async(ans_id,idx) => {
                    await Answers.find({_id:ans_id.answer_id},async function(err,Answer_result){
                        console.log("answers",Answer_result)
                        if(Answer_result.length>0){

                        
                       await  Questions.find({_id:Answer_result[0].question_id},function(err,Question_result){
                        if(err){
                            console.log('Error fetching data for Get Answers')
                            
                        }
                        else{
                            if(Question_result.length>0){

                            
                            result_val = {'question_details':Question_result,'answer_details':Answer_result}
                            console.log("Get Answers : ", JSON.stringify(result_val),"idx",idx);
                            answer_list.push({question_id:Answer_result[0].question_id,question:Question_result[0].question,answer_id:ans_id.answer_id,user_id:Answer_result[0].user_id,user_name:Answer_result[0].use_name,answer:Answer_result[0].answer,date:Answer_result[0].date_time})
                           console.log('iindi')
                           if(idx==arr.length-1){
                            console.log("final",answer_list)
                            res.end(JSON.stringify(answer_list)) 
    
                        }
                            
                        }
                        }
                    })
                }
                    })
                    
                   
                });
            }
        }
    })
})
module.exports=routerr
