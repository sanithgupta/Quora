var routerr = require('express').Router();
var Users = require('../../models/Users');

routerr.post('/following', function (req, res) {
    console.log("========================In adding to following list =================================")
    console.log("got These details from the fronend", req.body)
    Users.findOneAndUpdate({
        _id: req.body.user_id
    },
        {
            $push: {
                following: {
                    following_id: req.body.friend,
                    name: req.body.friend_name,

                }
            }
        }, {
            upsert: true
        },
        function (err, result) {
            if (err) {
                console.log("in error")
                console.log(err)
                res.writeHead(400, {
                    "Content-Type": 'text/plain'
                })
                res.end("Not entered properly!");
            }
            else {
                console.log("in else")
                // req.session.user = result;
                console.log(result)
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                })
                res.end(JSON.stringify(result));
            }
        }
    )
})
module.exports = routerr
