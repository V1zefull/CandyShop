import {TrainerType} from "../models/mapping.js";

class TypeController{
    async Create(req, res){
        const {name} = req.body
        const type = await TrainerType.create({name})
        return res.json(type)
    }

    async getAll(req, res){
        const trainerType = await TrainerType.findAll()
        return res.json(trainerType)
    }
    async getOne(req, res){
        const{id} = req.params
        const trainerType = await TrainerType.findOne({where:{id}})
        return res.json(trainerType)
    }
}

export default TypeController