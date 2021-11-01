const User = require('../models/User')
const {generateOtp, fast2sms} = require('../utils/otpUtil')
const {generateToken} = require('../utils/tokenUtil')
const asyncHandler = require('express-async-handler')

//Create a user
exports.createUser = asyncHandler(async(req, res, next)=>{
    const {phone, name, aadharNumber, role, employeeDetails} = req.body

    const phoneExists = await User.findOne({phone})

    if(phoneExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({name, phone, aadharNumber, role, employeeDetails})
    if(!user){
        res.status(404)
        throw new Error('couldnt create user')
    }
    const otp = generateOtp(4);

    user.phoneOtp = otp;
    res.status(200).json({
        success: true,
        data: user
    })
    await user.save();
    try {
        await fast2sms(
            {
              message: `Your OTP is ${otp}`,
              contactNumber: user.phone,
            },
            next()
          );
    } catch (error) {
        throw new Error(error)
    }
})


//Login a user
exports.loginUser = asyncHandler(async(req, res, next)=>{
    const {phone} = req.body
    const user = await User.findOne({phone});
    if(!user){
        res.status(400)
        throw new Error('The phone number you entered doesnt exist. Please enter a valid phone number');
    }

    res.status(201).json({
        type: "success",
        message: "OTP sended to your registered phone number",
        data: {
          userId: user._id,
        },
      });
  
      // generate otp
      const otp = generateOtp(4);
      // save otp to user collection
      user.phoneOtp = otp;
    //   user.isAccountVerified = true;
      await user.save();

      try {
        await fast2sms(
            {
              message: `Your OTP is ${otp}`,
              contactNumber: user.phone,
            },
            next()
          );
    } catch (error) {
        throw new Error(error)
    }

})

//Verify a user
exports.verifyUser = asyncHandler(async(req, res)=>{
    const {otp, phone} = req.body;
    const user = await User.findOne({phone});
    if(!user){
        res.status(400)
        throw new Error('The phone number you entered doesnt exist. Please enter a valid phone number');
    }
    if(user.phoneOtp!==otp){
        res.status(400)
        throw new Error('The otp entered is incorrect');
    }
    
    const token = generateToken(user._id)
    console.log(token)
    user.phoneOtp = "";
    if(!token){
        res.status(404)
        throw new Error('Couldnt generate a token')
    }
    res.status(200).json({
        userId: user._id,
        token
    })
})

//Get user details
exports.getUserDetails = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user.id)
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            phone: user.phone,
            role: user.role
        })
    } else{
        res.status(404)
        throw new Error('User not found')
    }
})