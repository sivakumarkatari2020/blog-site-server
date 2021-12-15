'use strict';

const eventData = require('../data/events');

const getUserDetails = async (req,res,next) => {
    try {
        const id = req.params.id;
        const getUserDetails = await eventData.getUserDetails(id);
        res.send(getUserDetails);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getUserDetails
}