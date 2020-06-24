const express = require('express');
const router = express.Router();

const { postAddContact } = require('../controllers/contactCon');

router.post('/add-contact', postAddContact);


module.exports = router;