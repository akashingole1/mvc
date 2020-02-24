const Joi = require('joi');
const config = require('config');
const mongoose = require('mongoose');
const users = require('./routes/user');
const auth = require('./routes/auth');
const reset = require('./routes/update');
const express = require('express');
const app = express();

if(!config.get('jwtprivatekey')){
    console.error('Fatal Error: jwtprivate key is not defined');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/registration')
    .then(() => console.log('Connected to mongodb'))
    .catch(() => console.error('Could not connect to mongodb'));

app.use(express.json());
app.get('/', (req, res)=>{
    res.send(`Api's working fine!`)
})
app.use('/api/user', users);
app.use('/api/auth', auth);
app.use('/api/reset', reset);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is listening on port ${port}`));