import mongoose, { Schema } from "mongoose";

const stateSchema = new mongoose.Schema({
    codeState: {
        type: String,
        required: [true, 'Code is Required'],
        enum: ['AC', 'PE', 'IN'],
        unique: true
    },
    nameState: {
        type: String,
        required: [true, 'Name state is Required'],
        unique: true
    },
    available: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

stateSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret, options) {
        delete ret._id;
    },
})


export const StateModel = mongoose.model('State', stateSchema);




