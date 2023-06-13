const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bdavi186:davi@cluster0.e09ddgh.mongodb.net/', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}, () => {console.log("MongoDB conectado.")});
mongoose.Promise = global.Promise;

module.exports = mongoose