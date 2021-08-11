const router = require('express').Router();

const partResultController  = require('../controllers/partResultController');



router.post('/create',partResultController.addUser);
router.post('/login', partResultController.UserLogin);


module.exports = router;