'use strict';

const eventData = require('../data/events');

const editUserDetails = async (req,res,next) => {
    try {
        const id = req.params.id;
        const values = req.body;
        const editUserDetails = await eventData.editUserDetails(id,values);
        res.send(editUserDetails);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    editUserDetails
}