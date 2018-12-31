var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var kname = 'Загадочный Гость'
  if (req.session.name) { kname = req.session.name }
  res.render('index', { title: 'Клавиатурный тренажер',
                        greeting:  kname,
                        layout: req.session.layout
                      });
});

router.post('/', function(req, res, next) { 
  req.session.layout = req.body.layout;
  res.redirect('back');
});

module.exports = router;
