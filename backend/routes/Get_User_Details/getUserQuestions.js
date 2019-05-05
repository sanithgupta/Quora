var routerr = require('express').Router();
var Users = require('../../models/Users');
var Questions = require('../../models/Questions')

routerr.post('/getUserQuestions', function (req, res) {
    console.log("========================In Getting User Questions=================================")
    console.log("got These details from the fronend",req.body)
    Questions.find({
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
        })
})
module.exports=routerr