const express = require('express');
const router = express.Router();

router.get(['/', '/loan'], (req, res) => {
	res.render('loan');
});

module.exports = router;