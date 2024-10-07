const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    experienceId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Experience',
        required : true
    },
    date: {
        type: Date,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    guests : {
       adults: Number,
        children: Number,
        infants: Number,
    },
    totalAmount : {
        type : Number,
        required : true
    },
    paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  paymentId: {
    type: String,
  },
  status: {
        type: String,
        enum: ['active', 'cancelled','completed'],
        default: 'active',
    },
})

const bookingModel = mongoose.model('Booking', bookingSchema)

module.exports = bookingModel