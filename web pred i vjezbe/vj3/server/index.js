const express = require("express");
const port = 3000;

const { bio } = require("./data");
let app = express();

app.use(express.static("../client/"));

app.get("/bio", (req, res) => {
    const message = "Successfully retrieved";
    res.send({ message, bio });
});

app.listen(port, console.log("Server is running"));