const express = require("express")
const favicon = require("express-favicon")

const app = express()

const path = require("path")

const PORT = process.env.PORT || 3000

// MidleWares
app.use(favicon(__dirname + "/build/favicon.ico"))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, "build")))

// EndPoints
app.get("/api/Tours", (req, res) => {
  return res.send("Welcome to the Tourism site hahahahahahaha")
})

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT)
