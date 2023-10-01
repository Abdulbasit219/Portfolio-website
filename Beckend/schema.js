const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    F_name: {
        type: String,
    },
    L_name: {
        type: String,
    },
    Email: {
        type: String,
    },
    Message: {
        type: String,
    }
})

const user = mongoose.model('Porfolio', schema);

module.exports = user;