const port = 3000;
const express = require("express");

let app = express();

// ovo ovdje je statični folder
app.use(express.static("../client/"));



app.get("/message", (req, res) => {
    const data = { username: "jurica", is_admin: false };
    res.send(data);
});

const products = ["TV", "Headphones", "Laptop"];

app.get("/products", (req, res) => {
    res.send(products);
});

app.listen(port, console.log("Poslužitelj na 3000"));