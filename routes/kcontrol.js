var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var kname = 'Загадочный Гость'
  var klayout 
  if (req.session.name) { kname = req.session.name }
  klayout = req.session.layout
  res.render('kcontrol', { title: 'Просто заголовок',
                        myheader: 'типа заголовок страницы',
                        greeting: kname,
                        layout: klayout

   });
  
});

router.post('/', function(req, res, next) {
  var kname = req.body.name;
  var klayout = req.body.layout;
  req.session.name = kname;
  req.session.layout = klayout;
  res.redirect('back');
});

module.exports = router;
