var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/check',function(req,res){
  if(req.session.email){
    res.send(req.session.email)
  }else{
    res.send("")
  }
})

module.exports = router;
