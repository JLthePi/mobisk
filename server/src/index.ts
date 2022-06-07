import { AppDataSource } from './data-source';
import { User } from './entity/User';

const express = require('express');

AppDataSource.initialize()
  .then(async () => {
    const users = await AppDataSource.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express / fastify / any other framework.');
  })
  .catch((error) => console.log(error));

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log('server lisentening');
});
