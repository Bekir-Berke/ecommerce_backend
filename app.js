const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const categoryRouter = require('./routes/categoryRouter');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true
};
app.use(express.json({extended:true}));
app.use(fileUpload());
app.disable('x-powered-by');
app.use(cors());
app.use('/api/products', productRouter);
app.use('/api/auth', userRouter);
app.use('/api/categories', categoryRouter);
mongoose.connect(process.env.dbURI, options)
    .then(() => {
        app.listen(PORT);
        console.log(`Server is listening at ${PORT}`);
    })
    .catch(err => console.error(err));