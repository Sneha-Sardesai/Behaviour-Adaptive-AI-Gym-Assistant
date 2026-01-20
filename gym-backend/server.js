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

// configuring the app and middleware

app.use(express.json());
app.use(cors());

// tester route
app.get('/', (req, res) => {
    res.send("Server is working");
});

// ----------------------------------------------------------------------------------------------

// mongoDB

const mongoose = require('mongoose');

mongoose  
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB : ", err);
    })

const Member = require('./models/Member');

app.get('/members', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({error : error.message});
    }
})


// ----------------------------------------------------------------------------------------------

// routes (API's)

const homeRouter = require('./routes/index');

app.use('/api/home', homeRouter);

// ----------------------------------------------------------------------------------------------

// server

app.listen(process.env.PORT || 3001, () => {
    console.log("Server started at http://localhost:3001");
});

// ----------------------------------------------------------------------------------------------