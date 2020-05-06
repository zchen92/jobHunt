const express = require('express');
const router = express.Router();
const Job = require('../models/jobs.js');

////////////////////////////////////////////
///////   PRESENTATIONAL ROUTES     ///////
//////////////////////////////////////////

/////////////////////////
////  INDEX - Jobs  ////
///////////////////////
router.get('/', (req,res)=>{
    // res.render('jobs/Index');
    Job.find({},(err,allJobs)=>{
        res.render('jobs/Index', {jobs:allJobs});
    });
});

//////////////////////////
/////  NEW - Jobs   /////
////////////////////////
router.get('/New', (req,res)=>{
    res.render('jobs/New');
});

////////////////////////////
/////  SHOW -  Jobs   /////
//////////////////////////
router.get('/:id', (req,res)=>{
    Job.findById(req.params.id,(err,foundJob)=>{
        res.render('jobs/Show', {job:foundJob});
    });
});

////////////////////////
////  EDIT - Jobs  ////
//////////////////////
router.get('/:id/edit', (req,res)=>{
    Job.findById(req.params.id, (err, editJob)=>{
        res.render('jobs/Edit',{job:editJob});
    });
});

////////////////////////////////////////////
////////      FUNCTIONAL ROUTES    ////////
///////////////////////////////////////////

///////////////////////////
////  CREATE - Jobs   ////
/////////////////////////
router.post('/', (req,res)=>{
    if (req.body.haveYouApplied === "on") {
        req.body.haveYouApplied = true;
    } else {
        req.body.haveYouApplied = false
    };
    if (req.body.gotAnInterview === "on") {
        req.body.gotAnInterview = true;
    } else {
        req.body.gotAnInterview = false
    };
    if (req.body.receivedAnOffer === "on") {
        req.body.receivedAnOffer = true;
    } else {
        req.body.receivedAnOffer = false
    };
    if (req.body.dateApplied == null) {
        delete req.body.dateApplied //just deleted data from mongodb
    };
    if (req.body.interviewDate == null) {
        delete req.body.interviewDate //just deleted data from mongodb
    };
    Job.create(req.body, (err, jobs)=>{
        res.redirect('/jobs');
    });
})

//////////////////////////
////  DELETE - Jobs  ////
////////////////////////
router.delete('/:id',(req,res)=>{
    Job.findByIdAndRemove(req.params.id,(err,job)=>{
        res.redirect('/jobs');
    });
})

/////////////////////////
////  UPDATE - Jobs ////
///////////////////////
router.put('/:id', (req,res)=>{
    if (req.body.haveYouApplied === "on") {
        req.body.haveYouApplied = true;
    } else {
        req.body.haveYouApplied = false
    };
    if (req.body.gotAnInterview === "on") {
        req.body.gotAnInterview = true;
    } else {
        req.body.gotAnInterview = false
    };
    if (req.body.receivedAnOffer === "on") {
        req.body.receivedAnOffer = true;
    } else {
        req.body.receivedAnOffer = false
    };
    if (req.body.dateApplied == null) {
        delete req.body.dateApplied //just deleted data from mongodb
    };
    if (req.body.interviewDate == null) {
        delete req.body.interviewDate //just deleted data from mongodb
    };
    Job.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedJob)=>{
        res.redirect(`/jobs/${req.params.id}`)
    })
})

//////////////////////////
////  Export Router  ////
////////////////////////
module.exports = router;