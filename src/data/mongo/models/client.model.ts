import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name is Required']
    },
    middle_name: {
        type: String,
    },
    first_surname: {
        type: String,
        required: [true, 'First Surname is Required']
    },
    middle_surname: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is Required'],
        unique: true
    },
    emailValidated: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        required: [true, 'Username is Required']
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    },
    role: {
        type: [String],
        default: ['Admin_Rol'],
        enum: ['Admin_Rol', 'User_Rol']
    }

});




export const clientModel = mongoose.model('Clientes', clientSchema);