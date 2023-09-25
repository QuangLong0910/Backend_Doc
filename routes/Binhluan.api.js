var express = require('express');
var router = express.Router();
var api = require('../Api/Binhluan.api');

router.get('/',api.list);

router.post('/add',api.add);

router.put('/edit/:id',api.edit);

router.delete('/delete/:id',api.delete);




module.exports = router;