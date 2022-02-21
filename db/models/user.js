const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({

    // All fields are required
    // username must be unique
    username: {
        type: String,
        required: true,
        unique: [true, 'username must be unique']
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    // password is min 6 characters, can only contain (a-z A-Z 0-9 # $ & _)
    password: {
        type: String,
        required: true,
        minlength: 6,
        match: [/^[a-zA-Z0-9\#\$\&\_]+$/, 
            'Please enter a valid password ( min 6 characters, a-z, A-Z, 0-9, #, $, &, _ )']
    },
    // email must be in a valid format
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
    // two types of users admin and customer
    type: {
        type: String,
        enum: ['admin', 'customer'],
        required: true
    }

})

let User = mongoose.model('User', UserSchema)
module.exports = User