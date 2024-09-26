const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    fullName: String,
    phone: Number,
    email: String,
    password: String,
    gender: Selection,
})

const AdminModel = mongoose.model("adminSignup", AdminSchema)
module.exports = AdminModel