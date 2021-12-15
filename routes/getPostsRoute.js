'use strict';

const express = require('express');
const getData = require('../controllers/getPostsController');
const router = express.Router();

const {getPosts} = getData;

router.get('/getPosts',getPosts);

module.exports = {
    routes: router
}