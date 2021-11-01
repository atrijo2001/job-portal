const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

exports.protect = asyncHandler(async(req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded)
            req.user = await User.findById(decoded.id)
            next()
        } catch (error) {
            console.error(error)
            res.status(401)
             throw new Error('Not authorized, token failed')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

exports.authorize = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            res.status(403);
            throw new Error('You are not authorized to access this route')
        }
        next();
    }
}