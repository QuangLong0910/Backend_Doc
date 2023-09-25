var express = require('express');
var router = express.Router();
var api = require('../Api/Nguoidung.api');

router.get('/',api.list);
router.post('/add',api.add);

router.put('/edit/:id',api.edit);

router.delete('/delete/:id',api.delete);

router.get('/login',api.login);
router.get('/logout',api.logout);
module.exports = router;