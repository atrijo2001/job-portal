const mongoose = require('mongoose');


const userSchema =  mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    phone: {
        type: String, 
        required: [true, 'Please enter a phone number'],
        unique: [true, 'The phone number entered is already registered'],
        maxlength: 10
    },
    aadharNumber: {
        type: String,
        required: [true, 'Please enter your aadhar number']
    },
    role: {
        type: String,
        enum: ['employer', 'employee', 'admin'],
        default: 'employee'        
    },
    employeeDetails: {
        workType: {
            type: String,
            enum: ['Plumber', 'Electrician', 'Mason', 'Carpenter', 'House Help', 'Cook', 'Nurse', 'daily worker']
        },
        location: {
            type: String
        },
        hourlyRate: {
            type: String
        },
        helperNeeded: {
            type: Boolean
        },
        extraChargeForHelper: {
            type: String
        },
        address: {
            type: String
        },
        experience: {
            type: String
        },
        photo: {
            type: String
        }
    },
    phoneOtp: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)