const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.get('/data/catalog', (req, res) => {
    res.json([]);
});

app.use(routes);

mongoose.connect('mongodb://localhost:27017/Mythify')
    .then(() => console.log('DB Connected'));

app.listen(5000, () => console.log('Server is listening on port 5000.'));