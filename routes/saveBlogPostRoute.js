'use strict';

const express = require('express');
const getData = require('../controllers/saveBlogPostController');
const router = express.Router();

const {saveBlogPost} = getData;

router.post('/saveBlogPost',saveBlogPost);

module.exports = {
    routes: router
}