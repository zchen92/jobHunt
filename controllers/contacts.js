const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts.js');

////////////////////////////////////////////
///////   PRESENTATIONAL ROUTES     ///////
//////////////////////////////////////////

////////////////////////////
////  INDEX - Contacts ////
//////////////////////////
router.get('/', (req,res)=>{
    Contact.find({},(err,allContacts)=>{
        res.render('contacts/Index', {contacts:allContacts});
    });
});

/////////////////////////////
/////  NEW - Contacts  /////
///////////////////////////
router.get('/New', (req,res)=>{
    res.render('contacts/New');
});

///////////////////////////////
/////  SHOW -  Contacts  /////
/////////////////////////////
router.get('/:id', (req,res)=>{
    Contact.findById(req.params.id,(err,showContact)=>{
        res.render('contacts/Show', {contact:showContact});
    });
});

///////////////////////////
////  EDIT - Contacts ////
/////////////////////////
router.get('/:id/edit', (req,res)=>{
    Contact.findById(req.params.id, (err, editContact)=>{
        res.render('contacts/Edit',{contact:editContact});
    });
});

////////////////////////////////////////////
////////      FUNCTIONAL ROUTES    ////////
///////////////////////////////////////////

//////////////////////////////
////  CREATE - Contacts  ////
////////////////////////////

router.post('/',(req,res)=>{
    if (req.body.lastContacted == null) {
        delete req.body.lastContacted //just deleted data from mongodb
    };
    // console.log(req.body.img)
    req.body.img ==='' ? req.body.img = 'https://i.imgur.com/LtT3pWh.jpg' : req.body.img = req.body.img
    Contact.create(req.body,(err, contacts)=>{
        res.redirect('/contacts');
    });
});

////////////////////////////
////  DELETE - Contacts ////
////////////////////////////
router.delete('/:id',(req,res)=>{
    Contact.findByIdAndRemove(req.params.id,(err,contact)=>{
        res.redirect('/contacts');
    });
});

/////////////////////////////
////  UPDATE - Contacts ////
////////////////////////////
router.put('/:id', (req,res)=>{
    if (req.body.lastContacted == null) {
        delete req.body.lastContacted //just deleted data from mongodb
    };
    Contact.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedContact)=>{
        res.redirect(`/contacts/${req.params.id}`);
    });
});

//////////////////////////
////  Export Router  ////
////////////////////////
module.exports = router;