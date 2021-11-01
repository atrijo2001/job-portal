const Booking = require('../models/Bookings');
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

//Book an employee by an employer
exports.bookEmployee = asyncHandler(async(req, res)=>{
    const employee = req.body;
    // const checkUser = await User.findById(user)
    // if(checkUser.role!=='employee'){
    //     res.status(404)
    //     throw new Error('You have to book an employee. You cant book an employer')
    // } 
    console.log(employee)
    const booking = await Booking.create(employee)
    if(!booking){
        res.status(404)
        throw new Error('Couldnt book')
    }
    res.status(200).json({
        success: true,
        data: booking
    })
})

//See previous bookings by the employer
exports.viewBookings = asyncHandler(async(req, res)=>{
    const bookings = await Booking.find();
    if(!bookings){
        res.status(404)
        throw new Error("Couldnt add a booking");
    }
    res.status(200).json({
        success: true,
        data: bookings
    })
})

//Add review, complaints to a previous booking
exports.addDetails = asyncHandler(async(req, res)=>{
    const {bookingId, experience, rating, complaints, complaintDetails} = req.body
    const booking = await Booking.findById(bookingId)
    booking.experience = experience
    booking.rating = rating
    booking.complaints = complaints
    booking.complaintDetails = complaintDetails
    await booking.save();
    if(!booking.experience){
        res.status(404)
        throw new Error("Couldnt add details mentioned above")
    }
    res.status(200).json({message: "Details successfully saved"})
})