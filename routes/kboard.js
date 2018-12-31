var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var kname = 'Загадочный Гость'
  if (req.session.name) { kname = req.session.name }
  res.render('kboard', { title: 'Просто заголовок',
  	                    myheader: 'типа заголовок страницы',
                        greeting: kname,
                        layout: req.session.layout
   });
});

router.post('/', function(req, res, next) {
  
  req.session.layout = req.body.layout;
  res.redirect('back');
});


module.exports = router;
