// Third-party imports
const express = require('express');
const mongoose = require('mongoose');

// Local imports
const db = require("./config/db_config").mongoURI;
const items = require('./routes/api/items');

// Defining constants
const PORT = process.env.PORT | 5000;
const server = express();

server.use(express.json());

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

// Use Routes 
server.use('/api/items', items);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));