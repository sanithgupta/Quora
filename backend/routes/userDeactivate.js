var Questions = require('../models/Questions');
var Answers = require('../models/Answers');
var Users = require('../models/Users');
var routerr = require('express').Router();


routerr.post('/userDeactivate', function (req, res) {
console.log('=========================Inside Backend - userDeactivate module =========================');
console.log("Details  received ", req.body);

if(req.body.change_user_status == 'Deactivate'){
    var change_user_status = 'inActive'
}
else{
    var change_user_status = 'Active'
}

Questions.updateMany({user_id:req.body.user_id},{$set:{owner_status:change_user_status}},function(err,questions){
    if(err){
        console.log('Error in Questions DB User Deactivate Module')
        res.writeHead(400,
            {
                'Content-type': 'text/plain'
            })
        res.end('Error in Deactivate User Module');
    }
    else{
        Answers.updateMany({user_id:req.body.user_id},{$set:{owner_status:change_user_status}},function(err,Answers){
            if(err){
                console.log('Error in Answers DB User Deactivate Module')
                res.writeHead(400,
                    {
                        'Content-type': 'text/plain'
                    })
                res.end('Error in Deactivate User Module');
            }
            else{
                Users.updateOne({_id:req.body.user_id},{$set:{status:change_user_status}},function(err,users){
                    if(err){
                        console.log('Error in Users DB User Deactivate Module')
                        res.writeHead(400,
                            {
                                'Content-type': 'text/plain'
                            })
                        res.end('Error in Deactivate User Module');
                    }
                    else{
                        res.writeHead(200,
                            {
                                'Content-type': 'text/plain'
                            })
                        res.end('Deactivating User Successful');
                    }

                })
            }
        })
    }
    })
})

module.exports=routerr
