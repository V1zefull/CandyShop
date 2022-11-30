import config from 'dotenv/config'
import express from 'express'
import sequelize from './sequelize.js'
import * as mapping from './models/mapping.js';
import cors from 'cors'
import router from './routes/index.js'
import fileUpload from 'express-fileupload'
import ErrorHandler from './middleware/ErrorHandler.js'

const PORT = process.env.PORT || 5000

const app = express()
// Cross-Origin Resource Sharing
app.use(cors())
// middleware для работы с json
app.use(express.json())
// middleware для загрузки файлов
app.use(fileUpload())
// все маршруты приложения
app.use('/api', router)
//Обработка ошибок
app.use(ErrorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Сервер запущен на порту', PORT))
    } catch(e) {
        console.log(e)
    }
}

start()