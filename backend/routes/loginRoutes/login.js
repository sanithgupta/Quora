// var connection = require('../../config/mysqlDBConfig.js');
const passport = require('passport');
const gravatar = require('gravatar');

const localStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
var routerr = require('express').Router();
var json = require('json');
var config = require('./../../config/settings')

var kafka = require('./../../kafka/client');
var requireAuth = passport.authenticate('jwt', {session: false});



routerr.post('/login', function (req, res) {

    console.log("BACKEND: ------- INSDIE LOGIN POST");
    console.log('Request Body: ', req.body);

    kafka.make_request('login', req.body, function(err, result){
        console.log('========================= In the backend - login =========================');
        console.log('results', result);
        if(err){
            console.log('Error logging in!');
            res.writeHead(400, {
                'Content-type': 'text/plain'
            });
            res.end('Error logging in!');
        }
        else{
            console.log('Inside login result - No error');
            if(result){
                // req.session.user = result;
                const payload = {
                    email_id: result.email_id,
                    first_name: result.first_name,
                    last_name: result.last_name,
                    Avatar: result.Avatar
                }

                var token = jwt.sign(payload, config.secret, {
                    expiresIn: 3600 // in seconds
                });

                //res.json({success: true, token: 'JWT ' + token});
                res.writeHead(200, {
                    'Content-type': 'text/plain'
                });
                
                var Result = {
                    success: true,
                    token: token,
                    email_id: result.email_id,
                    first_name: result.first_name,
                    last_name: result.last_name,
                    Avatar: result.Avatar,
                    user_id:result._id,
                    topics:result.topics
                }
                res.end(JSON.stringify(Result));    
            }
            else{
                res.writeHead(401,
                    {
                        'Content-type': 'text/plain'
                    })
                console.log('Invalid Credentials!');
                res.end('Invalid Credentials!');
            }            
        }
    });

});

module.exports=routerr
