import { Schema, model } from "mongoose";

const SchemaSpace = new Schema({
    number: {
        type: Number,
        require: true
    },
    floor: {
        type: Number,
        require: true
    },
    size: {
        type: String,
        enum: ['small', 'medium', 'large'],
        require: true
    },
    occupied: {
        type: Boolean,
        default: false,
        require: true
    },
    carLicense: {
        type: String,
        require: false
    }

});

module.exports = model('modelSpace', SchemaSpace);