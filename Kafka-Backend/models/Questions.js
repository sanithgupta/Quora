var mongoose = require('mongoose')

const questions = new mongoose.Schema({

question_id:{
    type:String
},
count:{
    type:String
},
question:{
    type:String
},
user_id:{
    type:String
},
owner_status:{
    type:String
},
topics:{
    type:Array
},
followers:{
    type:Array
},
answers:{
    type:Array
},
date_time:{
    type:String
}

},{strict:"false"})
var Questions = mongoose.model('Questions',questions);
module.exports = Questions;
