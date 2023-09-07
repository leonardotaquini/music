import {Sequelize, DataTypes} from 'sequelize';
import 'dotenv/config';

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    
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