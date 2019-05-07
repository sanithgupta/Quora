//import the require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
app.set('view engine', 'ejs');
var bcrypt = require('bcryptjs');
var mongoose = require('./config/mongodb');


var passport = require('passport');
app.use(passport.initialize());
require('./auth/passport')(passport);


var login = require('./routes/loginRoutes/login')
var register = require('./routes/loginRoutes/register')
var Addquestion=require('./routes/add_question')
var add_answer=require('./routes/add_answer')
var deleteUser=require('./routes/deleteUser')
var userDeactivate=require('./routes/userDeactivate')
var upvote=require('./routes/upvote_downvote')
var userProfileupdate=require('./routes/userprofileupdate');
var displayUser=require('./routes/userprofileupdate');
var followquestion=require('./routes/followquestion');
var get_answers=require('./routes/get_answers')
var answers_bookmarked=require('./routes/answers_bookmarked')
var add_comment_to_answer=require('./routes/add_comment_to_answer')
var get_user_answers=require('./routes/Get_User_Details/get_user_answers')
var send_message = require('./routes/Messages/send_message')
var conversation_list = require('./routes/Messages/conversation_list')
var get_conversation = require('./routes/Messages/get_conversation')
var get_notification = require('./routes/Notification/get_notification')
var view_notification = require('./routes/Notification/view_notification')
var getUserDetails = require('./routes/Get_User_Details/getUserDetails')
var getUserQuestions = require('./routes/Get_User_Details/getUserQuestions')
var getFeedList = require('./routes/get_feed')
var following = require('./routes/Following/following')
var get_following = require('./routes/Following/getFollowing')
var followers= require('./routes/Following/followers')
var get_followers = require('./routes/Following/getFollowers')
var modifyingDetails = require('./routes/modifyingDetails')
var Activity = require('./routes/activity')
var FollowTopic = require('./routes/followTopic')
var Get_bookmark_answers = require('./routes/get_bookmark_answers')
var Profile_pic = require('./routes/profilepic')
var get_search_content = require('./routes/Search/get_search_content')
var topics = require('./routes/topics')
var graphs = require('./routes/graphs')

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//use express session to maintain session data
app.use(session({
    secret: 'secret',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));
// app.use(busboy());


app.use(bodyParser.json());

const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');
app.use(busboy());

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
  }))

  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }))

   app.use(bodyParser.raw({
    limit: '50mb',
    inflate: true,
    parameterLimit: 100000
  }))
app.use(busboyBodyParser());
//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

    app.use('/', login);
    app.use('/', register);
    app.use('/',Addquestion);
    app.use('/',add_answer);
    app.use('/',deleteUser);
    app.use('/',userDeactivate);
    app.use('/',upvote);
    app.use('/',userProfileupdate);
    app.use('/',displayUser);
    app.use('/',followquestion);
    app.use('/',get_answers);
    app.use('/',answers_bookmarked);
    app.use('/',add_comment_to_answer);
    app.use('/',get_user_answers);
    app.use('/',send_message);
    app.use('/',conversation_list); 
    app.use('/',get_conversation);
    app.use('/',get_notification); 
    app.use('/',view_notification); 
    app.use('/',get_search_content);
    app.use('/',topics);
    app.use('/',graphs);
    //===========User Specfic=============
    app.use('/', getUserDetails)
    app.use('/', getUserQuestions)
    app.use('/',getFeedList)


    app.use('/', following)
    app.use('/', get_following)
    app.use('/', followers)
    app.use('/', get_followers)

    app.use('/', modifyingDetails)
    app.use ('/',Activity)
    app.use('/',FollowTopic)
    app.use('/',Profile_pic)
    app.use('/',Get_bookmark_answers)

    app.use('/',topics)
//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");