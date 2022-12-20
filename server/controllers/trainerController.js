import {Trainer} from '../models/mapping.js'
import ApiError from '../errors/AppError.js'
class TrainerController{
    async create(req, res, next){
        try {
            let{name, number, brandId, trainerTypeId} = req.body
            const trainer = await Trainer.create({name, number, brandId, trainerTypeId})
            return res.json(trainer)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res){
        const{id} = req.params
        let{name, brandId, number} = req.body
        const trainer = await Trainer.update({name, number, brandId},{where:{id:id}})
        return res.json(trainer)
    }

    async DeleteOne(req, res){
        const{id} = req.params
        const trainer = await Trainer.destroy({where:{id:id}})
        return res.json(trainer)

    }

    async getAll(req, res){
        const trainer = await Trainer.findAll()
        return res.json(trainer)

    }


    async getOne(req, res){
        const{id} = req.params
        const trainer = await Trainer.findOne({where:{id:id}})
        return res.json(trainer)
    }

}

export default TrainerController