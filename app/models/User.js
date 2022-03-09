const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    
    nickname: 
    {
        type: String,
        unique: true,
        required: true
    },
    img: 
    {
        type: String
    },
    name: 
    {
        type: String,
        required: true
    },
    surname:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true 
    },
    password:
    {
        type: String,
        required: true
    },
    created_at:
    {
        type: Date
    },
    update_at:
    {
        type: Date
    }

})

const User = mongoose.model('User',ProductSchema);
module.exports = User;