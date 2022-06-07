const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
     name: String,
     email: String,
     password: String,
     date: {
          type: Date,
          default: Date.now
     }
});

// const user = mongoose.model('users', UserSchema);

module.exports = mongoose.model('users', UserSchema);