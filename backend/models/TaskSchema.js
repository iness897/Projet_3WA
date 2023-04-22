const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
})


module.exports = mongoose.model('TaskModel', taskSchema);
