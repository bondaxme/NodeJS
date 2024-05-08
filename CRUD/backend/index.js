const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config.js');
const cors = require('cors');
const routeRoutes = require('./routes/routeRoutes');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

// Використання маршрутів з папки routes для шляху /api
app.use('/api', routeRoutes);

// Підключення до MongoDB
mongoose
    .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
