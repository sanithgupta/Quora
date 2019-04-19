var mongoose = require('mongoose')

const topics = new mongoose.Schema({topic_id:{
    type:String
},
    topic_name:{
        type:String
    },
    questions:{
        type:Array
    },
    users:{
        type:Array
    },
    followers:{
        type:Array
    },

},{strict:"false"})
var Topics = mongoose.model('topics',topics);
module.exports = Topics;
