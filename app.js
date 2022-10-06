const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')

mongoose.connect('mongodb://127.0.0.1/project-3-soccerApp')
    .then(connectObject => {
        console.log(`connected to db ${connectObject.connections[0].name}`)
    })
    .catch(err => console.log(err))

const app = express();

app.use(morgan('dev'));

app.use(express.json());

const groupRoutes = require('./routes/group.routes');
app.use('/groups', groupRoutes)

app.listen('3001', () => {
    console.log('hey we are listening in port 3001')
});