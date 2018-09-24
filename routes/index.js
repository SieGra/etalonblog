const express = require('express');
const app = express();
const router = express.Router();


router.get('/', (req, res, next)=>{
    return res.render('index');
});


module.exports = router;