const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    homeTeam: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    awayTeam: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    score: {
        homeScore: Number,
        awayScore: Number
    },
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;