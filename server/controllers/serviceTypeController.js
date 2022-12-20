import {Services, ServicesType} from "../models/mapping.js";
import ApiError from "../errors/AppError.js";

class serviceTypeController{
    async Create(req, res){
        const {name} = req.body
        const type = await ServicesType.create({name})
        return res.json(type)
    }

    async update(req, res, next){
        try {
            const{id}=req.params
            const {name} = req.body
            const serviceType = await ServicesType.update({name},{where:{id:id}})
            return res.json(serviceType)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const serviceType = await ServicesType.findAll()
        return res.json(serviceType)
    }
    async getOne(req, res){
        const{id} = req.params
        const serviceType = await ServicesType.findOne({where:{id}})
        return res.json(serviceType)
    }
}

export default serviceTypeController