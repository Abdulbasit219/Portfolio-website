const mongoose = require('mongoose');

const Database = process.env.DB;

mongoose.connect(
    Database,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Database connected');
    }).catch(() => {
        console.log("Database disconnected");
    });
