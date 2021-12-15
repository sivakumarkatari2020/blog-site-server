'use strict';

const express = require('express');
const getData = require('../controllers/verifyUserController');
const router = express.Router();

const {verifyUser} = getData;

//router.get('/verify/:usermail',verifyUser);

router.post('/login/verify',verifyUser)

module.exports = {
    routes: router
}