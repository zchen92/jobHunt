////////////////////////////////////////////
/////////        DEPENDENCIES     //////////
////////////////////////////////////////////
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const Job = require('./models/jobs.js');
const Contact = require('./models/contacts.js');
const methodOverride=require('method-override');

////////////////////////////////////////////
/////////        MIDDLEWARE      //////////
///////////////////////////////////////////
app.use(express.static('public')); 
app.use(express.urlencoded({extended:false})); 
app.use(methodOverride('_method'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); 

////////////////////////////////////////////
/////////   MONGOOSE COLLECTION   /////////
///////////////////////////////////////////
// mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.once('open', ()=>{
//     console.log('connected to mongo')
// })

////////////////////////////////
/////////   DATABASE    ///////
//////////////////////////////
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobHunt'

// connect to mongo
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
mongoose.connection.on('open' , ()=>{});

//////////////////////////////////
/////////   CONTROLLER   /////////
//////////////////////////////////
const jobsController = require('./controllers/jobs.js');
app.use('/jobs', jobsController);

const contactsController = require('./controllers/contacts.js');
app.use('/contacts', contactsController);

///////////////////
////  INDEX   ////
//////////////////
app.get('/', (req,res)=>{
    res.render('Index')
});

////////////////////
////  SEARCH   ////
//////////////////
app.post('/search', (req,res)=>{
    console.log(req.body)
    let contacts = []
    Contact.find({company:req.body.search}, (err, foundSearch)=>{
        contacts = foundSearch
    });
    Job.find({company:req.body.search}, (err, foundSearch)=>{
        res.render("Search", {search:[...foundSearch, ...contacts]}) //... is used to takes contents of 2 arrays and puts it into one
    });
});

////////////////////////
/////   LISTEN    //////
////////////////////////
app.listen(PORT, ()=>{
    console.log('listening on port: ' + PORT);
});
