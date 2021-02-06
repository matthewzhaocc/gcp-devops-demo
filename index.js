var express = require("express")
var app = express()

var port = 8080

app.get("/", (req, res) => {
    res.send("hello mate")
})

app.listen(port, () => {
    console.log(`listening on :${port}`)
})