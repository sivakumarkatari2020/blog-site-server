'use strict';

const express = require('express');
const getData = require('../controllers/getPostController');
const router = express.Router();

const {getPost} = getData;

router.get('/getPost/:id',getPost);

module.exports = {
    routes: router
}