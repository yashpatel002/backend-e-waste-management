const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v:any) {
        return /\d{10}/.test(v); // Simple validation for 10 digit phone numbers
      },
      message: (props: { value: any; }) => `${props.value} is not a valid phone number!`
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v:any) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Simple email validation
      },
      message: (props: { value: any; }) => `${props.value} is not a valid email!`
    }
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  type: {
    type: String,
    required: true,
    enum: ['business', 'user'],
  }
}, {
  timestamps: true
});

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration
