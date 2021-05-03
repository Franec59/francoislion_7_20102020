const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const messageCtrl = require('../controllers/messages');


router.post("/", messageCtrl.createPost);
router.get("/", messageCtrl.getAllPost);
router.get("/mypost", messageCtrl.getOnePost);
router.put("/", messageCtrl.updatePost);
router.delete("/", messageCtrl.deletePost);

//test de requete
router.get("/requete", messageCtrl.requetePost);



module.exports = router;