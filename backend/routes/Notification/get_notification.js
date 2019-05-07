var Users = require('../../models/Users')
var routerr = require('express').Router();

routerr.post('/get_notification', function (req, res) {
    console.log('=========================Inside Backend - Get Notification module =========================');
    console.log("Object received ", req.body);

    Users.findOne({ _id: req.body.user_id },{_id:0,notification_list:1}, function (err, result) {
        if (err) {
            console.log('Error in Get Notification Module')
            res.writeHead(400, {
                'Content-type': 'application/json'
            });
            res.end('Error in Get Notification Module');
        }
        else if (result) {
            console.log(result.notification_list)
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            res.end(JSON.stringify(result.notification_list));
        }

    })

})

module.exports = routerr
