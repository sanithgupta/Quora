

// routerr.post('/following', function (req, res) {
//     console.log("========================In adding to following list =================================")
//     console.log("got These details from the fronend", req.body)
//     Users.findOneAndUpdate({
//         _id: req.body.user_id
//     },
//         {
//             $push: {
//                 following: {
//                     following_id: req.body.friend,
//                     name: req.body.friend_first_name,

//                 }
//             }
//         }, {
//             upsert: true
//         },
//         function (err, result) {
//             if (err) {
//                 console.log("in error")
//                 console.log(err)
//                 res.writeHead(400, {
//                     "Content-Type": 'text/plain'
//                 })
//                 res.end("Not entered properly!");
//             }
//             else {
//                 console.log("in else")
//                 // req.session.user = result;
//                 console.log(result)
//                 res.writeHead(200, {
//                     'Content-Type': 'text/plain'
//                 })
//                 res.end(JSON.stringify(result));
//             }
//         }
//     )
// })
var routerr = require('express').Router();
var Users = require('../../models/Users');

routerr.post('/following', function (req, res) {
    console.log("========================In adding to following list =================================")
    console.log("got These details from the fronend", req.body)
    Users.findOne({
        _id: req.body.user_id
    },
        async function (err, following) {
            if (err) {
                res.json('error').status(200)
            }
            else {
                console.log("following",following.following)
                var temp = 0
                await following.following.forEach(follow => {
                    if (follow.following_id == req.body.friend) {
                        temp = 1
                    }
                })
                console.log("temp", temp)
                if (temp == 0) {
                    following.following.push({ following_id: req.body.friend, name: req.body.first_name })
                    Users.findOneAndUpdate({ _id: req.body.user_id }, {
                        following: following.following
                    }, function (err, follow) {
                        if (err) { res.status(400) }
                        else {
                            res.json("following updated").status(200);
                        }
                    })
                }
                else {
                    let i = 0
                    arr = following.following
                    console.log("before",arr)

                    for (i = 0; i < following.following.length; i++) {
                        if (following.following[i].following_id == req.body.friend){
                        
                            // index = i
                            arr.splice(i,1)

                        }
                    
                    }
                    console.log("after",arr)

                    Users.findOneAndUpdate({ _id: req.body.user_id }, {
                        following: arr

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
