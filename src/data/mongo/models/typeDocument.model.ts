import mongoose, { Schema } from "mongoose";

const DocumentTypeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Code is Required'],
        enum: ['CC', 'NI', 'CE', 'PA'], 
    },
    name: {
        type: String,
        required: [true, 'Name is Required'],
    },
    stateType: { 
        type: Schema.Types.ObjectId,
        ref: 'State', 
        required: [true, 'stateType is Required'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }    
});

export const DocumentTypeModel = mongoose.model('DocumentType', DocumentTypeSchema);
