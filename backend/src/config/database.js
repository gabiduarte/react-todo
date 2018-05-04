const mongoose = require('mongoose')
mongoose.Promise = global.Promise //avoid deprecation warning

module.exports = mongoose.connect('mongodb://localhost/todo')