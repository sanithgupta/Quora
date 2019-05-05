var Users = require('../../models/Users');
var routerr = require('express').Router();

routerr.post('/get_conversation', function (req, res) {
    console.log('=========================Inside Backend - Get Conversation List module =========================');
    console.log("Object received ", req.body);
    var new_result = []
    Users.findOne({ _id: req.body.message_from}, function (err, result) {
        console.log(result.messages)
        if (err) {
            res.writeHead(400, {
                'Content-type': 'application/json'
            });
            res.end('Conversation list DB error');
        }
        else {
            result.messages.filter(message =>{
                if(message.message_from == req.body.message_from && message.message_to == req.body.message_to){
                    new_result.push(message)
                }
                else if(message.message_from == req.body.message_to && message.message_to == req.body.message_from){
                    new_result.push(message)
                }
            })
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            res.end(JSON.stringify(new_result));
        }      
    })
})

module.exports = routerr
