const express = require('express');
const router = express.Router();
const recsCtrl = require('../../controllers/recs');
const multer = require('multer')
const upload = multer();

router.post('/', upload.single('recording'), recsCtrl.create);
router.get('/', recsCtrl.index);

module.exports = router