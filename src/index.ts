import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import FAQRouter from './routes/faq.route'

dotenv.config()

mongoose.connect(process.env.DB_CONNECTION_STRING)

const mongoDBConnection = mongoose.connection

const app = express()
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(cors())
app.use('/api', FAQRouter)

async function start() {
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`))
}

mongoDBConnection.once('open', () => {
  console.log('🚀 ~ mongoDB connection is open')
  start()
})
