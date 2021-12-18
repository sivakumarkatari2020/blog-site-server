'use strict';

const express = require('express');
const getData = require('../controllers/deletePostController');
const router = express.Router();

const {deletePost} = getData;

router.delete('/deletePost/:id',deletePost);

module.exports = {
    routes: router
}