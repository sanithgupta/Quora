var routerr = require('express').Router();
var Users = require('../models/Users')

routerr.post('/modifyingDetails', function (req, res) {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX================got These details from the fronend", req.body)
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX================****************************************")
    Users.update({
        _id: req.body.user_id
    },{
        // $push:{
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            city:req.body.city,
            state:req.body.state,
            zip_code:req.body.zipcode,
            education:req.body.education,
            career_info:req.body.career,
            about:req.body.description
        // }
    },{upsert:true},
        function (err, result) {
            if (err) {
                console.log("in error",err)
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
                        res.end("success")
                        console.log("results updated",result)
                        // res.end(JSON.stringify(userResult));
                //     }
                // )
            }
        }
    )
})
module.exports = routerr