var routerr = require('express').Router();
var AWS_operations = require('../routes/AWS_operations/s3BucketOperations');
const Busboy = require('busboy');
const AWS = require('aws-sdk');


routerr.post('/profilePicUpload', function (req, res) {
    console.log("inside profile pic upload", req.files    );
    var busboy = new Busboy({ headers: req.headers });
    
    busboy.on('finish', function () {
        //console.log('Upload finished');
        const file = req.files.profilePic;
        console.log("ImageUpload", file);
        // Begins the upload to the AWS S3
        fileType = "profilePic";
        AWS_operations.uploadToS3(file, req.body.email, fileType);
    });
    req.pipe(busboy);
    res.sendStatus(200).end('Profile pic updated');

})

routerr.get('/getProfilePic', (req, res) => {
    console.log("Inside get profile pic");
    let email = req.query.email;
    console.log(email);
    if (email !== null) {
        console.log("sending request to AWS S3 operations");
        let fileType = "profilePic";
        AWS_operations.downloadFromS3(email, fileType, res);
    } else {
        res.sendStatus(400).end("empty email");
    }
})
module.exports = routerr;
