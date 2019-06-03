const express=require('express');
const router=express.Router();
const loginController=require('../loginController/login.controller');
const resultController=require('../resultController/result.controller');
const userController=require('../userController/user.controller');

router.get('/login',loginController.getLogin);
router.post('/login',loginController.postLogin);
router.post('/loginAuth',loginController.loginAuth);

router.get('/result',resultController.getResult);
router.post('/result',resultController.postResult);
router.delete('/result',resultController.deleteResult);

router.get('/user',userController.getUser);
router.post('/user',userController.postUser);
router.delete('/user',userController.deleteUser);

router.get('/userbyid/:id',userController.userbyid);
router.get('/checkOnceGivenTest/:id',resultController.checkOnceGivenTest);
router.get('/findLastTestGivenById/:id',resultController.findLastTestGivenById);

module.exports=router;