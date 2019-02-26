const express = require('express');
const mongoose = require('mongoose');
const db = require("./config/db_config").mongoURI;
const PORT = process.env.PORT | 5000;
const server = express();

server.use(express.json());


mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));