var mongoose = require('mongoose')

const topics = new mongoose.Schema(
    
    {
//         topic_id:{
//     type:String
// },


    topic:[ 
        {
            topic_name:{ type:String},
            topic_image: {type:String}
        }
    ],
    topic_name:{
        type:String
    },
    topic_image:{
        type:String
    },
    questions:{
        type:Array
    }
    ,
    users:{
        type:Array
    },
    followers:{
        type:Array
    },

},{strict:"false"})
var Topics = mongoose.model('topics',topics);
module.exports = Topics;
