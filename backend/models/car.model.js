import { Schema, model } from "mongoose";

const SchemaCar = new Schema({
    carModel: {
        type: String,
        require: true
    },
    maker: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    type: {
        type: String,
        enum: ['micro', 'sedan', 'hatchback', 'coupe', 'limousine', 'SUV', 'pickup', 'van', 'minibus', 'other'],
        require: true
    },
    color: {
        type:String,
        required: true
    },
    licensePlate: {
        type: String,
        require: true
    }

});

module.exports = model('modelCar', SchemaCar);