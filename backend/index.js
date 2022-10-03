import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "conn_db"
})

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json('halloo boss')
})

app.get("/shoes", (req, res) => {
    const q = "SELECT * FROM shoes"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/shoes", (req, res) => {
    const q = "INSERT INTO shoes (`model`, `description`, `price`, `cover`) VALUES (?)";
    const values = [
        req.body.model,
        req.body.description,
        req.body.price,
        req.body.cover,
    ];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Server is running..");
})