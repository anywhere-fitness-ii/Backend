const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const classesRouter = require('../classes/classes-router.js');
const usersRouter = require('../users/users-router.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/classes', classesRouter);
server.use('/api/users', authenticate, usersRouter);


server.get("/", (req, res) => {
  res.status(200).json({message: "It's alive!"})
});

module.exports = server;

