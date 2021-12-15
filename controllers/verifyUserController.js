'use strict';

const eventData = require('../data/events');

const verifyUser = async (req,res,next) => {
    try {
        const {usermail,password} = req.body;
        const verifyUser = await eventData.verifyUser(usermail,password);
        res.send(verifyUser);
    } catch (error) {
        res.status(422).send({
            status: 422,
            message: error.message,
        });
    }
}

module.exports = {
    verifyUser
}