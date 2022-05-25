const mongoose = require('mongoose');

const user = new mongoose.Schema({

    id: {
        type: String,
        required: false,
        trim: true
    },

    name: {
        type: String,
        required: true,
        trim: true

    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true

    },
    consentGDPR: {
        type: String,
        required: true,
        trim: true

    },
    userType: {
        type: String,
        required: true,
        trim: true

    },
    ageRange: {
        type: String,
        required: false,
        trim: true

    },
    children: {
        type: String,
        required: false,
        trim: true

    },
    childrenAge: { 
        type: String,
        required: false,
        trim: true

    },
    zipCode: {
        type: String,
        required: false,
        trim: true

    },

    openQuestion: {
        type: String,
        required: false,
        trim: true

    },
    apiResponse: {
        type: String,
        required: false,
        trim: true
    }
   
})


const UserModel = mongoose.model("user", LandingSchema);

module.exports = UserModel;