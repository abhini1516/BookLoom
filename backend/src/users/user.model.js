const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        required: true
    }

})
userSchema.pre('save', function(next) {
    if (this.isModified('password')) return next(); {
        // Hash the password before saving it to the database
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;