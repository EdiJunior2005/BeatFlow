const mongoose = require("mongoose")

const esquemaUser = new mongoose.Schema({
    username: { type: String, required: true , unique: true},
    password: { type: String, required: true },
});

const User = mongoose.model("User", esquemaUser);

module.exports = User