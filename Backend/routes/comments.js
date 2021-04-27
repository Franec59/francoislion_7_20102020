const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.post("/", commentsCtrl.createComments);
router.get("/", commentsCtrl.getAllComments);
router.get("/mycomments", commentsCtrl.getOneComments);
router.put("/", commentsCtrl.updateComments);
router.delete("/", commentsCtrl.deleteComments);



module.exports = router;