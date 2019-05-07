var routerr = require('express').Router();
var ModifiedUser = require('../models/ModifyingUserDetails')

routerr.post('/modifyingDetails', function (req, res) {
    console.log("got These details from the fronend", req.body)
    ModifiedUser.findOneAndUpdate({
        user_id: req.body.user_id
    },
        function (err, result) {
            if (err) {
                console.log(err)
                res.writeHead(400, {
                    "Content-Type": 'text/plain'
                })
                res.end("No_details");
            }
            else {
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