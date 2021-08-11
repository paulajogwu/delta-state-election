const router = require('express').Router();

const WardController  = require('../controllers/WardController');



router.post('/create',WardController.addUser);
router.post('/login', WardController.UserLogin);


module.exports = router;