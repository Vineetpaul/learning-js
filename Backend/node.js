// const http = require("http");

// const server = http.createServer((req,res)=>{
//     res.end("Hello from server")
// })

// server.listen(5000 , () =>{
//     console.log(`server is listing at http://localhost:5000`)
// })

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Hello");
});

console.log("Before listen");

server.listen(5000, () => {
  console.log("Server started");
});

console.log("After listen");