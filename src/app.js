const fs = require('fs');
const https = require('https');
const express = require('express');
const routes = require('./routes');
const mongoHelper = require('./helpers/ConnectionMongo');

const PORT = 3443;

const app = express();

https.createServer({
  key: fs.readFileSync('my_cert.key'),
  cert: fs.readFileSync('my_cert.crt')
}, app).listen(PORT, function(){
  console.log("My HTTPS server listening on port " + PORT + "...");
});

mongoHelper.connect();

app.use('/', routes);