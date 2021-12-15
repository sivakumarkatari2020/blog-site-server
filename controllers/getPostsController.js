'use strict';

const eventData = require('../data/events');

const getPosts = async (req,res,next) => {
    try {
        const getPosts = await eventData.getPosts();
        res.send(getPosts);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getPosts
}