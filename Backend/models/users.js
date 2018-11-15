var mongoose = require('mongoose');

var users = new mongoose.Schema({
    username: { type: String },
    password: { type: String }
    
    
    }, {
    timestamps: true
});

module.exports = mongoose.model('user', users);