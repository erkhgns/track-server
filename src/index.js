// monggo db user : erkhgns ,password:erkhgns
require('./models/user')
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth')
const trackRoutes = require('./routes/trackRoutes')
const app = express();


app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);
mongoose.connect('mongodb+srv://erkhgns:erkhgns@cluster0.smuwm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true
})

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongo instance');
})

mongoose.connection.on('error',(err)=>{
    console.log('Error connecting to mongo' +err);
})
app.get('/',requireAuth,(req,res)=>{
    res.send(`Your email is: ${req.user.email}`)
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
});