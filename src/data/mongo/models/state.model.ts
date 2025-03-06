import mongoose, { Schema } from "mongoose";

const stateSchema = new mongoose.Schema({
    codeState: {
        type: String,
        required: [true, 'Code is Required'],
    },
    nameState: {
        type: String,
        required: [true, 'Name state is Required'],
    },
    available: {
        type: String,
        default: Boolean
    },
});


stateSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    },
})


export const StateModel = mongoose.model('State', stateSchema);