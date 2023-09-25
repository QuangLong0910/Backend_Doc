var express = require('express');
var router = express.Router();
var api = require('../Api/Truyen.api');


router.get('/',api.list);
router.post('/add',api.add);

router.put('/edit/:id',api.edit);

router.delete('/delete/:id',api.delete);

router.get('/noidung/:id',api.getnd);
router.post('/addnd/:id',api.addnd);




module.exports = router;