const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:19006",
        methods: ["GET", "POST"]
    }
});

const port = 3000;

io.on("connection", socket => {
    console.log("User connected");
    socket.on("chat message", msg => {
        console.log(msg)
        io.emit("chat message", msg);
    });
});

server.listen(port, () => console.log("Server running on port", port));