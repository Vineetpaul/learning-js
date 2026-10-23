const express = require('express');

const jobRouter = require('../routes/jobRouter.js')
const errorHandler = require('../middleware/errorHandler.js')

const app = express();
app.use(express.json());


app.use('/api/jobs',jobRouter);

app.use((req,res)=>{
    return res.status(404).json({
        success:false,
        message:"Route not found"
    })
})

app.use(errorHandler)

module.exports = app