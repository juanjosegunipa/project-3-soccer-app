const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        unique: true
    },
    email: String,
    password: String,
    points: Number,
    matches: {
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;