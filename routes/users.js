var express = require('express');
var router = express.Router();
// var session = require('express-session');


/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.email){
    res.send(req.session.email);
  }else{
    res.send("noemail");
  }
});
router.post('/setup',function(req,res){
  req.session.email = req.body.email;
  res.json({"email":req.session.email});
})
router.get('/check',function(req,res){
   if(req.session.email){
     res.send(req.session.email)
   }else{
     res.send("")
   }
})

module.exports = router;
