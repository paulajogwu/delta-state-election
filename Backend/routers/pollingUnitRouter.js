const router = require('express').Router();

const pollingUnitController  = require('../controllers/pollingUnitController');



router.post('/create',pollingUnitController.addUser);
router.post('/login', pollingUnitController.UserLogin);


module.exports = router;