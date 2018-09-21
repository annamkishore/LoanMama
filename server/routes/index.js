
const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const loanController = require('../controllers/loanController');

router.get('/signin', authController.login);
router.get('/newloan', loanController.newLoan);

module.exports = router;
