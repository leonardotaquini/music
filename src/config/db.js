import {Sequelize, DataTypes} from 'sequelize';
import 'dotenv/config';

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_DIALECT } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT
});


const connectDB = async () => {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}

export { connectDB, sequelize };