var Users = require('../models/Users')
var routerr = require('express').Router();


var Questions = require('../models/Questions');
var Topics = require('../models/topics')
var routerr = require('express').Router();
var Answers = require('../models/Answers')
routerr.post('/get_feed_topic', function (req, res) {

    console.log("inside get topic",req.body.topic_name)
    var answer_list = []
    // var question_list = []
    var question_list = []
    var question = null
    var answer_id = null
    var user_id = null
    var user_name = null
    var answer = null
    var date = null
var question_id = null
    const question_map = new Map();
       
                    Topics.find({topic_name:req.body.topic_name},{_id:0,questions:1},function(err,ques){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("ques",ques)
                        if(ques.length>0){
                        ques[0].questions.forEach((question,index) => {
                            if(index<req.body.limit+10){
                            console.log("question exists",question_list,String(question.question_id))
                            question_list.push(String(question.question_id))
                            }
                        }); 
                    }
                        // console.log("index",idx,topic,topics[0].topics.length)
                    // if(idx==topics[0].topics.length-1){
                        question_list = [...new Set(question_list)];
                        console.log("total questions",question_list)
                        question_list.forEach((questions,indexques)=>{
                            Questions.find({_id:questions},{_id:0,views:1}, async function (err,viewresult){
                                // console.log("views",viewresult)
                                if(viewresult.length>0){
                                    // console.log(viewresult[0].views)
                                    question_map.set(questions,viewresult[0].views.length)
                                    var len_map = question_map.size
                                    // console.log("length",question_map, len_map)
                                    if(len_map==question_list.length){
                                        
                                            const mapSort1 = new Map([...question_map.entries()].sort((a, b) => b[1] - a[1]))
                                            var count = 0
                                            var prev_count = count
                                            for(var key of mapSort1){
                                        //   Object.keys(mapSort1).forEach((key)=>{    
                                        //         console.log("key",key)
                                         await Questions.find({_id:key[0]},function(err,questionsearch){
                                                if(err){
                                                    console.log(err)
                                                }
                                                else{
                                                    if(questionsearch.length>0){
                                                        console.log("question search",questionsearch)
                                                        question_id=key[0]
                                                        question = questionsearch[0].question
                                                    }
                                                }
                                            })
                                               await  Answers.find({question_id:key[0]},function(err,answers){
                                                    if(err){
                                                        console.log(err)
                                                    }
                                                    else{
                                                        if(answers.length>0){
                                                        console.log("answers",answers[0]._id)
                                                        date = answers[0].date_time
                                                        answer_id = answers[0]._id
                                                        user_id = answers[0]._id
                                                        user_name = answers[0].user_name
                                                        answer = answers[0].answer

                                                    }
                                                     answer_list.push({question_id:question_id,question:question,answer_id:answer_id,user_id:user_id,user_name:user_name,answer:answer,date:date})
                                                    question = null
                                                answer_id = null
                                                user_id = null
                                                user_name = null
                                                answer = null
                                                date = null
                                                    console.log("count",count,len_map,answer_list)
                                                    count+=1
                                                    if(count==len_map){
                                                        res.end(JSON.stringify(answer_list))
                                                    }  
                                                        
                                                    }
                                                    
                                                })
                                                
                                               
                                             

                                            }

                                        
                                    }
                                }
                            })
                           
                            
                        })
                        
                    

                    }
                })
        

            

           
          
    
})







routerr.post('/get_feed_list', function (req, res) {
    var answer_list = []
    // var question_list = []
    var question_list = []
    var question = null
    var answer_id = null
    var user_id = null
    var user_name = null
    var answer = null
    var date = null
var question_id = null
    const question_map = new Map();

    Users.find({_id:req.body.user_id},{_id:0,topics:1},async function(err,topics){
        if(err){
            console.log(err)
        }
        else{
            if(topics.length>0){
               await topics[0].topics.forEach((topic,idx)=>{
                    console.log("topic",topic)
                     Topics.find({topic_name:topic},{_id:0,questions:1},async function(err,ques){
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log(topic,"ques",ques)
                        if(ques.length>0){
                        await ques[0].questions.forEach((question,index) => {
                            if(index<req.body.limit+10){
                            console.log("question exists",question_list,String(question.question_id))
                            question_list.push(String(question.question_id))
                            }
                        }); 
                    }
                        console.log("index",idx,topic,topics[0].topics.length)
                    if(idx==topics[0].topics.length-1){
                        question_list = [...new Set(question_list)];
                        console.log("total questions",question_list)
                        question_list.forEach(async(questions,indexques)=>{
                            await Questions.find({_id:questions},{_id:0,views:1}, async function (err,viewresult){
                                // console.log("views",viewresult)
                                if(viewresult.length>0){
                                    // console.log(viewresult[0].views)
                                    question_map.set(questions,viewresult[0].views.length)
                                    var len_map = question_map.size
                                    // console.log("length",question_map, len_map)
                                    if(len_map==question_list.length){
                                        
                                            const mapSort1 = new Map([...question_map.entries()].sort((a, b) => b[1] - a[1]))
                                            var count = 0
                                            var prev_count = count
                                            for(var key of mapSort1){
                                        //   Object.keys(mapSort1).forEach((key)=>{    
                                        //         console.log("key",key)
                                         await Questions.find({_id:key[0]},function(err,questionsearch){
                                                if(err){
                                                    console.log(err)
                                                }
                                                else{
                                                    if(questionsearch.length>0){
                                                        console.log("question search",questionsearch)
                                                        question_id=key[0]
                                                        question = questionsearch[0].question
                                                    }
                                                }
                                            })
                                               await  Answers.find({question_id:key[0]},function(err,answers){
                                                    if(err){
                                                        console.log(err)
                                                    }
                                                    else{
                                                        if(answers.length>0){
                                                        console.log("answers",answers[0]._id)
                                                        date = answers[0].date_time
                                                        answer_id = answers[0]._id
                                                        user_id = answers[0]._id
                                                        user_name = answers[0].user_name
                                                        answer = answers[0].answer

                                                    }
                                                     answer_list.push({question_id:question_id,question:question,answer_id:answer_id,user_id:user_id,user_name:user_name,answer:answer,date:date})
                                                    question = null
                                                answer_id = null
                                                user_id = null
                                                user_name = null
                                                answer = null
                                                date = null
                                                    console.log("count",count,len_map,answer_list)
                                                    count+=1
                                                    if(count==len_map){
                                                        res.end(JSON.stringify(answer_list))
                                                    }  
                                                        
                                                    }
                                                    
                                                })
                                                
                                               
                                             

                                            }

                                        
                                    }
                                }
                            })
                           
                            
                        })
                        
                    }

                    }
                })
            })

            }

           
        }    
    })
})
module.exports = routerr
