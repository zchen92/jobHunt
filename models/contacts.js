const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const contactSchema = new Schema ({
    name: {type:String, required:true},
    company: String,
    img: String,
    phone: Number,
    email: String,
    lastContacted: Date,
    notes: String,
    tags: Array
},{timestamps:true})

//Creating model from the schema
const Contact = mongoose.model('Contact', contactSchema)

//Make it accessible
module.exports = Contact