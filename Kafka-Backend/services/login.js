var Users = require('./../models/Users')
const bcrypt = require('bcrypt');


function handle_request(message, callback) {
    
    console.log('=========================Inside  Kafka Backend - Login =========================');
    console.log('Message', message);

    Users.findOne({
        'email_id': message.email_id
    }, (err, user) => {
        if (err) {
            console.log("Error in finding user details!", err);
            callback(err, null);
        }else {
            if(user){
                console.log("User Details :", user);
                bcrypt
                    .compare(message.password, user.password)
                    .then( areEqual => {
                        if(areEqual) {
                            callback(null, user);
                        } else {
                            console.log("Authentication failed.");
                        //  res.status(401).json({success: false, message: 'Authentication failed. User not found.'});
                            callback(null, null);
                        }
                    })
            } else{
                callback(null, null);
            }
        }
    })

}

exports.handle_request = handle_request;