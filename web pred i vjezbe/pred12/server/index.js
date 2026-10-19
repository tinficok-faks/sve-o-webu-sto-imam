const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');
const port = 3000;

const multer = require("multer");
const upload = multer({ dest: "./uploads/" })

async function connect_to_db() {
    // Connection URL
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url);

    // Database Name
    const dbName = 'wp_13';

    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);

    return db;
}

(async () => {
    const app = express();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    const db = await connect_to_db();
    //await db.collection("data").drop();

    app.get("/api/files", async (req, res) => {
        const files = await db.collection("data").find({}).toArray();
        res.send(files);
    });

    app.post("/api/files/", upload.single("file"), async (req, res) => {
        const db_res = await db.collection("data").insertOne({ ...req.file, ...req.body });
        req.file["_id"] = db_res.insertedId;
        res.send({ message: "Succesfully uploaded", file: req.file });
    });

    app.listen(port, () => {
        console.log(`Express: I'm listening at ${port}`);
    });

})();