const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')

const app = express();

app.use(cors());
app.use(express.json({ extended: false }))
app.use('/api/users', require('./routers/api/users'));
app.use('/api/auth', require('./routers/api/auth'));
app.use('/api/products', require('./routers/api/products'));

app.use('/', (req, res) => res.send('API Running!!'));

//Connect  Database
connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})