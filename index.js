const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const logger = require('./middleware/logger');
const saveUserDetailsRoute = require('./routes/saveUserDetailsRoute');
const verifyRoute = require('./routes/verifyRoute');
const saveBlogPostRoute = require('./routes/saveBlogPostRoute');
const getPostsRoute = require('./routes/getPostsRoute');
const getPostRoute = require('./routes/getPostRoute');

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use(logger);

app.use('/login', (req, res) => { 
    res.send({token: 'xyz123'});
});

app.use('/welcome',(req,res)=>{
    res.send("Welcome to backend!");
});

app.use('/api',saveUserDetailsRoute.routes);
app.use('/api',verifyRoute.routes);
app.use('/api',saveBlogPostRoute.routes);
app.use('/api',getPostsRoute.routes);
app.use('/api',getPostRoute.routes);

app.listen(config.port, ()=>{
    console.log(`Example app listening at http://localhost:${config.port}`);
});