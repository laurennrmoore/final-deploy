const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());
app.use(express.static('client/build'))

const uri = "mongodb+srv://mjarman1:Kable@cluster0.wh36m.mongodb.net/AttractionsCap?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const attractionsRouter = require('./Routes/Attractions.Routes');


app.use("/attractions", attractionsRouter);

        


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build'))
  })
}

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

