var mongoose = require('mongoose');

var adminstory = new mongoose.Schema({
    story_title: { type: String },
    category: { type: String },
    description: { type: String },
    story: { type: String }
    
    
    }, {
    timestamps: true
});

module.exports = mongoose.model('story', adminstory);