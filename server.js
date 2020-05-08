////////////////////////////////////////////
/////////        DEPENDENCIES     //////////
////////////////////////////////////////////
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose')
const Job = require('./models/jobs.js');
const Contact = require('./models/contacts.js');
const methodOverride=require('method-override')

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
mongoose.connection(MONGODB_URI, {useNewUrlParser: true});

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
app.use('/jobs', jobsController)

const contactsController = require('./controllers/contacts.js');
app.use('/contacts', contactsController)

///////////////////
////  INDEX   ////
//////////////////
app.get('/', (req,res)=>{
    res.render('Index')
})

////////////////////
////  SEARCH   ////
//////////////////
/*app.post('/search', (req,res)=>{
    console.log(req.body)
    // res.send("hi")
    //Job.find({company:req.body.search}, (err, foundSearch)=>{
    Job.find({position:req.body.search}, (err, foundSearch)=>{
        // res.send(foundSearch)
        Job.find({}, (err, allJobs)=>{
            res.render("jobs/Index", {search:foundSearch, jobs:allJobs})
        })
    });
})*/

app.post('/search', (req,res)=>{
    console.log(req.body)
    let contacts = []
    Contact.find({company:req.body.search}, (err, foundSearch)=>{
        // Contact.find({}, (err, allContacts)=>{
            //res.render("Search", {search:foundSearch, contacts:allContacts})
            console.log(foundSearch, "IS THE FOUND SEARCH in CONTACT.FIND")
            contacts = foundSearch
            // contacts.push(foundSearch)
       // })
    });
    Job.find({company:req.body.search}, (err, foundSearch)=>{
        // res.send(foundSearch)
        // Job.find({}, (err, allJobs)=>{
            // contacts.push(foundSearch)
            console.log(foundSearch, "IS THE NEW FOUND SEARCH IN JOB.FIND")
            console.log([...foundSearch, ...contacts], "")
            res.render("Search", {search:[...foundSearch, ...contacts]}) //... is used to takes contents of 2 arrays and puts it into one
    });
})

// app.post('/search', (req,res)=>{
//     console.log(req.body)
//     Contact.find({company:req.body.search}, (err, foundSearch)=>{
//         Contact.find({}, (err, allContacts)=>{
//             res.render("Search", {search:foundSearch, contacts:allContacts})
//         })
//     });
// })

////////////////////////
/////   LISTEN    //////
////////////////////////
app.listen(port, ()=>{
    console.log('listening on port: ' + PORT);
})
