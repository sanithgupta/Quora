var Questions = require('../models/Questions');
var routerr = require('express').Router();


routerr.post('/userDeactivate', function (req, res) {
console.log('=========================Inside Backend - userDeactivate module =========================');
console.log("userid  received ", req.body.user_id);

Questions.updateMany({user_id:req.body.user_id},{$set:{owner_status:"inActive"}},function(err,questions){
    console.log(questions);
if(err){res.json("Error while deactivating").status(400)}
else{
res.json(questions).status(200);
}
})
})

module.exports=routerr
