const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const auth = require('../middleware/auth');

router.post("/", userCtrl.signup);
router.get("/", userCtrl.getAllUsers);
router.post("/login", userCtrl.login);
router.put("/", userCtrl.updateUser);
router.delete("/", auth, userCtrl.deleteUser);

//test de requete
router.get("/requete", userCtrl.requeteUser);

module.exports = router;