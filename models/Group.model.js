const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    groupName: String,
    year: Number,
    firstTeam: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    secondTeam: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    thirdTeam: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    fouthTeam: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    matches: [{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }],
})

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;