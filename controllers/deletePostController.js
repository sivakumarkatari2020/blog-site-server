'use strict';

const eventData = require('../data/events');

const deletePost = async (req,res,next) => {
    try {
        let id = req.id;
        const deletePost = await eventData.deletePost(id);
        res.send(deletePost);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    deletePost
}