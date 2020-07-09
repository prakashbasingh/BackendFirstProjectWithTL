const express = require("express");



const server = express()

server.get("/", (req, res) => {
    res.status(200).send("<h1>Hello! This Is Backend Project With Our TL</h1>")
})



const PORT = 1111;
server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))