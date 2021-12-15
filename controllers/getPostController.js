'use strict';

const eventData = require('../data/events');

const getPost = async (req,res,next) => {
    try {
        const id = req.params.id;
        const getPost = await eventData.getPost(id);
        res.send(getPost);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getPost
}