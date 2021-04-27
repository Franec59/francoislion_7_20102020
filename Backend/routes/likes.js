const express = require('express');
const router = express.Router();
const likesCtrl = require('../controllers/likes');


router.post("/", likesCtrl.createLikes);
router.get("/", likesCtrl.getAllLikes);
router.get("/mylikes", likesCtrl.getOneLikes);
router.put("/", likesCtrl.updateLikes);
router.delete("/", likesCtrl.deleteLikes);



module.exports = router;