require('dotenv').config();

const app = require('../App/app.js')

const PORT = 5000;

app.listen(PORT,()=>{
    console.log("App is listening on port http://localhost:5000")
})