const { text } = require('express');
const express = require('express');
const app = express();
const morgan = require("morgan");

app.use(express.static(__dirname +'/public'));
app.use(express.urlencoded({ extended: false }));