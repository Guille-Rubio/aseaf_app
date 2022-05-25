const express = require('express');
const userRouter = express.Router();


//userRouter.get('/users/signup', users.signup);
userRouter.post('/users/signup',users.signup )
userRouter.get('/users/login', users.login);
userRouter.get('/users/logout', users.logout);

module.exports = userRouter