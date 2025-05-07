const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        name:String,
        required:true,
    },
    address: {
        city:{
            type: String,
            required: true,
        },
        country: String,
        state: String,
        zipcode: String,
    },
    phone:{
        type: Number,
        required: true,
    },
})