import ApiError from '../errors/AppError.js'
import {Brand, Trainer} from "../models/mapping.js";



class BrandController{
    async create(req, res){
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res, next){
       const brands = await Brand.findAll()
        return res.json(brands);
    }

    async getOne(req, res){
        const{id} = req.params
        try {
            const brand = await Brand.findOne({where:{id}})
            return res.json(brand)
        }catch (e) {

        }
    }
}
export default BrandController