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
router.get('/new', (req,res)=>{
    res.render('jobs/New');
});

////////////////////////////
/////  SHOW -  Jobs   /////
//////////////////////////
router.get('/:id', (req,res)=>{
    Job.findById(req.params.id,(err,foundJob)=>{
        res.render('Show', {job:foundJob});
    });
});

////////////////////////
////  EDIT - Jobs  ////
//////////////////////
router.get('/:id/edit', (req,res)=>{
    Job.findById(req.params.id, (err, foundJob)=>{
        res.render('Edit',{job:foundJob});
    });
});

////////////////////////////////////////////
////////      FUNCTIONAL ROUTES    ////////
///////////////////////////////////////////

///////////////////////////
////  CREATE - Jobs   ////
/////////////////////////
router.post('/jobs', (req,res)=>{
    Job.create(req.body, (err, createdJob)=>{
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
    Job.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedJob)=>{
        res.redirect('/jobs')
    })
})

//////////////////////////
////  Export Router  ////
////////////////////////
module.exports = router;