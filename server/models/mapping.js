import sequelize from '../sequelize.js'
import database from 'sequelize'

const { DataTypes } = database

// модель «Пользователь», таблица БД «users»
export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})