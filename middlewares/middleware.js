import userModel from '../models/models.js'
import bcrypt from 'bcrypt'

const signUpDataValidate = async (req, res, next) => {
    const { name, username, email, password, bio } = req.body;

    if (!name, !username, !email, !password, !bio) {
        return res.render('signup', {
            message: 'All fields are required'
        })
    }

    next()

}

const signInDataValidate = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.render('signin', {
            message: 'All fields are required!'
        })
    }

    const user = await userModel.findOne({ username }).select('+password')

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.render('signin', {
            message: 'Username or Password didn"t matched'
        })
    }

    next()

}

const isAuthenticate = (req, res, next) => {
    const token = (req.cookies && req.cookies.token) || null

    if (token) {
        next()
    }
    else {
        return res.redirect('/signin')
    }
}

export { signUpDataValidate, signInDataValidate, isAuthenticate }