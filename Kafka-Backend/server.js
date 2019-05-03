var connection = require('./kafka/Connection');
var config = require("./config/settings");


var mongoose = require('mongoose');
//var configLink=require('./../config');
mongoose.Promise = global.Promise;

// mongoose.set('useCreateIndex', true);
// mongoose.connect("mongodb://admin:admin@cmpe273-lab2-shard-00-00-bmdyb.mongodb.net:27017,cmpe273-lab2-shard-00-01-bmdyb.mongodb.net:27017,cmpe273-lab2-shard-00-02-bmdyb.mongodb.net:27017/quoraDB?ssl=true&replicaSet=cmpe273-lab2-shard-0&authSource=admin",{useMongoClient: true});
mongoose.connect(config.dbURL, { useNewUrlParser: true });

var mdb=mongoose.connection;

mdb.on('error',console.error.bind(console,'Connection error'))
mdb.on('open',()=>{
    console.log('MongoDB connected!')
})


var Login = require('./services/login');
var Register = require('./services/register');
var Get_answers = require('./services/get_answers');


function handleTopicRequest(topic_name, function_name){

    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();

    console.log('server is running');
    consumer.on('message', function(message){
        console.log('message recieved for ' + topic_name + " " + function_name);
        console.log(JSON.stringify(message.value));
        var data = JSON.parse(message.value);

        function_name.handle_request(data.data, function(err, res){
            console.log('After request handling: ', res);
            var payload = [{
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId : data.correlationId,
                    data : res
                }),
                partition: 0
            }];

            producer.send(payload, function(err, data){
                console.log('Data: ', data);
            });
            return;

        });
    });
}

handleTopicRequest("login", Login);
handleTopicRequest("register", Register);
handleTopicRequest("get_answers", Get_answers);
