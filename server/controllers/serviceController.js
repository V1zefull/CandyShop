import {Services, ServicesUser} from "../models/mapping.js";
import ApiError from "../errors/AppError.js";

class ServiceController{
    async create(req, res, next){
        try {
            const {name, servicesTypeId} = req.body
            const service = await Services.create({name, servicesTypeId})
            return res.json(service)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next){
        try {
            const{id}=req.params
            const {name, servicesTypeId} = req.body
            const service = await Services.update({name, servicesTypeId},{where:{id:id}})
            return res.json(service)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async AddForUser(req, res, next){
        try {
            const {number, userId, serviceName, serviceType, serviceId, servicesTypeId} = req.body
            const service = await ServicesUser.create({number, userId,serviceName, serviceType, serviceId, servicesTypeId})
            return res.json(service)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteUserService(req, res){
        const{id} = req.params
        const service = await ServicesUser.destroy({where:{id:id}})
        return res.json(service)
    }

    async deleteOne(req, res){
        const{id} = req.params
        const service = await Services.destroy({where:{id:id}})
        return res.json(service)
    }

    async getAllUsServ(req, res){
        const{id} = req.params
        const service = await ServicesUser.findAll({where:{userId:id}})
        return res.json(service)
    }

    async getAllUsServAll(req, res){
        const service = await ServicesUser.findAll()
        return res.json(service)
    }

    async getAll(req, res){
        const service = await Services.findAll()
        return res.json(service)

    }


    async getOne(req, res){
        const{id} = req.params
        const service = await Services.findOne({where:{id:id}})
        return res.json(service)
    }
}
export default ServiceController