const express = require('express');
const app = express();
const router = express.Router();
const mid = require('../middleware');

router.get('/', mid.logIncomming,(req, res, next)=>{
    req.pageInfo.title = "Home";
    return res.render('index', req.pageInfo);
});

router.get('/notes',mid.logIncomming, (req, res, next)=>{
    req.pageInfo.title = "Notes";
    return res.render('notes', req.pageInfo);
});


module.exports = router;