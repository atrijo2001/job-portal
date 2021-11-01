const mongoose = require('mongoose');


const bookingSchema = mongoose.Schema({
            employee: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }, 
            experience: {
                type: String
            },
            rating: {
                type: Number
            },
            complaints: {
                type: Boolean
            },
            complaintDescription: {
                type: String
            }
})

module.exports = mongoose.model('Booking', bookingSchema)