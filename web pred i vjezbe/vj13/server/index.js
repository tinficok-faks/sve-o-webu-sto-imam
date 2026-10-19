const express = require("express");
const port = 3000;

const app = express();

const crypto = require("crypto");
const util = require("util");

const randomBytesAsync = util.promisify(crypto.randomBytes);
const pbkdf2Async = util.promisify(crypto.pbkdf2)

const jwt = require("jsonwebtoken");
const secret = "rather store in a file";
const jwtSignAsync = util.promisify(jwt.sign);
const jwtVerifyAsync = util.promisify(jwt.verify);

app.use(express.static("../client/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const check_password_how_to = async () => {
    const password = "123456";

    const salt = (await randomBytesAsync(16)).toString("hex");

    const hash = (await pbkdf2Async(password, salt, 1000, 16, "sha512")).toString("hex");

    const password_login = "123456";

    const hash_login = (await pbkdf2Async(password_login, salt, 1000, 16, "sha512")).toString("hex");

    return hash === hash_login;
}

(async () => {
    const correct = await check_password_how_to();
    //console.log(correct);
})();

app.post("/api/login", async (req, res) => {
    const username = "tficok";
    const _id = "123";
    const password_correct = true;

    if (password_correct) {
        const exp = Math.floor(Date.now() / 1000) + 60 * 60;
        const payload = { exp, _id, username };
        jwtSignAsync(payload, secret);
        const token = await jwtSignAsync(payload, secret);
        res.send({ message: "Success", token });
    } else res.status(401).json({ massage: "Unauthorized" });
});

const jwt_protection = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        await jwtVerifyAsync(token, secret);
        res.send("Confidential information");
    } catch {
        res.status(401).json({ message: "Unauthorized" });
    }
}

// app.get("/api/confidential/:token", async (req, res) => {
//     const token = req.headers.authorization;

//     try {
//         const token = req.headers.authorization;
//         await jwtVerifyAsync(token, secret);
//         res.send("Confidential information");
//     } catch {
//         res.status(401).json({ message: "Unauthorized" });
//     }

// });

app.get("/api/confidential", jwt_protection, async (req, res) => {
    res.send("confidential information");
})

app.listen(port, () => {
    console.log(`Express.js is listening at ${port}`);
});