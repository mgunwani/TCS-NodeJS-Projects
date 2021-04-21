var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: { type: String },
    city: { type: String }
});

module.exports = mongoose.model('User', userSchema);