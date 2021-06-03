const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = express.Router();
const nodemailer = require("nodemailer");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('client/build'))
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
const uri = process.env.ATLAS_URI;
        
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



