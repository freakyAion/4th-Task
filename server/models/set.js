const {Schema, model} = require("mongoose");

const Set = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
})

module.exports = model("Set", Set);