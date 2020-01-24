const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../project/project-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/project', projectRouter);

module.exports = server;
