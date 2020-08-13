var express = require('express');
var path = require('path');

var app = express();

const publicDir = path.join(__dirname + '/pages');

app.use(express.static(publicDir));
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000);