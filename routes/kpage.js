var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/aaa', function(req, res, next) {
  res.render('kpage', { title: 'Просто заголовок (тоже поменялся)',
  	                    myheader: 'типа заголовок страницы с красным текстом',
                        mytext: 'А это текст на странице (уже другой)'
   });
});

module.exports = router;
