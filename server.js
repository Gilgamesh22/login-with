const express = require('express');
const LoginApp = require('./index');
var https = require('https');
const path = require("path");
var fs = require('fs');
const opts = require('./src/opts')(process.argv, process.env);

let app = express()

// use the LoginApp at '/'
app.use('/', LoginApp)

// start the server
https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'private.key')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate.crt'))
}, app).listen(opts.port)
