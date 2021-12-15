'use strict';

const express = require('express');
const getData = require('../controllers/saveUserDetailsController');
const router = express.Router();

const {saveUserDetails} = getData;

router.post('/saveUserDetails',saveUserDetails);

module.exports = {
    routes: router
}