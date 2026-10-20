// const http = require("http");

// const server = http.createServer((req,res)=>{
//     res.end("Hello from server")
// })

// server.listen(5000 , () =>{
//     console.log(`server is listing at http://localhost:5000`)
// })

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Request received");
//   res.end("Hello");
// });

// console.log("Before listen");

// server.listen(5000, () => {
//   console.log("Server started");
// });

// console.log("After listen");


// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.json({ message: "Hello my friend" })
// })

// app.get('/user', (req, res) => {
//   res.status(200).json([
//     { id: 1, name: "vineet" },
//     { id: 2, name: "karan", }
//   ])
// })

// app.listen(3000,()=>{
//   console.log(`listening http:localhost:3000`)
// })
// const express = require('express')
// require("dotenv").config();

// const PORT = Number(process.env.PORT);
// const app = express()

// app.get('/',(req,res)=>{
//   res.send("Hello zi");
// })

// app.get('/about',(req,res)=>{
//   res.json({message:"This is json"})
// });

// app.listen(PORT,()=>{
//   console.log("app is lisenoing http://localhost:5000"
//   )
// })

// const express = require('express')
// const app = express()
// app.get("/users/:id", (req, res) => {
//   if (req.params.id === "1") {
//     res.json({
//       id: 1,
//       name: "Vineet"
//     });
//   }

//   res.status(404).json({
//     message: "User not found"
//   });
// });

// app.listen(5000,()=>{
//   console.log("app is lisenoing http://localhost:5000"
//   )
// })


// const express = require('express');

// const app = express();
// app.use(express.json())

// app.get('/',(req,res)=>{
//   res.json({
//     message:"Hello from home page"
//   })
// })

// app.get('/users',(req,res)=>{
//   res.json({
//     message:"Hello from user page"
//   })
// })

// app.put('/login',(req,res)=>{
//   res.json({
//     message:"this is login page",
    
//   })
// })

// app.patch('/users/:id',(req,res)=>{
//   res.json({
//     message:"updated",
//     id:req.params.id
//   })
// })

// app.delete('/users/:id',(req,res)=>{
//   res.json({
//     message:"User deleted",
//     id:req.params.id
//   })
// })

// app.listen(3000,()=>{
//   console.log("listening on http://localhost:3000");
// })


// app.get('/jobs/:id', async (req,res)=>{
//   const {id} = req.params;

//   const job = await Job.findById(id);

//   if(!job){
//     return res.status(404).json({
//       message:"Not found"
//     })
//   }
//   res.json(job);
// })



// const express = require('express');
// const app = express();

// // Using built in middleware for parsing the data
// app.use(express.json());


// // creating some middleware for auth, validation, etc
// const loginMiddleware = function (req,res,next){
//   console.log("Login in..")
//   next();
// }
// app.use(loginMiddleware)

// const authMiddleware = function (req,res,next){
//   console.log('checking the token')
//   next()
// }

// app.use(authMiddleware)

// const validateMiddleware = function (req,res,next){
//   console.log('validate the token')
//   next()
// }
// app.use(validateMiddleware)


// app.get('/',(req,res)=>{
//   return res.status(200).json({
//     message:"Welcome Home"
//   })
// })

// app.get('/users/profile', (req,res)=>{
//   return res.status(200).json({
//     message:"This is your profile"
//   })
// })

// app.listen(3000, ()=>{
//   console.log("listening http://localhost:3000")
// })