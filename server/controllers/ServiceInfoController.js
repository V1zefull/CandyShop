import {ServicesInfo} from "../models/mapping.js";

class serviceInfoController{
    async Create(req, res){
        const {title, description, serviceId} = req.body
        const type = await ServicesInfo.create({title, description, serviceId})
        return res.json(type)
    }

    async update(req, res){
        const {titleOld, id} = req.params
        const {title, description} = req.body
        const info = await ServicesInfo.update( {title, description},{where:{title:titleOld, serviceId:id}})
        return res.json(info)
    }

    async getAll(req, res){
        const trainerType = await ServicesInfo.findAll()
        return res.json(trainerType)
    }
    async getOne(req, res){
        const{serviceId} = req.params
        const trainerType = await ServicesInfo.findAll({where:{serviceId}})
        return res.json(trainerType)
    }
}

export default serviceInfoController