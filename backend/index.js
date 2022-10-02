import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "conn_db"
})

app.get("/", (req, res) => {
    res.json('halloo boss')
})

app.listen(8800, () => {
    console.log("Server is running..");
})