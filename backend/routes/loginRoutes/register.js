var routerr = require('express').Router();
var kafka = require('./../../kafka/client');

routerr.post('/register', function (req, res) {
  console.log("BACKEND: ------- INSDIE Register User POST ----------");
    console.log('Request Body: ', req.body);


  kafka.make_request('register', req.body, function(err, result){
    console.log('========================= In the backend make request - Register ========================='+JSON.stringify(req.body));
    console.log('results', result);
    if(err){
        console.log('Error logging in!');
        res.writeHead(400, {
            'Content-type': 'text/plain'
        });
        res.end('Error registering user!');
    }else if(result == null){
      console.log("Email ID already exists!");
      res.writeHead(210, {
          'Content-type': 'text/plain'
      });
      res.end('Email ID already exists!');
    }else if (result){
      console.log("User registered successfully.");
      res.writeHead(200, {
          'Content-type': 'text/plain'
      });
      res.end(JSON.stringify(result));
    }            
  })
});

module.exports = routerr