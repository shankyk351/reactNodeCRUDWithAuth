const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const items = require('./routes/api/items');

const app = express();

app.use(cors({'Access-Control-Allow-Origin': '*'}));
// Body Parser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('mongodb connected'))
    .catch(err=>console.log(err))

// use routes
app.use('/api/items', items);

// connect server 
const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`server started on port ${port}`))