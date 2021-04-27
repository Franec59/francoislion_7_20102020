const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');
const messageRoutes = require('./routes/messages');
const commentsRoutes = require('./routes/comments');
const likesRoutes = require('./routes/likes');

const app = express();

//1er middleware : CORS
//========================
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//2ème middleware bodyparser
//=============================
app.use (express.json ());


//routes
//==========================================================
app.use('/users', userRoutes);
app.use('/message', messageRoutes);
app.use('/API/comments', commentsRoutes);
app.use('/likes', likesRoutes);




















module.exports = app;