const express = require('express');
require('dotenv').config()
const morgan = require('morgan')
const recipesRoutes = require('./routes/recipes');
const mongoose = require('mongoose');
const cors = require('cors');
const UsersRoutes = require('./routes/users');
const cookieParser = require('cookie-parser');

const app = express();
const mongoURL = "mongodb+srv://nyeinhsuthwe:test1234@mern-cluster.dldsyf4.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Cluster"

mongoose.connect(mongoURL).then(() => {
    console.log('connected to db');
    app.listen(process.env.PORT,() => {
        console.log('app is running on localhost:'+process.env.PORT);
    })
});

app.use(cors(
    {
        origin : "http://localhost:5173",
        credentials : true
    }
));//local development --WARNING---
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.get('/', (req,res) => {
    return res.json({hello : 'world'});
});

app.use('/api/recipes',recipesRoutes)
app.use('/api/users',UsersRoutes)

app.get('/set-cookie',(req,res) => {
    // res.setHeader('Set-Cookie','name=hlaingminthan');
    res.cookie('name','aungaung');
    res.cookie('important-key','value', {httpOnly : true});
    return res.send('cookie already set');
})

app.get('/get-cookie',(req,res) => {
    let cookies = req.cookies;
    return res.json(cookies);
})

