const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: String,
    teamPoints: Number,
    goals: Number,
    goalsAgainst: Number,
    goalAverage: goals - goalsAgainst,
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }]
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;