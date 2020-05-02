const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts.js');

router.get('/', (req,res)=>{
    res.render('contacts/Index.jsx');
});

////////////////////////////////////////////
///////   PRESENTATIONAL ROUTES     ///////
//////////////////////////////////////////

////////////////////////////
////  INDEX - Contacts ////
//////////////////////////


/////////////////////////////
/////  NEW - Contacts  /////
///////////////////////////

///////////////////////////////
/////  SHOW -  Contacts  /////
/////////////////////////////

///////////////////////////
////  EDIT - Contacts ////
/////////////////////////

////////////////////////////////////////////
////////      FUNCTIONAL ROUTES    ////////
///////////////////////////////////////////

//////////////////////////////
////  CREATE - Contacts  ////
////////////////////////////

////////////////////////////
////  DELETE - Contacts ////
////////////////////////////

/////////////////////////////
////  UPDATE - Contacts ////
////////////////////////////

module.exports = router;