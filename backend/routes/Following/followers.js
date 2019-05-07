var routerr = require('express').Router();
var Users = require('../../models/Users');

routerr.post('/followers', function (req, res) {
    console.log("========================In adding to followers list =================================")
    console.log("got These details from the fronend", req.body)
    Users.findOne({
        _id: req.body.friend
    },
        async function (err, followers) {
            if (err) {
                res.json('error').status(200)
            }
            else {
                console.log("followers",followers.followers)
                var temp = 0
                await followers.followers.forEach(follow => {
                    if (follow.user_id == req.body.user_id) {
                        temp = 1
                    }
                })
                console.log("temp", temp)
                if (temp == 0) {
                    followers.followers.push({ user_id: req.body.user_id, name: req.body.first_name })
                    Users.findOneAndUpdate({ _id: req.body.friend }, {
                        followers: followers.followers
                    }, function (err, follow) {
                        if (err) { res.status(400) }
                        else {
                            res.json("Followers updated").status(200);
                        }
                    })
                }
                else {
                    let i = 0
                    arr = followers.followers
                    console.log("before",arr)

                    for (i = 0; i < followers.followers.length; i++) {
                        if (followers.followers[i].user_id == req.body.user_id){
                        
                            // index = i
                            arr.splice(i,1)

                        }
                    
                    }
                    console.log("after",arr)

                    Users.findOneAndUpdate({ _id: req.body.friend }, {
                        followers: arr

                    }, function (err, follow) {
                        if (err) { res.status(400) }
                        else {
                            res.sendStatus(201).end();
                        }
                    })
                }
            }
        })
})



module.exports = routerr
