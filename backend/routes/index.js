const express = require ('express');
const authController = require ('../controller/authController');
const blogController = require('../controller/blogController');
const commentController = require('../controller/commentController');
const auth = require('../middlewares/auth');

const router = express.Router();


//User

//Register
router.post('/register', authController.register);

//Login
router.post('/login', authController.login);


//Logout
router.post('/logout', auth, authController.logout);

//Refresh
router.get('/refresh',authController.refresh);

//blog - crud


//create
router.post('/blog', auth , blogController.create);

//read all blogs
router.get('/blog/all', auth , blogController.getAll);

//read blog by id
router.get('/blog/:id', auth , blogController.getById);

//update
router.put('/blog', auth , blogController.update);

//delete
router.delete('/blog/:id', auth , blogController.delete);

//comment
//create comment
router.post('/comment', auth, commentController.create);

//get comment
router.get('/comment/:id',auth, commentController.getById);

module.exports = router;
