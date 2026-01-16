// environment-based .env loading

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// --------------------------------------------------------------------------------------------

// importing dependencies

const express = require('express');
const app = express();
const cors = require('cors');

// ----------------------------------------------------------------------------------------------

// configuring the app

app.use(express.json());
app.use(cors());

// ----------------------------------------------------------------------------------------------

// server

app.listen(process.env.PORT || 3001, () => {
    console.log("Server started at http://localhost:3001");
});

// ----------------------------------------------------------------------------------------------

// routes 

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

// ----------------------------------------------------------------------------------------------

// mongodb

// const mongoose = require('mongoose');
// mongoose.connect(process.env.DATABASE_URL);

// const db = mongoose.connection;
// db.once('open', () => console.log("Connected to mongoose"));
// db.on('error', error => console.error(error));

// ------------------------------------------------------------------------------------------------