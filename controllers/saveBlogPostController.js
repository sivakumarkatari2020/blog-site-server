'use strict';

const eventData = require('../data/events');

const saveBlogPost = async (req,res,next) => {
    try {
        const values = req.body;
        const saveBlogPost = await eventData.saveBlogPost(values);
        res.send(saveBlogPost);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    saveBlogPost
}