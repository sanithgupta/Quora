var Users = require('./../models/Users')
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');


function handle_request(message, callback) {

    console.log('=========================Inside  Kafka Backend - Register =========================');
    console.log('Message', message);

    var now = new Date().now;

    Users.findOne(
        { 'email_id': message.email_id },
        (err, user) => {
            if (err) {
                console.error("Error in user registration : " + err.message)
                callback(err, null)
            } else if (user) {
                console.error("User Email already exists!", err);
                callback(null, null);
            } else {
                var user = new Users({
                    "first_name": message.first_name,
                    "last_name": message.last_name,
                    "email_id": message.email_id,
                    "password": message.password,
                    "status":"Active"
                });

                bcrypt.genSalt(10, (err, salt) => {
                    if (err) {
                        console.error('Error in salt generation', err)
                        callback(err, null)

                    }
                    else {
                        bcrypt.hash(user.password, salt, (err, hash) => {
                            if (err) {
                                console.error('Error in password encryption', err)
                                callback(err, null)
                            } else {
                                user.password = hash
                                user
                                    .save()
                                    .then((user) => {
                                        console.log("Successfully Registered User", user)
                                        // res.send(user)
                                        callback(null, user)
                                    });
                            }

                        })
                    }
                })
            }
        })
}
exports.handle_request = handle_request;