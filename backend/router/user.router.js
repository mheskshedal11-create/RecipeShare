import express from 'express'
import { userSignup, userLogin, getUser } from '../controller/user.controller.js'
const userRouter = express.Router()

userRouter.post('/signup', userSignup)
userRouter.post('/login', userLogin)
userRouter.get('/user/:id', getUser)


export default userRouter