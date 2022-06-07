import { AppDataSource } from './data-source';
import { User } from './entity/User';

const express = require('express');
import * as cors from 'cors';
require('dotenv').config();

AppDataSource.initialize()
  .then(async () => {
    const users = await AppDataSource.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express / fastify / any other framework.');
  })
  .catch((error) => console.log(error));

const app = express();
const port = process.env.SERVER_PORT;

app.use(
  cors({
    origin: true,
    allowedHeaders: ['Authorization, Content-Type'],
    //exposedHeaders: ['Authorization'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  })
);

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`server lisentening on ${port}`);
});
