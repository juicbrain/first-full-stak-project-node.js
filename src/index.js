const express = require("express");
const fs = require("fs")
const path = require("path")
const j_son = require("./server.json")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, "server.json"), "utf-8", (err, data) => {
        if (err) return res.send(err)
    
        res.send(data)
    })
})

app.post("/user", (req, res) => {
    const newData = [...j_son, req.body];

    fs.writeFile(path.join(__dirname, "server.json"), JSON.stringify(newData, null, 2), (err, data) => {
        if (err) return res.send(err)
    })

    res.json({
        data: j_son
    })
})


app.listen(2000, function () {
    console.log("server runnin at port: ", 2000);
})