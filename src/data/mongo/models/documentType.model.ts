import mongoose, { Schema } from "mongoose";

const DocumentTypeSchema = new mongoose.Schema({
    codeType: {
        type: String,
        required: [true, 'Code is Required'],
        enum: ['CC', 'NI', 'CE', 'PA'],
    },
    nameType: {
        type: String,
        required: [true, 'Name is Required'],
    },
    stateType: {
        type: Schema.Types.ObjectId,
        ref: 'State',
        required: [true, 'stateType is Required'],
    },
    available: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

export const DocumentTypeModel = mongoose.model('DocumentType', DocumentTypeSchema);
