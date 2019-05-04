var Users = require('../../models/Users');
var routerr = require('express').Router();

routerr.post('/send_message', function (req, res) {
    console.log('=========================Inside Backend - Send Message module =========================');
    console.log("Object received ", req.body);
    var str = req.body.message_to_name;
    var n = str.indexOf(' ')
    var firstname = str.substring(0, n);
    var lastname = str.substring(n + 1, str.length)
    console.log(firstname)
    console.log(lastname)
    console.log(typeof lastname)

    Users.find({ first_name: firstname }, function (err, result) {
        console.log(result)
        if (err) {
            res.writeHead(400, {
                'Content-type': 'application/json'
            });
            res.end('Send message DB error');
        }
        else if (result.length>0) {
            
            console.log(result)
            // console.log('--------------------', result[0].last_name)
            if (result[0].last_name == lastname) {
                console.log('here')
                var message_to = result[0]._id.toString()
                Users.findOneAndUpdate({ _id: req.body.message_from }, { $push: { messages: { 'message_from': req.body.message_from, 'message_to': message_to, 'message_content': req.body.message_content,'message_from_name':req.body.message_from_name,'message_to_name':req.body.message_to_name } } }, { upsert: true }, function (err, result) {
                    Users.findOneAndUpdate({ _id: message_to }, { $push: { messages: { 'message_from': req.body.message_from, 'message_to': message_to, 'message_content': req.body.message_content,'message_from_name':req.body.message_from_name,'message_to_name':req.body.message_to_name } } }, { upsert: true }, function (err, result_new) {
                        Users.findOne({ _id: message_to }, function (err, result_new) {
                        if (err) {
                            res.writeHead(400, {
                                'Content-type': 'application/json'
                            });
                            res.end('Error in Send Messages');
                        }
                        else {
                            console.log(result_new);
                            res.writeHead(200, {
                                'Content-type': 'application/json'
                            });
                            res.end(JSON.stringify(result_new));
                        }
                    })
                })
            })
            }
            else {
                res.writeHead(400, {
                    'Content-type': 'application/json'
                });
                res.end('User is not available');
            }
        }
        else{
            console.log('heree------------------------------')
            res.writeHead(400, {
                'Content-type': 'application/json'
            });
            res.end('User is not available');
        }
    })

})

module.exports = routerr
