require("dotenv").config();
const express = require("express")
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const { gamerRoute } = require("./routes/gamer.route");
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT
var randomWords = require('random-words');

app.get("/", (req, res) => {
    console.log(req)
    console.log("hello")
    res.send("gamer")
})

app.use("/gamers", gamerRoute)
app.get('/word', (req, res) => {
    res.send(randomWords())
    console.log(str)
})

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connecting on port ", PORT)
    }
    catch (err) {
        console.log("err")
        console.log(err)
    }
})