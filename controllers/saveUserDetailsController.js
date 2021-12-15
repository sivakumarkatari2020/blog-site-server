'use strict';

const eventData = require('../data/events');

const saveUserDetails = async (req,res,next) => {
    try {
        const values = req.body;
        const saveUserDetails = await eventData.saveUserDetails(values);
        res.send(saveUserDetails);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    saveUserDetails
}