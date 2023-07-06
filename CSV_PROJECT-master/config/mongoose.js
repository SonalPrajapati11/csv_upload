const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://sonal_csv:Sonal_csv@cluster0.o2tk3ew.mongodb.net/');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;