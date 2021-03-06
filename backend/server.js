const express  = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established successfully!');
})


const exerciseRouter = require('./routes/exercise');
const userRouter = require('./routes/user');

app.use('/users', userRouter);
app.use('/exercise', exerciseRouter);


app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
});
