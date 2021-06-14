const mongoose = require('mongoose')
// const Admin = require('./admin')
const userSchema = mongoose.Schema({
 name :{type:String ,require:true},
 age:{type:String ,require:true, minlengh:6 ,maxlengh:10},
 city:{type:String},
 mail:{type:String},
 phone:{type:String, minlengh:9 ,maxlengh:10},

//  weathers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Weather' }],
//  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }



})




module.exports = mongoose.model('User', userSchema)