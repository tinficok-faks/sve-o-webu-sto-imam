const port = 3000;
const express = require("express");

let app= express();



app.get("/message", (req, res) => {
    const data = {usernamme : "tin", is_admin : false};
    res.send(data);
});

app.listen(port, console.log("Posluzitelj na 3000"));