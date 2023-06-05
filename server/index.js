
const express = require("express");
const app = express(); // create express app

const path = require("path");app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
   });

   app.use(express.static("build"));

app.get("/", (req, res) => {
  res.send("This is from express.js");
});

const http = require('http');
const server = http.createServer(app);
const {
    Server
} = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

server.listen(3000, () => {
    console.log('Listining on 3000');
}); // correct


const mongoose = require("mongoose")
const Document = require("./Document")

mongoose.connect("mongodb://127.0.0.1:27017/google-docs-clone", {
})

// const server = require('http').createServer(function (req, res) {
//   res.writeHead(200);    
// });
// server.listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1");

// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// })

const defaultValue = ""

io.on("connection", socket => {
socket.on("get-document", async documentId => {
  const document = await findOrCreateDocument(documentId)
  socket.join(documentId)
  socket.emit("load-document", document.data)

  socket.on("send-changes", delta => {
    socket.broadcast.to(documentId).emit("receive-changes", delta)
  })

  socket.on("save-document", async data => {
    await Document.findByIdAndUpdate(documentId, { data })
  })
})
})

async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}