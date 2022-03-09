const express= require("express");
const bodyParser = require("body-parser");
const User = require('./routes/user')

const App = express();


App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));
App.use('/user',User)

module.exports = App;