const { default: mongoose } = require("mongoose");

const gamerSchema = mongoose.Schema({
    name: { type: String },
    score: { type: Number }
})
const GamerModel = mongoose.model("gamer", gamerSchema);
module.exports = {
    GamerModel
}