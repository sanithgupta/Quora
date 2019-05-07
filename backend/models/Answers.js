var mongoose = require('mongoose')

const answers = new mongoose.Schema({
    question_id:{
        type:String
    },
    // question:{
    //     type:String
    // },
    // answer_id:{
    //     type:String
    // },
    answer:{
        type:String
    },
    user_id:{
        type:String
    },
    user_id_upvoted:{
        type:Array
    },
    user_name:{
        type:String
    },
    profile_credential:{
        type:String
    },
    owner_status:{
        type:String
    },
    images:{
        type:Array
    },
    is_anonymous:{
        type:Boolean
    },
    upvotes:{
        type:Number
    },
    views:{
        type:Array
    },
    
downvotes:{
    type:Array
},
comments:{
    type:Array
},
    date_time:{
        type:String
    }
    

},{strict:"false"})
var Answers = mongoose.model('Answers',answers);
module.exports = Answers;
