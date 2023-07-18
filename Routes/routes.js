import express from "express";
const Router = express.Router()

import { postSignUp, postSignIn, signIn, signUp, dashboard, logout } from "../controllers/controller.js";
import { signUpDataValidate, signInDataValidate, isAuthenticate } from '../middlewares/middleware.js'

Router.get('/signIn', signIn)
Router.get('/signUp', signUp)

Router.post('/signin', signInDataValidate, postSignIn)
Router.post('/signup', signUpDataValidate, postSignUp)

Router.get('/', isAuthenticate, dashboard)

Router.get('/logout', logout)

// If use another routes then its response a json 
Router.get('*', (req, res) => {
    res.status(400).json({
        success: false,
        signUp: '/signup',
        signIn: '/signin'
    })
})

export default Router;