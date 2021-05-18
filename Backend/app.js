const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');
const messageRoutes = require('./routes/messages');
const commentsRoutes = require('./routes/comments');
const likesRoutes = require('./routes/likes');

//config multer
const path = require('path');

const app = express();

//1er middleware : CORS
//========================
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Headers', 'X-Auth-Token, X-CSRF-TOKEN, Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//2ème middleware bodyparser
//=============================
app.use (express.json ());
// parse application/x-www-form-urlencoded
//app.use (bodyParser.urlencoded({extended: false}))


//routes
//==========================================================
app.use('/users', userRoutes);
app.use('/message', messageRoutes);
app.use('/comments', commentsRoutes);
app.use('/likes', likesRoutes);

//config multer
app.use('/images', express.static(path.join(__dirname, 'images')));




















module.exports = app;