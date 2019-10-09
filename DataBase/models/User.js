const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    token: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        min: 8,
        max: 255
    },
    name: {
        type: String,
        required: true,
        max: 255
    },
    surname: {
        type: String,
        required: true,
        max: 255
    },
    phoenNumber: {
        type: String,
        required: true,
        min: 8,
        max: 255
    },
    emailAdress: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    isEnable: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: String
    }
});

const User = mongoose.model('user', userSchema); 

module.exports = {
  User
};