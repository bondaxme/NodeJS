const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Схема маршруту для бази даних
const routeSchema = new Schema({
    transport_type: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    initial_stop: {
        type: String,
        required: true
    },
    final_stop: {
        type: String,
        required: true
    },
    travel_time: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
