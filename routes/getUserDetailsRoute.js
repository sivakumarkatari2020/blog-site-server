'use strict';

const express = require('express');
const getData = require('../controllers/getUserDetailsController');
const router = express.Router();

const {getUserDetails} = getData;

router.get('/getUserDetails/:id',getUserDetails);

module.exports = {
    routes: router
}