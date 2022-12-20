const { GamerModel } = require("../model/GamerModel");

const postGamer = async (req, res) => {
    console.log(req.body)
    const { name } = req.body;
    const gamer = await GamerModel.findOne({ name: name });
    if (gamer) {
        res.send({ msg: "Gamer Exist", gamer: gamer.name })
    }
    else {
        const data = await new GamerModel(req.body)
        data.save();
        res.send({ msg: "Gamer Saved", gamer: name })
    }
}
module.exports = {
    postGamer
}