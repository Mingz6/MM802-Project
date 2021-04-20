import { IAllfeature } from '../types/types';
import { model, Schema } from 'mongoose'

const allfeatureSchema: Schema = new Schema({
    date: {
        type: Date,
        required: false
    },

    price: {
        type: Number,
        required: false
    },

    lstm_predicted_price: {
        type: Number,
        required: false
    },

    bilstm_predicted_price: {
        type: Number,
        required: false
    },

    gru_predicted_price: {
        type: Number,
        required: false
    }

}, { timestamps: false })


export default model<IAllfeature>('Allfeature', allfeatureSchema)