var express = require("express")
var app = express()

var port = 8080

app.get("/", (req, res) => {
    res.send("hello mate")
})

app.get("/canary", (req, res) => {
    res.send("v1")
})
app.listen(port, () => {
    console.log(`listening on :${port}`)
})