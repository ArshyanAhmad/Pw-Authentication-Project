import { config } from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import connectToDatabase from '../config/db.js'
import Router from '../Routes/routes.js'

const app = express()

config()
connectToDatabase() // database connection

app.set('view engine', 'ejs')

app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(Router)

export default app;