////////////////////////////////////////////
/////////        DEPENDENCIES     //////////
////////////////////////////////////////////
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const Job = require('./models/jobs.js');
const Contact = require('./models/contacts.js');
//const methodOverride=require('method-override')

////////////////////////////////////////////
/////////        MIDDLEWARE      //////////
///////////////////////////////////////////
app.use(express.static('public')); 
app.use(express.urlencoded({extended:false})); 
//app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); 

////////////////////////////////////////////
/////////   MONGOOSE COLLECTION   /////////
///////////////////////////////////////////
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo')
})

//////////////////////////////////
/////////   CONTROLLER   /////////
//////////////////////////////////
const jobsController = require('./controllers/jobs.js');
app.use('/jobs', jobsController)

const contactsController = require('./controllers/contacts.js');
app.use('/contacts', contactsController)

///////////////////
////  INDEX   ////
//////////////////
app.get('/', (req,res)=>{
    res.render('Index.jsx')
})

////////////////////////
/////   LISTEN    //////
////////////////////////
app.listen(port, ()=>{
    console.log('listening on port: ' + port);
})
