const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);


server.get("/", (req, res) => {
  res.status(200).json({message: "It's alive!"})
});

module.exports = server;

// function checkRole(role) {
//     return (req, res, next) => {
//       if (
//         req.decodedToken && //if theres a decoded token
//         req.decodedToken.role &&//if the decoded token has a role property
//         req.decodedToken.role.toLowerCase() === role//does it equal what's passed into the checkRole function
//       ) {
//         next();
//       } else {
//         res.status(403).json({ you: "shall not pass!" });
//       }
//     };
//   }