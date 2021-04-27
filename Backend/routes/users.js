const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');


router.post("/", userCtrl.signup);
router.get("/", userCtrl.getAllUsers);
router.get("/login", userCtrl.login);
router.put("/", userCtrl.updateUser);
router.delete("/", userCtrl.deleteUser);

//test de requete
router.get("/requete", userCtrl.requeteUser);

module.exports = router;