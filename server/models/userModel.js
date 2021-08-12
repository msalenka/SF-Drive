const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
        name: {type: String, required: true},
        birthday: {type: String},
        email: {type: String, required: true},
        telNumber: {type: String, required: true},
        passNumber: {type: String, required: true},
        passDate: {type: String, required: true},
        passEmit: {type: String, required: true},
        passEmitNum: {type: String, required: true},
        licNumber: {type: String, required: true},
        licDate: {type: String, required: true},
        passwordHash: {type: String, required: true},

});

const User = mongoose.model('user', usersSchema);

module.exports = User;