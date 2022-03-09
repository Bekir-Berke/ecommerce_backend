const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = 8000;
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
};
app.use(express.json());
app.use(cookieParser());
app.disable('x-powered-by');
app.use(cors());
app.use(router);
mongoose.connect(process.env.dbURI, options)
    .then(() => {
        app.listen(process.env.PORT || PORT);
        console.log(`Server is listening at ${process.env.PORT || PORT}`);
    })
    .catch(err => console.error(err));