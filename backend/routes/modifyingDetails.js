var routerr = require('express').Router();
var Users = require('../models/Users')

routerr.post('/modifyingDetails', function (req, res) {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX================got These details from the fronend", req.body)
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX================****************************************")
    Users.updateOne({
        _id: req.body.user_id
    },{
        // $push:{
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            city:req.body.city,
            state:req.body.state,
            zipcode:req.body.zipcode,
            education:req.body.education,
            career_info:req.body.career,
            about:req.body.description
        // }
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
                // console.log("===============================RESULTTT=================================", result)
                // Users.findOne(
                //     {
                //         _id: req.body.user_id
                //     }, function(err, userResult) {
                //         if (err) throw err;
                        // console.log("==========================HHEHHEHHEHHEHENNNNNNNNNNNNNNNNNHEHEHE===================",userResult);
                        res.writeHead(200, {
                            'Content-Type': 'text/plain'
                        })
                        // res.end(JSON.stringify(userResult));
                //     }
                // )
            }
        }
    )
})
module.exports = routerr