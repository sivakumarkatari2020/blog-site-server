'use strict';

const express = require('express');
const getData = require('../controllers/editUserDetailsController');
const router = express.Router();

const {editUserDetails} = getData;

router.post('/editUserDetails/:id',editUserDetails);

module.exports = {
    routes: router
}