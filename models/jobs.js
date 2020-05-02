const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const jobSchema = new Schema ({
    Company: {type:String, required: true},
    Position: {type:String, required: true},
    Link: String,
    haveYouApplied: Boolean,
    dateApplied:Date,
    gotAnInterview: Boolean,
    phoneInterview:Date,
    inPersonInterview:Date,
    gotAnOffer: Boolean
}, {timestamps:true})

//Creating model from the schema
const Job = mongoose.model('Job', jobSchema)

//Make it accessible
module.exports = Job