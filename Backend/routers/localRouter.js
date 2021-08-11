const router = require('express').Router();

const localController  = require('../controllers/localController');


router.post('/create/feedback',feedbackController.CreateFeedback);


module.exports = router;