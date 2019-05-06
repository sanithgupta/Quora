var routerr = require('express').Router();
var Users = require('../../models/Users');

routerr.post('/followers', function (req, res) {
    console.log("========================In adding to followers list =================================")
    console.log("got These details from the fronend", req.body)
    Users.findOneAndUpdate({
        _id: req.body.friend
    },
        {
            $push: {
                followers: {
                    followers_id: req.body.user_id,
                    name: req.body.name,

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
