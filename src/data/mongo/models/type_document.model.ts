import mongoose, { Schema } from "mongoose";

const TypeDocumentSchema = new mongoose.Schema({
    code: {
        type: [String],
        required: [true, 'Code is Required'],
        enum: ['CC', 'NI','CE', 'PA'],
    },
    name: {
        type: String,
        required: [true, 'Name is Required'],
    },
    stastType: {
        type: Schema.Types.ObjectId,
        ref: 'StatesSchema',
        required: [true, 'stastType is Required'],
    },

});




export const TypeDocumentModel = mongoose.model('TiposDocumentos', TypeDocumentSchema);