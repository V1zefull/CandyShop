import config from 'dotenv/config'
import express from 'express'
import sequelize from './sequelize.js'
import router from './routes/auth.routes.js'
import corsMiddleware from './middleware/cors.middleware.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000



const app = express()
// Cross-Origin Resource Sharing
app.use(corsMiddleware)
app.use(cors())
app.use(express.json())
app.use("/api/auth", router)


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