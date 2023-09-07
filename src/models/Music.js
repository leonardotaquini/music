import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';

const Music = sequelize.define('music', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artist: {
        type: DataTypes.STRING,
        allowNull: false
    },
    album: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

//Metodos

export async function createMusic(music) {
    try {
        return await Music.create(music);
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMusics() {
    try {
        return await Music.findAll();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteMusic(id) {
    try {
        return await Music.destroy({where: {id}});
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
}