import ApiError from '../errors/AppError.js'



class BrandController{
    async create(req, res){

    }

    async getAll(req, res, next){
        const {id}= req.query
        if(!id){
            return next(ApiError.badRequest('hello'))
        }
        res.json(id)
    }
}
export default BrandController