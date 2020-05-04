const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const jobSchema = new Schema ({
    company: {type:String, required: true},
    position: {type:String, required: true},
    link: String,
    haveYouApplied: {type: Boolean, required:true},
    dateApplied:Date,
    gotAnInterview: Boolean,
    interviewDate: Date,
    interviewMethod: String,
    receivedAnOffer: Boolean,
    notes: String,
    tags:Array
}, {timestamps:true});

//Creating model from the schema
const Job = mongoose.model('Job', jobSchema)

//Make it accessible
module.exports = Job