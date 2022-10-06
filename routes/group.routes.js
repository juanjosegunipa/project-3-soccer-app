const express = require('express');
const router = express.Router();
const Group = require('../models/Group.model');

router.post('/', (req, res, next) => {

    const { groupName, year, firstTeam, secondTeam, thirdTeam, fourthTeam } = req.body

    Group.create({
        groupName,
        year
    })
        .then(createdGroup => {
            res.json({ message: 'POST gruop worked', group: createdGroup })
        })
        .catch(err => res.json(err))
})

module.exports = router;