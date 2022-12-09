import sequelize from '../sequelize.js'
import database from 'sequelize'

const { DataTypes } = database

// модель «Пользователь», таблица БД «users»
export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

//модель «Тренажёр», таблица БД «trainer»
export const Trainer = sequelize.define('trainer',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number:{type: DataTypes.STRING, allowNull:false},
    img:{type: DataTypes.STRING, allowNull:false},
})

export const Brand = sequelize.define('brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true , allowNull: false}
})

export const TrainerInfo = sequelize.define('trainer_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull:false},
    description:{type: DataTypes.STRING, allowNull:false}
})

export const TrainerType = sequelize.define('trainer_type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique:true}
})

export const Services = sequelize.define('services',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique:true, allowNull:false},
    price: {type: DataTypes.INTEGER}
})

export const ServicesInfo = sequelize.define('services_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description:{type: DataTypes.STRING, allowNull:false}
})

export const ServicesType = sequelize.define('services_type',{
    id: {type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true , allowNull: false}
})


export const TypeBrand = sequelize.define('type_brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
})

User.hasMany(Services)
Services.belongsTo(User)

ServicesType.hasMany(Services)
Services.belongsTo(ServicesType)

TrainerType.hasMany(Trainer)
Trainer.belongsTo(TrainerType)

Brand.hasMany(Trainer)
Trainer.belongsTo(Brand)

Trainer.hasMany(TrainerInfo)
TrainerInfo.belongsTo(Trainer)

Services.hasMany(ServicesInfo)
ServicesInfo.belongsTo(Services)

TrainerType.belongsToMany(Brand, {through:TypeBrand})
Brand.belongsToMany(TrainerType, {through:TypeBrand})