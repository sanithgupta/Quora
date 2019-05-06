var Users = require('../../models/Users')
var routerr = require('express').Router();

routerr.post('/view_notification', function (req, res) {
    console.log('=========================Inside Backend - View Notification module =========================');
    console.log("Object received ", req.body);

    Users.findOne({ _id: req.body.user_id }, { _id: 0, notification_list: 1 }, function (err, result) {
        if (err) {
            console.log('Error in Get Notification Module')
            res.writeHead(400, {
                'Content-type': 'application/json'
            });
            res.end('Error in View Notification Module');
        }
        else if(result) {
            console.log(result.notification_list)
            var notification_content ={}
            result.notification_list.filter(async(notification,index) => {
                if (notification.notification_content.flag == true) {
                    var temp = notification.notification_content
                    console.log(req.body.user_id)
                    var str = "notification_list."+index+".notification_content.flag";
                    console.log(str)
                    await Users.update({ _id: req.body.user_id },{$set:{[str]:false}},{ "multi": true },function(err,result){
                        if(err){
                            console.log('Here--------------',err)
                        }  
                    })

                    // notification.notification_content.flag = false
                    // notification_content = notification.notification_content
                    // Users.findOneAndUpdate({ _id: req.body.user_id }, { $pull: { notification_list: { temp } } }, { upsert: true }, function (err, notification_pull) {
                    //     if (err) {
                    //         console.log(err)
                    //     }
                    //     else{
                    //         console.log('notification pull',notification_pull)
                    //     }
                    // })

                    // Users.findOneAndUpdate({ _id: req.body.user_id }, { $push: { notification_list: { notification_content } } }, { upsert: true }, function (err, notification_push) {
                    //     if (err) {
                    //         console.log(err)
                    //     }
                    //     else{
                    //         console.log('notification push',notification_push)
                    //     }
                    // })
                }

            })
            Users.findOne({ _id: req.body.user_id }, { _id: 0, notification_list: 1 }, function (err, notification_list) {
                if (err) {
                    console.log('Error in Notification module')
                }
                else if (notification_list) {
                    console.log('notification_list',notification_list.notification_list)
                    res.writeHead(200, {
                        'Content-type': 'application/json'
                    });
                    res.end(JSON.stringify(notification_list.notification_list));
                }
            })
            }

    })

})

module.exports = routerr
