const router = require('express').Router();
var path = process.cwd();
const passport = require('passport');

var user = require('../controller/user.controller');
var book = require('../controller/book.controller');
    
router.route('/api').get(
	(req, res) => {
        res.send('api works');
    })

router.route('/signup')
	.post(passport.authenticate('signup'),
  		(req, res) =>  {
    		res.sendStatus(200);
  		});

router.route('/login')
	.post(passport.authenticate('login'),
  		(req, res) => {
    		res.sendStatus(200);
  		});

router.route('/logout').post((req, res) => {
	req.logout();
  	res.sendStatus(200);
});

router.route('/profile').get(user.getProfile);
router.route('/changeProfile').post(user.changeProfile);    
router.route('/changePassword').post(user.changePassword);   

router.route('/book/search').get(book.search);
router.route('/book/addbook').post(book.addBook);  


module.exports = router;

    
