import AppError from "../errors/AppError.js";

export default function error(err, req, res, next){
    if (err instanceof AppError){
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message:"Непредвиденная ошибка"})
}