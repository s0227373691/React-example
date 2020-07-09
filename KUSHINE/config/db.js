const mongoose = require('mongoose');
const config = require('config');

// const db = config.get('mongoLocal');
const db = config.get('mongoAtlas');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log('MongoDB connected');
    } catch {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;