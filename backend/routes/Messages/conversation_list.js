var Users = require('../../models/Users');
var routerr = require('express').Router();

routerr.post('/conversation_list', function (req, res) {
    console.log('=========================Inside Backend - Conversation List module =========================');
    console.log("Object received ", req.body);
    var list = []

    Users.findOne({ _id: req.body.message_from }, function (err, result) {

        if (err) {
            res.writeHead(400, {
                'Content-type': 'application/json'
            });
            res.end('Conversation list DB error');
        }
        else {
            console.log(result.messages)
            let temp = {}
            result.messages.filter(conversation => {
                if (conversation.message_from == req.body.message_from) {
                    temp = { 'message_to': conversation.message_to, 'message_to_name': conversation.message_to_name }
                }
                else {
                    temp = { 'message_from': conversation.message_from, 'message_from_name': conversation.message_from_name }
                }
                list.push(temp)
            })
            for (var i = 0; i < list.length; i++) {
                for (var j = i+1; j < list.length; j++) {
                    console.log(i, " ", j)
                    console.log(list[i].message_to, " ", list[i].message_from, " ", list[j].message_to, " ", list[j].message_from)
                    console.log(list.length)
                    if (list[i].message_from != undefined) {
                        if(list[i].message_from == list[j].message_from || list[i].message_from == list[j].message_to){
                            list.splice(j, 1)
                            j = j - 1
                        }
                    }
                    else{
                        if(list[i].message_to == list[j].message_from || list[i].message_to == list[j].message_to){
                            list.splice(j, 1)
                            j = j - 1
                        }
                    }
                    console.log('conversation', list)
                }
            }
            console.log(i," ",j)
            console.log('conversation', list)
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            res.end(JSON.stringify(list));
        }
    })
})

module.exports = routerr
