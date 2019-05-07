var routerr = require('express').Router();
var Users = require('../../models/Users');

routerr.post('/getUserDetails', function (req, res) {
    console.log("========================In Getting User Details=================================")
    console.log("got These details from the fronend",req.body)
    if(req.body.email_id){
        console.log("in if part")
        Users.find({
            email_id: req.body.email_id
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
    }
    else if(req.body.friend){
        console.log("In else")
        Users.find({
            _id: req.body.friend
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
    }
    
})
module.exports=routerr
