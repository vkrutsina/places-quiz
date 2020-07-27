const router = require('express').Router();

router.use('../db/quiz', require('../db/quiz'));

module.exports = router;
