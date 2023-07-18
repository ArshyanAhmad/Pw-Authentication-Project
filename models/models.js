import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        validate: {
            validator: function (value) {
                const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                return emailRegex.test(value);
            },
            message: 'Please enter a valid email address.',
        },
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        select: false
    },
    username: {
        type: String,
        required: [true, 'Username is required.'],
        unique: true,
    },
    bio: {
        type: String,
        maxlength: [200, 'Bio cannot exceed 200 characters.'],
    },
});


const userModel = mongoose.model('User', userSchema)
export default userModel;
