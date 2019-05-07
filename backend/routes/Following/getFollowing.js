var routerr = require('express').Router();
var Users = require('../../models/Users');
routerr.post('/get_following', function (req, res) {
    console.log("========================In getting following list =================================")
    console.log("got These details from the fronend", req.body)
    Users.find({
        _id: req.body.user_id

    }, function (err, result) {
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
