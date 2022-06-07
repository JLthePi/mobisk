import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';

require('dotenv').config();
const port = +process.env.MYSQL_PORT;

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: port,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: 'mobisk',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
