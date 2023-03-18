const {connect} = require('mongoose')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
require('dotenv').config()

let connection = connect(process.env.URL)

module.exports = connection
