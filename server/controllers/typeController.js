import {TrainerType} from "../models/mapping.js";

class TypeController{
    async Create(req, res){
        const {name} = req.body
        console.log(req.body);
        const type = await TrainerType.create({name})
        return res.json(type)
    }

    async getAll(req, res){

    }
}

export default TypeController