const { Router } = require("express");
const { postGamer } = require("../controller/gamerController");

const gamerRoute = Router();

gamerRoute.post("/", postGamer);

module.exports = {
    gamerRoute
}